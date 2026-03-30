import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { profile, menuItems } from "@/app/constants/sections"







export function Profile() {
    return (
        <> 
        <CardHeader className="text-center">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src={profile.photo} alt="Profile" />
            <AvatarFallback>{profile.initials}</AvatarFallback>
          </Avatar>
          <CardTitle>{profile.name}</CardTitle>
          <CardTitle>{profile.role}</CardTitle>
          <CardDescription>{profile.description}</CardDescription>
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
        </>
    )
}