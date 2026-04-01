import { SocialMedia } from "./types";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IconType } from "react-icons";

export const socialMedia: SocialMedia[] = [
  {
    name: "GitHub",
    href: "https://github.com/paulolobo7",
    icon: FaGithub
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paulo-lobo-2b36382b2",
    icon: FaLinkedin
  },
  {
    name: "Email",
    href: "mailto:paulorobertocabrallobo@gmail.com",
    icon: HiMail as IconType
  },
]