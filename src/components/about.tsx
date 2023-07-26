export const About = () => {
  return (
    <section className="pb-10">
      <div className="sticky top-0 z-20 py-5 mb-5 backdrop-blur-sm bg-light-blue2/10 dark:bg-dark-blue2/10">
        <h2 className="w-[80%] m-auto text-2xl font-bold">Sobre mim</h2>
      </div>
      <div className="flex flex-col gap-6 w-[80%] m-auto text-base text-light-blue12/70 dark:text-dark-blue12/70">
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
