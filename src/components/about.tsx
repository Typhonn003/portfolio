import { SectionTitle } from "./sectionTitle";

export const About = () => {
  return (
    <section className="pb-10">
      <SectionTitle title="Sobre mim" />
      <div className="flex flex-col gap-6 mobile-width m-auto text-base text-light-blue12/70 dark:text-dark-blue12/70">
        <p>
          Em 2008, tive minha{" "}
          <strong className="font-medium text-light-blue12 dark:text-dark-blue12">
            primeira experiência
          </strong>{" "}
          em desenvolvimento web ao criar um simples blog com meu primo,
          dedicado ao nosso jogo favorito da época. Embora tenha abandonado o
          projeto quando os servidores do jogo foram encerrados anos depois, não
          fazia ideia de que essa{" "}
          <strong className="font-medium text-light-blue12 dark:text-dark-blue12">
            breve experiência
          </strong>{" "}
          se tornaria parte de algo maior.
        </p>
        <p>
          Há pouco mais de um ano, meu primo e um amigo, ambos desenvolvedores
          front-end, me aconselharam a seguir seus passos e iniciar minha
          jornada de estudos em programação. Então decidi ingressar na{" "}
          <strong>
            <a
              href="https://kenzie.com.br/"
              target="_blank"
              className="font-medium text-light-blue12 dark:text-dark-blue12"
            >
              Kenzie Academy Brasil
            </a>
          </strong>
          , uma escola de desenvolvimento web com 6 meses dedicados ao front-end
          e 6 meses ao back-end.
        </p>
        <p>
          Hoje após{" "}
          <strong className="font-medium text-light-blue12 dark:text-dark-blue12">
            2 mil horas
          </strong>{" "}
          de muito estudo, esforço e dedicação, sou um{" "}
          <strong className="font-medium text-light-blue12 dark:text-dark-blue12">
            desenvolver full stack
          </strong>{" "}
          formado em busca de sua primeira oportunidade.
        </p>
      </div>
    </section>
  );
};
