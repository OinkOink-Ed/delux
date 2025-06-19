// import { Link } from "react-router";

export function History() {
  return (
    <div
      id="About"
      className="flex h-auto w-full flex-col items-center gap-12 py-12 px-12 scroll-mt-24"
    >
      <article className="flex flex-col max-w-[1600px] text-wrap gap-8 font-share-tech-mono">
        <h1 className="text-center text-3xl sm:text-5xl font-nunito-sans">
          О нас
        </h1>
        <p className="flex max-w-[80rem] text-md sm:text-lg font-share-tech-mono">
          Строительная компания Делюксо - это молодая и динамично развивающаяся
          компания на рынке строительных услуг города Сочи и Краснодарского
          края. Команда наших специалистов, объединила в себе профессионализм,
          прошедший не малый путь по ключевым отраслям строительного бизнеса. В
          настоящий момент строительная организация выполняет широкий спектр
          строительно-монтажных работ. Основные направления компании: ремонт и
          отделка помещений, строительство и реконструкция офисных зданий и
          сооружений любой сложности, капитальный ремонт. В строительной
          компании Делюксо основной целью является не только повышение качества
          оказываемых услуг в сфере строительства, но и минимизация расходов
          Клиента.
        </p>
        {/* <p className="flex max-w-[50rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, neque.
          Voluptas, unde tenetur rem a vel dicta et quas alias vitae! A, qui!
          Consequatur alias dignissimos rem, dolores placeat expedita? Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
        {/* <p className="flex max-w-[50rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, neque.
          Voluptas, unde tenetur rem a vel dicta et quas alias vitae! A, qui!
          Consequatur alias dignissimos rem, dolores placeat expedita? Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
      </article>
      {/* <div className="flex flex-wrap max-w-[1600px] gap-8 justify-center">
        Какой-то контент
      </div> */}
      {/* <Link className="mt-10 bg-cyan-600 p-4 rounded-md">
        Кнопка о контенте
      </Link> */}
    </div>
  );
}
