import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardHeader,
  CardTitle, CardDescription, CardFooter
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { profile, menuItems, sections } from "@/app/constants/sections"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* SIDEBAR -  */}
      <Card className="w-full md:w-80 h-screen sticky top-0">
        <CardHeader className="text-center">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src={profile.photo} alt="Profile" />
            <AvatarFallback>PL</AvatarFallback>
          </Avatar>
          <CardTitle>{profile.name}</CardTitle>
          <CardDescription>{profile.role}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          {menuItems.map((item) => (
          <Link key={item.id} href={`#${item.id}`}>
            <Button className="w-full">{item.label}</Button>
          </Link>
           ))}
        </CardContent>

        <CardFooter className="flex justify-center gap-2">
          {/* links de redes sociais  */}
        </CardFooter>
      </Card>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-6">
        {sections.map(  (section) => (
          <section key={section.id} className="mb-8">
            <h2 className="custom_title sticky top-0 border-b pb-2 bg-background">
                {section.title}
            </h2>
            <p className="custom_description mt-4">
              {section.title.toLowerCase()}
            </p>
          </section>
        ))}
      </main>
    </div>
  )
}