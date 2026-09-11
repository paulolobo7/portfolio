"use client"

import { useState, useCallback, useRef, TouchEvent, KeyboardEvent } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, ExternalLink, Award, XIcon } from "lucide-react"
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
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const total = items.length

  const nextSlide = useCallback(() => {
    if (total === 0) return
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    if (total === 0) return
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Swipe support for touch devices
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  // Keyboard navigation
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

      {/* Janela de exibição do carrossel (viewport) */}
      <div
        className="overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((cert) => {
            const imageSrc = cert.img || cert.link

            return (
              <div
                key={cert.id}
                className="w-full min-w-full flex-shrink-0"
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
                  <XIcon className="h-4 w-4" />
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
