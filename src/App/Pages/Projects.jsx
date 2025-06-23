import { CardProject } from "../ui/CardProject";

export default function Projects() {
  return (
    <div>
      <div className="flex bg-[url(/img/AllProjects.jpg)] bg-cover h-[50rem] bg-fixed bg-no-repeat"></div>
      <div className="flex h-auto  justify-center flex-col items-center">
        <h1 className="text-4xl md:text-6xl py-10">Проекты</h1>
        <div className="flex h-auto max-w-[1600px] justify-center gap-24 flex-wrap pb-10">
          <CardProject
            id="evopartbybenefitsochi"
            headName="EVOPART BY BENEFIT SOCHI"
            description="Гостиница расположенная в самом центре города Сочи на курортном проспекте. На данном объекте выполнялись работы по устройству инверсионной кровли с пригрузочным балластом, внутренняя отделка коридоров и помещений, фасад-декоративный, устройство полов для паркинга, изготовление и монтаж металлического забора."
          />
          <CardProject
            id="isolator"
            headName="Изолятор"
            description="Изолятор 3 для размещение обезьян расположенный в Научно-исследовательском центре института медицинской приматологии в Адлерском районе города Сочи. На данном объекте производилась реконструкция здания. Были выполнены отделочные, сантехнические, электромонтажные, вентиляционные, фасадные и кровельные работы.
"
          />
          <CardProject
            id="kotelnaya"
            headName="Котельная"
            description="Котельная газовая расположенная в Научно-исследовательском центре института медицинской приматологии в Адлерском районе города Сочи. На данном объекте был выполнен косметическо-восстановительный ремонт всей котельной, включая фасады, остекления, внутрення отделка и замена кровельного покрытия."
          />
        </div>
      </div>
    </div>
  );
}
