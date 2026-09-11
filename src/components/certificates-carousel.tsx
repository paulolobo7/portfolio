"use client"

import { useState, useCallback, useRef, useEffect, KeyboardEvent } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, ExternalLink, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog"
import type { Certification } from "@/app/constants/types"

interface CertificatesCarouselProps {
  items: Certification[]
}

export function CertificatesCarousel({ items }: CertificatesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previewCert, setPreviewCert] = useState<Certification | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const total = items.length

  const scrollToSlide = useCallback((index: number) => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const targetElement = container.children[index] as HTMLElement | undefined
    if (targetElement) {
      container.scrollTo({
        left: targetElement.offsetLeft,
        behavior: "smooth",
      })
    }
    setCurrentIndex(index)
  }, [])

  const nextSlide = useCallback(() => {
    if (total === 0) return
    const nextIndex = (currentIndex + 1) % total
    scrollToSlide(nextIndex)
  }, [currentIndex, total, scrollToSlide])

  const prevSlide = useCallback(() => {
    if (total === 0) return
    const prevIndex = (currentIndex - 1 + total) % total
    scrollToSlide(prevIndex)
  }, [currentIndex, total, scrollToSlide])

  const goToSlide = (index: number) => {
    scrollToSlide(index)
  }

  // Sincroniza o índice do slide ativo durante o scroll nativo (touchpad, shift+wheel, touch)
  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const scrollLeft = container.scrollLeft

    let closestIndex = 0
    let minDistance = Infinity

    Array.from(container.children).forEach((child, i) => {
      const el = child as HTMLElement
      const distance = Math.abs(el.offsetLeft - scrollLeft)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = i
      }
    })

    if (closestIndex !== currentIndex && closestIndex >= 0 && closestIndex < total) {
      setCurrentIndex(closestIndex)
    }
  }

  // Mantém o slide atual alinhado caso a janela seja redimensionada
  useEffect(() => {
    const handleResize = () => {
      if (!scrollContainerRef.current) return
      const container = scrollContainerRef.current
      const targetElement = container.children[currentIndex] as HTMLElement | undefined
      if (targetElement) {
        container.scrollTo({
          left: targetElement.offsetLeft,
          behavior: "auto",
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex])

  // Suporte garantido a Shift + Scroll em navegadores/sistemas que não convertem deltaY nativamente
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.shiftKey && e.deltaY !== 0 && e.deltaX === 0) {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += e.deltaY
      }
    }
  }

  // Navegação por teclado
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      nextSlide()
    } else if (e.key === "ArrowLeft") {
      prevSlide()
    }
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div
      className="relative flex flex-col gap-3 focus:outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Carrossel de Certificados"
      role="region"
    >
      {/* Barra superior de controle e contador */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Award className="h-4 w-4 text-zinc-400" />
          <span>
            Certificado <strong className="text-zinc-200">{currentIndex + 1}</strong> de{" "}
            <strong className="text-zinc-200">{total}</strong>
          </span>
        </div>

        {/* Botões de Navegação Anterior / Próximo */}
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={prevSlide}
            aria-label="Certificado anterior"
            className="h-8 w-8 rounded-lg border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon-sm"
            onClick={nextSlide}
            aria-label="Próximo certificado"
            className="h-8 w-8 rounded-lg border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Container com Scroll Snap nativo do DOM e espaçamento entre os slides */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
        className="flex w-full gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-xl py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((cert) => {
          const imageSrc = cert.img || cert.link

          return (
            <div
              key={cert.id}
              className="w-full min-w-full flex-shrink-0 snap-start"
              aria-hidden={items[currentIndex]?.id !== cert.id}
            >
              <Card className="flex flex-col gap-4 border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-md sm:p-5">
                {/* Prévia da Imagem do Certificado */}
                {imageSrc && (
                  <div
                    onClick={() => setPreviewCert(cert)}
                    className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-950/60 shadow-inner"
                    title="Clique para ampliar o certificado"
                  >
                    <Image
                      src={imageSrc}
                      alt={cert.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      priority={items[0]?.id === cert.id}
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-5 w-5 text-zinc-200" />
                      <span className="text-xs font-medium text-zinc-200">
                        Clique para expandir
                      </span>
                    </div>
                  </div>
                )}

                {/* Detalhes do Certificado */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-zinc-100">
                        {cert.name}
                      </h3>
                      <p className="text-sm font-medium text-zinc-300">
                        {cert.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {cert.hours && (
                        <span className="rounded-md border border-zinc-800 bg-zinc-800/70 px-2 py-0.5 text-xs font-medium text-zinc-300">
                          {cert.hours}
                        </span>
                      )}
                      <span className="text-xs text-zinc-500 font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  {cert.description && (
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Rodapé do Card com Ações */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/60 pt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPreviewCert(cert)}
                    className="h-8 gap-1.5 text-xs text-zinc-400 hover:text-zinc-100"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    Visualizar em tela cheia
                  </Button>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
                      Abrir imagem original
                    </a>
                  )}
                </div>
              </Card>
            </div>
          )
        })}
      </div>

      {/* Indicadores de Paginação (Dots) */}
      <div className="flex items-center justify-center gap-1.5 pt-1">
        {items.map((cert, index) => {
          const isActive = index === currentIndex
          return (
            <button
              key={cert.id}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para certificado ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-6 bg-zinc-200"
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          )
        })}
      </div>

      {/* Modal / Dialog para Visualização em Alta Resolução */}
      <Dialog open={!!previewCert} onOpenChange={(open) => !open && setPreviewCert(null)}>
        {previewCert && (
          <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 overflow-hidden border-zinc-800 bg-zinc-950/95">
            <div className="flex min-h-12 items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-4 py-2 backdrop-blur-md">
              <div className="flex flex-col min-w-0 pr-4">
                <DialogTitle className="truncate text-sm font-semibold text-zinc-100">
                  {previewCert.name}
                </DialogTitle>
                <span className="text-xs text-zinc-400">
                  {previewCert.institution} • {previewCert.date}
                </span>
              </div>
              <DialogClose asChild>
                <Button variant="ghost" size="icon-sm" className="text-zinc-400 hover:text-zinc-100">
                  
                </Button>
              </DialogClose>
            </div>
            <DialogDescription className="sr-only">
              Visualização ampliada do certificado {previewCert.name}
            </DialogDescription>

            <div className="relative aspect-[16/11] max-h-[80vh] w-full overflow-hidden bg-black/60 p-2 sm:p-4 flex items-center justify-center">
              <Image
                src={previewCert.img || previewCert.link || ""}
                alt={previewCert.name}
                fill
                sizes="(max-width: 1024px) 95vw, 1000px"
                className="object-contain"
                priority
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
