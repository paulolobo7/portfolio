import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { profile, menuItems } from "@/app/constants/sections"
import Image from "next/image"
import { socialMedia } from "@/app/constants/social-media"
import { ModeToggle } from "./mode-toggle"






export function Profile() {


  return (
    <>
      <div>
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex flex-col gap-2 text-center">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={100}
              height={160}
              className="h-40 w-40 rounded-full object-cover mx-auto my-4"
            />
            <span className="text-2xl font-bold">{profile.name}</span>
            <span className="text-xl">{profile.role}</span>
          </CardTitle>
          <CardDescription className="custom_description">
            Olá mundo, meu nome é Paulo, sou um desenvolvedor front-end junior com foco em Typescript e React.js.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 mt-6 mx-auto">
          {menuItems.map((item) => (
            <Button asChild key={item.id} variant="default" className="w-full">
              <Link href={`#${item.id}`}>
                {item.label}
              </Link>
            </Button>
          ))}
        </CardContent>
      </div>
      <CardFooter className="flex flex-wrap justify-between items-center gap-2 pt-4">
        <div className="flex gap-3">
          {socialMedia.map(({ name, href, icon: IconComponent }) => (
            <Button asChild key={name} variant="outline" size="icon">
              <Link href={href} target="_blank" aria-label={name}>
                <IconComponent size={20} />
              </Link>
            </Button>
          ))}
        </div>

            <ModeToggle />
      </CardFooter>
    </>
  )
}