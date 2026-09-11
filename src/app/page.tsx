import {
  Card, CardContent, CardHeader,
  CardTitle, CardFooter
} from "@/components/ui/card"
import { profile, educacao, experiencias, projetos, certificados } from "@/app/constants/sections"
import { Profile } from "@/components/profile"
import { Iframe } from "@/components/ui/iframe"
import {
  Dialog, DialogContent, DialogTrigger, DialogClose,
  DialogDescription, DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CertificatesCarousel } from "@/components/certificates-carousel"
import { XIcon } from "lucide-react"
import Image from "next/image"


export default function Home() {
  return (
    <div className="custom_container flex min-h-dvh flex-col items-center justify-center gap-8 md:h-dvh md:flex-row md:items-start md:justify-start md:gap-0 md:p-0">

      {/* SIDEBAR */}
      <aside className="w-full md:h-dvh md:w-auto">
        <Card className="h-full w-full max-w-md flex flex-col justify-between gap-2 overflow-y-auto border-zinc-800 bg-zinc-900/50 backdrop-blur-md md:rounded-none md:border-y-0 md:border-l-0 md:border-r">
          <Profile />
        </Card>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="md:custom_container flex w-full flex-col md:h-dvh md:overflow-y-auto md:py-0 scroll-smooth">
        <div className="relative flex w-full max-w-screen-sm flex-col gap-8 self-end py-4">
          <section id="resumo" className="flex flex-col gap-4">
            <h2 className="custom_title sticky top-0">
              Resumo
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed px-1">
              {profile.description}
            </p>
          </section>

          <section id="experiencias" className="flex flex-col gap-4">
            <h2 className="custom_title sticky top-0">
              Experiências
            </h2>

            {experiencias.map((exp) => (
              <Card key={exp.id} className="border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-zinc-100">{exp.cargo}</CardTitle>
                  <div className="flex flex-wrap items-center justify-between gap-1 text-sm">
                    <span className="font-medium text-zinc-300">{exp.empresa}</span>
                    <span className="text-xs text-zinc-500">{exp.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>

                  {exp.skills && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-md border border-zinc-800 bg-zinc-800/70 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Seção de Projetos */}
          <section id="projetos" className="flex flex-col gap-4">
            <h2 className="custom_title sticky top-0">
              Projetos
            </h2>

            {projetos.map((proj) => (
              <Card key={proj.id} className="flex w-full flex-col gap-2 border-zinc-800 bg-zinc-900/50 backdrop-blur-md md:flex-row">
                <aside className="flex w-full flex-col justify-between gap-4 p-6 pb-0 md:max-w-64 md:pb-6">
                  {/* Imagem do projeto */}
                  {proj.img && (
                    <div className="w-full overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-950/40">
                      <Image
                        src={proj.img}
                        alt={proj.title}
                        width={640}
                        height={360}
                        className="w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Botão que abre o iframe */}
                  <div className="w-full">
                    <Dialog>
                      <DialogTrigger className="w-full" asChild>
                        <Button className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-medium text-xs sm:text-sm" disabled={!proj.iframeUrl}>
                          Dê uma olhada no projeto!
                        </Button>
                      </DialogTrigger>
                      {proj.iframeUrl && (
                        <DialogContent
                          showCloseButton={false}
                          className="top-0 left-0 grid h-dvh w-screen max-w-none translate-x-0 translate-y-0 grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-none border-zinc-800 bg-zinc-950 p-0 sm:top-1/2 sm:left-1/2 sm:h-[90dvh] sm:w-[85vw] sm:max-w-[85vw] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl"
                        >
                          {/* Iframe ocupa o modal inteiro */}
                          <div className="flex min-h-11 items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-900/90 px-4 py-2 backdrop-blur-md">
                            <DialogTitle className="min-w-0 truncate text-sm font-medium text-zinc-100">
                              {proj.title}
                            </DialogTitle>
                            <DialogClose asChild>
                              <Button variant="ghost" size="icon-sm" className="text-zinc-400 hover:text-zinc-100">
                                <XIcon className="h-4 w-4" />
                              </Button>
                            </DialogClose>
                          </div>
                          <DialogDescription className="sr-only">
                            Visualização interativa do projeto {proj.title}.
                          </DialogDescription>

                          <div className="min-h-0 w-full">
                            <Iframe title={proj.title} iframeUrl={proj.iframeUrl} />
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>
                  </div>
                </aside>

                {/* COLUNA DIREITA — título, descrição, skills, links */}
                <section className="flex flex-1 flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-zinc-100">{proj.title}</CardTitle>
                    {proj.description && (
                      <p className="text-sm text-zinc-400 leading-relaxed">{proj.description}</p>
                    )}
                  </CardHeader>

                  <CardFooter className="flex w-full flex-col items-start gap-4 border-t border-zinc-800/60 pt-4">
                    {/* Skills */}
                    {proj.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {proj.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="rounded-md border border-zinc-800 bg-zinc-800/70 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-col gap-1.5 text-xs text-zinc-400 w-full">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors break-all"
                        >
                          <span className="text-zinc-500 font-mono">github:</span> {proj.github}
                        </a>
                      )}
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors break-all"
                        >
                          <span className="text-zinc-500 font-mono">deploy:</span> {proj.link}
                        </a>
                      )}
                    </div>
                  </CardFooter>
                </section>
              </Card>
            ))}
          </section>

          <section id="certificados" className="flex flex-col gap-4">
            <h2 className="custom_title sticky top-0">
              Certificados
            </h2>
            <CertificatesCarousel items={certificados} />
          </section>

          <section id="educacao" className="flex flex-col gap-4">
            <h2 className="custom_title sticky top-0">
              Educação
            </h2>

            {educacao.map((edu) => (
              <Card key={edu.id} className="border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-zinc-100">{edu.curso}</CardTitle>
                  <div className="flex flex-wrap items-center justify-between gap-1 text-sm">
                    <span className="font-medium text-zinc-300">{edu.institution}</span>
                    <span className="text-xs text-zinc-500">{edu.date}</span>
                  </div>
                </CardHeader>
                {edu.description && (
                  <CardContent>
                    <p className="text-sm text-zinc-400 leading-relaxed">{edu.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}
