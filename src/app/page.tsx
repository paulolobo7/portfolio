import {
  Card, CardContent, CardHeader,
  CardTitle, CardFooter
} from "@/components/ui/card"
import { profile, educacao, experiencias, projetos } from "@/app/constants/sections"
import { Profile } from "@/components/profile"
import { Iframe } from "@/components/ui/iframe"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"


export default function Home() {
  return (
    <div className="custom_container flex flex-col items-center justify-center gap-8 md:h-dvh md:flex-row md:items-start md:justify-start md:gap-0 md:p-0">

      {/* SIDEBAR -  */}
      <aside className="md:h-dvh md:rounded-r-lg">
        <Card className="h-full max-w-md flex flex-col justify-between gap-2 overflow-y-auto md:rounded-none">
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
            <p>{profile.description}</p>
          </section>


          <section id="experiencias" className="flex flex-col gap-4">
            <h2 className="custom_title sticky top-0">
              Experiências
            </h2>

            {experiencias.map((exp) => (
              <Card key={exp.id}>
                <CardHeader>
                  <CardTitle>{exp.cargo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{exp.empresa}</p>
                  <p>{exp.date}</p>
                  <p>{exp.description}</p>

                  {exp.skills && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>




          {/* Seção de Projetos - cada projeto é um card com título, descrição, skills e um botão que abre um modal com o iframe do projeto */}
          <section id="projetos" className="flex flex-col gap-4">
            <h2 className="custom_title sticky top-0">
              Projetos
            </h2>

            {projetos.map((proj) => (
              <Card key={proj.id} className="flex w-full flex-col gap-2 md:flex-row">

                
                <aside className="flex w-full flex-col justify-between gap-4 p-6 pb-0 md:max-w-64 md:pb-6">
                  {/* Imagem do projeto */}
                  {proj.img && (
                    <div className="w-full">
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}

                  {/* Botão que abre o iframe */}
                  <div className="w-full">
                    <Dialog>
                      <DialogTrigger className="w-full" asChild>
                        <Button className="w-full" disabled={!proj.iframeUrl}>
                          Dê uma olhada no projeto!
                        </Button>
                      </DialogTrigger>
                      {proj.iframeUrl && (
                        <DialogContent
                          showCloseButton={false}
                          className="w-[calc(100vw-2rem)] h-[90vh] sm:w-[85vw] sm:max-w-[85vw] p-0 rounded-lg overflow-hidden"
                        >
                          {/* Iframe ocupa o modal inteiro */}
                          <div className="relative w-full h-full">
                            <Iframe title={proj.title} iframeUrl={proj.iframeUrl} />

                            {/* Barra flutuante sobre o iframe com blur */}
                            <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 backdrop-blur-md bg-background/60 border-b">
                              <span className="text-sm font-medium">{proj.title}</span>
                              <DialogClose asChild>
                                <Button variant="ghost" size="icon-sm">
                                  <XIcon className="h-4 w-4" />
                                </Button>
                              </DialogClose>
                            </div>
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>
                  </div>
                </aside>

                {/* COLUNA DIREITA — título, descrição, skills, links */}
                <section className="w-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{proj.title}</CardTitle>
                    {proj.description && (
                      <p className="custom_description">{proj.description}</p>
                    )}
                  </CardHeader>

                  <CardFooter className="flex w-full flex-col items-start gap-4 pt-2">
                    {/* Skills */}
                    {proj.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {proj.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-col gap-2 text-sm text-secondary-foreground w-full">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 underline break-all"
                        >
                          🔗 {proj.github}
                        </a>
                      )}
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 underline break-all"
                        >
                          🔗 {proj.link}
                        </a>
                      )}
                    </div>
                  </CardFooter>
                </section>

              </Card>
            ))}
          </section>

          <section id="educacao" className="flex flex-col gap-4">
            <h2 className="custom_title sticky top-0">
              Educação
            </h2>

            {educacao.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <CardTitle>{edu.curso}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{edu.institution}</p>
                  <p>{edu.date}</p>
                  {edu.description && <p>{edu.description}</p>}
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}