import { SectionTitle } from "../layout/SectionTitle";

export const About = () => {
  return (
    <section className="pb-10">
      <SectionTitle title="Sobre mim" />
      <article className="mobile-width m-auto flex flex-col gap-6 text-base leading-normal text-light-blue12/70 dark:text-dark-blue12/70">
        <p>
          O meu primeiro contato com a tecnologia ocorreu durante a minha
          infância, quando meu pai me levou a uma lanhouse pela primeira vez.
          Desde então, minha paixão pela tecnologia cresceu ano após ano.
        </p>
        <p>
          Aos 26 anos, me vi perdido na vida, mas essa sensação foi passageira.
          Meu irmão me incentivou a explorar o básico do desenvolvimento web e,
          alguns meses depois, um grande amigo que já atuava nessa área sugeriu
          que eu aprofundasse meus estudos na{" "}
          <a
            href="https://kenzie.com.br/"
            target="_blank"
            className="font-medium text-light-blue12 hover:underline hover:text-light-blue11 dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            Kenzie Academy Brasil
          </a>
          , renomado curso que abrange desde os fundamentos até tecnologias
          avançadas de front-end e back-end.
        </p>
        <p>
          Hoje, sou um desenvolvedor full stack formado pela Kenzie Academy
          Brasil. Ao longo de um ano, tive a oportunidade de criar mais de 40
          projetos, tanto individuais quanto em grupo, e adquiri conhecimento em
          diversas tecnologias. Agora, estou em busca da minha primeira
          oportunidade, para colocar meu talento à prova e contribuir de forma
          significativa.
        </p>
      </article>
    </section>
  );
};
