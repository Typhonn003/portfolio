import { AiFillHtml5 } from "react-icons/ai";
import * as IconBi from "react-icons/bi";
import * as IconFa from "react-icons/fa";
import * as IconSi from "react-icons/si";
import { RxStitchesLogo } from "react-icons/rx";
import { RiJavascriptFill } from "react-icons/ri";
import { TechData } from "../types/techTypes";

export const techData: TechData = {
  html: {
    logo: <AiFillHtml5 />,
    color: "bg-[#e44d25]",
    name: "HTML5",
  },
  css: {
    logo: <IconFa.FaCss3Alt />,
    color: "bg-[#3595cf]",
    name: "CSS3",
  },
  javaScript: {
    logo: <RiJavascriptFill />,
    color: "bg-[#e8d44d]",
    name: "JavaScript",
  },
  react: {
    logo: <IconFa.FaReact />,
    color: "bg-[#5bd3f3]",
    name: "React",
  },
  typeScript: {
    logo: <IconBi.BiLogoTypescript />,
    color: "bg-[#2f74c0]",
    name: "TypeScript",
  },
  styledComponents: {
    logo: <IconSi.SiStyledcomponents />,
    color: "bg-[#db7290]",
    name: "Styled Components",
  },
  tailWind: {
    logo: <IconSi.SiTailwindcss />,
    color: "bg-[#36b7f0]",
    name: "Tailwind CSS",
  },
  stitches: {
    logo: <RxStitchesLogo />,
    color: "bg-[#000000]",
    name: "Stitches",
  },
  node: {
    logo: <IconFa.FaNodeJs />,
    color: "bg-[#8bbf3d]",
    name: "Node.js",
  },
  express: {
    logo: <IconSi.SiExpress />,
    color: "bg-[#313131]",
    name: "Express.js",
  },
  nest: {
    logo: <IconSi.SiNestjs />,
    color: "bg-[#d9224c]",
    name: "NestJS",
  },
  postgreSql: {
    logo: <IconBi.BiLogoPostgresql />,
    color: "bg-[#31648c]",
    name: "PostgreSQL",
  },
  prisma: {
    logo: <IconSi.SiPrisma />,
    color: "bg-[#0c3249]",
    name: "Prisma",
  },
  python: {
    logo: <IconFa.FaPython />,
    color: "bg-[#356d9c]",
    name: "Python",
  },
  django: {
    logo: <IconBi.BiLogoDjango />,
    color: "bg-[#0f3c2d]",
    name: "Django",
  },
};
