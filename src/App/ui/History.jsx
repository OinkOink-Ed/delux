// import { Link } from "react-router";

export function History() {
  return (
    <div
      id="About"
      className="flex h-auto w-full z-50 flex-col items-center gap-12 py-12 px-12"
    >
      <article className="flex flex-col max-w-[1600px] pt-16 text-wrap gap-8">
        <h1 className="text-center text-5xl">О нас</h1>
        <p className="flex max-w-[50rem]">
          Компания “SK Deluxo” выполняет широкий спектр строительно-монтажных
          работ. Основные направления компании: ремонт и отделка помещений,
          строительство и реконструкция офисных зданий и сооружений любой
          сложности, капитальный ремонт.
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
