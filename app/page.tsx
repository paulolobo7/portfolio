import {
  Card, CardContent, CardHeader,
  CardTitle, CardDescription, CardFooter
} from "@/components/ui/card"
import { profile, menuItems, sections, educacao, experiencias, projetos } from "@/app/constants/sections"
import { Profile } from "@/components/profile"



export default function Home() {
  return (
    <div className="custom_container flex flex-col items-center justify-center gap-8 md:h-dvh md:flex-row md:items-start md:justify-start md:gap-0 md:p-0">

      {/* SIDEBAR -  */}
      <aside className="w-full md:h-dvh ">
        <Card className="w-full h-full md:rounded-r-lg max-w-md flex flex-col justify-between gap-2 overflow-y-auto md:rounded-none">
          <Profile />
        </Card>
      </aside>

       {/* CONTEÚDO PRINCIPAL */}
      <main className="md:custom_container flex w-full flex-col md:h-dvh md:overflow-y-auto md:py-0">
        <div className="relative flex w-full max-w-screen-sm flex-col gap-8 self-end py-4">
        <section id="resumo" className="flex flex-col gap-4">
         <h2 className="custom_title sticky top-0 border-b pb-2 bg-background">Resumo</h2>
         <p>{profile.description}</p>
        </section>


        <section id="experiencias" className="flex flex-col gap-4">
          <h2 className="custom_title sticky top-0 border-border border-b border-solid bg-background py-2">Experiências</h2>

          {experiencias.map((exp) => (
            <Card key={exp.id} className="p-4 mb-4">
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
                    <span key={index} className="px-2 py-1 bg-gray-200 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              </CardContent>
            </Card>
          ))}
        </section>





        <section id="projetos" className="flex flex-col gap-4">
          <h2 className="custom_title sticky top-0 border-border border-b border-solid bg-background py-2">Projetos</h2>

          {projetos.map((proj) => (
            <Card key={proj.id} className="p-4 mb-4">
              <CardHeader>
              <CardTitle>{proj.title}</CardTitle>
              </CardHeader>
              <CardContent>
              <p>{proj.description}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {proj.skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-200 rounded">
                    {skill}
                  </span>
                ))}
              </div>

              {(proj.link || proj.github) && (
                <div className="mt-4 flex gap-4">
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer">
                      ver projeto
                    </a>
                  )}
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                      ver no GitHub
                    </a>
                  )}
                </div>
              )}
              </CardContent>
            </Card>
          ))}
        </section>






        <section id="educacao" className="flex flex-col gap-4">
          <h2 className="custom_title sticky top-0 border-border border-b border-solid bg-background py-2">Educação</h2>

          {educacao.map((edu) => (
            <Card key={edu.id} className="p-4 mb-4">
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