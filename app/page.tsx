import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* SIDEBAR - igual ao dele */}
      <Card className="w-full md:w-80 h-screen sticky top-0">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image 
              src="/sua-foto.jpg" 
              alt="Profile" 
              width={160} 
              height={160}
              className="rounded-full object-cover"
            />
          </div>
          <CardTitle>Seu Nome</CardTitle>
          <CardDescription>Seu cargo</CardDescription>
        </CardHeader>
        
        <CardContent className="flex flex-col gap-2">
          <Button asChild><Link href="#resumo">Resumo</Link></Button>
          <Button asChild><Link href="#experiencias">Experiências</Link></Button>
          <Button asChild><Link href="#projetos">Projetos</Link></Button>
          <Button asChild><Link href="#educacao">Educação</Link></Button>
        </CardContent>
        
        <CardFooter className="flex justify-center gap-2">
          {/* Seus links de redes sociais aqui */}
        </CardFooter>
      </Card>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-6">
        <section id="resumo">
          <h2 className="text-2xl font-bold mb-4">Resumo</h2>
          <p>Seu texto...</p>
        </section>
        {/* ... outras sections */}
      </main>
    </div>
  )
}