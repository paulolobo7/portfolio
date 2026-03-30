import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { profile, menuItems } from "@/app/constants/sections"
import Image from "next/image"






export function Profile() {
    return (
   <> 
     <div>
      <CardHeader className="text-center">
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
            {profile.description}
         </CardDescription>
      </CardHeader>

        <CardContent className="flex flex-col gap-2">
            {menuItems.map((item) => (
            <Button asChild key={item.id} className="w-full">
            <Link href={`#${item.id}`}>
                {item.label}
            </Link>
            </Button>
            ))}
        </CardContent>
     </div>    
        <CardFooter className="flex justify-center gap-2">
          {/* links de redes sociais  */}
        </CardFooter>
   </>
    )
}