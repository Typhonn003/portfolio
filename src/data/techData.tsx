import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoTypescript,
  BiLogoDjango,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaCss3Alt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";
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
    logo: <FaCss3Alt />,
    color: "bg-[#3595cf]",
    name: "CSS3",
  },
  javaScript: {
    logo: <RiJavascriptFill />,
    color: "bg-[#e8d44d]",
    name: "JavaScript",
  },
  react: {
    logo: <FaReact />,
    color: "bg-[#5bd3f3]",
    name: "React",
  },
  typeScript: {
    logo: <BiLogoTypescript />,
    color: "bg-[#2f74c0]",
    name: "TypeScript",
  },
  styledComponents: {
    logo: <SiStyledcomponents />,
    color: "bg-[#db7290]",
    name: "Styled Components",
  },
  tailWind: {
    logo: <SiTailwindcss />,
    color: "bg-[#36b7f0]",
    name: "Tailwind CSS",
  },
  stitches: {
    logo: <RxStitchesLogo />,
    color: "bg-[#000000]",
    name: "Stitches",
  },
  node: {
    logo: <FaNodeJs />,
    color: "bg-[#8bbf3d]",
    name: "Node.js",
  },
  express: {
    logo: <SiExpress />,
    color: "bg-[#313131]",
    name: "Express.js",
  },
  nest: {
    logo: <SiNestjs />,
    color: "bg-[#d9224c]",
    name: "NestJS",
  },
  postgreSql: {
    logo: <BiLogoPostgresql />,
    color: "bg-[#31648c]",
    name: "PostgreSQL",
  },
  prisma: {
    logo: <SiPrisma />,
    color: "bg-[#0c3249]",
    name: "Prisma",
  },
  python: {
    logo: <FaPython />,
    color: "bg-[#356d9c]",
    name: "Python",
  },
  django: {
    logo: <BiLogoDjango />,
    color: "bg-[#0f3c2d]",
    name: "Django",
  },
};
