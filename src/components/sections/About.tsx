import { SectionTitle } from "../layout/SectionTitle";

export const About = () => {
  return (
    <section className="pb-10" id="about">
      <SectionTitle title="Sobre mim" />
      <article className="container-width m-auto flex flex-col gap-6 text-base leading-normal text-light-blue12/70 dark:text-dark-blue12/70 lg:w-full">
        <p>
          O meu primeiro contato com a tecnologia ocorreu durante a minha
          infância, quando meu pai me levou a uma lanhouse pela primeira vez. Eu
          fiquei fascinado com aquele mundo e desde então, minha paixão por
          tecnologia cresceu ano após ano.
        </p>
        <p>
          Aos 26 anos, meu irmão me incentivou a estudar o básico de
          desenvolvimento web. Alguns meses depois, um amigo que já atuava na
          área sugeriu que eu expandisse meus conhecimentos na renomada{" "}
          <a
            href="https://kenzie.com.br/"
            target="_blank"
            className="font-medium text-light-blue12 hover:underline hover:text-light-blue11 dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            Kenzie Academy Brasil
          </a>
          , um curso abrangente que engloba desde os fundamentos até tecnologias
          avançadas de front-end e back-end.
        </p>
        <p>
          Hoje,{" "}
          <strong className="text-light-blue12 dark:text-dark-blue12">
            sou um desenvolvedor full stack formado
          </strong>{" "}
          pela Kenzie Academy Brasil. Durante um ano de estudos intensos, criei{" "}
          <strong className="text-light-blue12 dark:text-dark-blue12">
            mais de 40 projetos individuais e em grupo
          </strong>
          , adquirindo proficiência em diversas tecnologias. Agora, estou em
          busca da minha primeira oportunidade para colocar meu talento à prova
          e contribuir significativamente com o conhecimento que adquiri ao
          longo dessa jornada
        </p>
      </article>
    </section>
  );
};
