export function ContactsHotel() {
  return (
    <div className="flex h-auto w-full z-50 flex-col items-center gap-12 py-12 px-12">
      <div className="flex min-h-32 flex-wrap max-w-[1600px] gap-8 justify-center">
        <iframe
          className="w-[500px] h-[400px] max-sm:w-[300px] max-sm:h-[225px]"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A151afe0d8ed331d4fec03f90ab4d457da3c64f7000a2b73dba93bd0cd4847922&amp;source=constructor"
        ></iframe>
        <div className="flex flex-col max-w-[500px] gap-4">
          <h1 className="text-4xl">Как с нами связаться</h1>
          <div>
            Адрес: Краснодарский край, Сочи, микрорайон Больничный городок,
            Дагомысский переулок, 18
          </div>
          <div>
            Номер телефона: <a href="tel:89184083333">8-918-408-33-33</a>
          </div>
          <div>Часы работы 9:00 - 18:00</div>
        </div>
      </div>
    </div>
  );
}
