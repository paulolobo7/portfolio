import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { profile, menuItems } from "@/app/constants/sections"
import Image from "next/image"
import { socialMedia } from "@/app/constants/social-media"






export function Profile() {
  return (
    <>
      <div>
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex flex-col gap-2 text-center">
            <span className="relative mx-auto my-4 h-36 w-36 overflow-hidden rounded-full ring-2 ring-zinc-800 shadow-xl">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="144px"
                className="object-cover"
              />
            </span>
            <span className="text-2xl font-bold tracking-tight text-zinc-100">{profile.name}</span>
            <span className="text-sm font-medium text-zinc-400">{profile.role}</span>
          </CardTitle>
          <CardDescription className="text-sm text-zinc-400 leading-relaxed mt-2">
            Olá mundo, meu nome é Paulo, sou um desenvolvedor fullstack junior com foco em TypeScript e React.js no front-end e Node.js no back-end.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-1.5 mt-4 mx-auto w-full px-4">
          {menuItems.map((item) => (
            <Button
              asChild
              key={item.id}
              variant="ghost"
              className="w-full justify-start text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 font-medium transition-colors border border-transparent hover:border-zinc-800/80"
            >
              <Link href={`#${item.id}`}>
                {item.label}
              </Link>
            </Button>
          ))}
        </CardContent>
      </div>
      <CardFooter className="flex justify-center items-center gap-2 pt-4 border-t border-zinc-800/60 w-full">
        <div className="flex gap-2">
          {socialMedia.map(({ name, href, icon: IconComponent }) => (
            <Button
              asChild
              key={name}
              variant="outline"
              size="icon"
              className="border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Link href={href} target="_blank" aria-label={name}>
                <IconComponent size={18} />
              </Link>
            </Button>
          ))}
        </div>
      </CardFooter>
    </>
  )
}
