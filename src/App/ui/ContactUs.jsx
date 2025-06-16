export function ContactUs() {
  return (
    <div
      id="ContactUs"
      className="flex h-auto w-full z-50 flex-col items-center gap-12 py-12 px-12"
    >
      <div className="flex min-h-32 flex-wrap max-w-[1600px] gap-8 justify-center">
        <iframe
          className="w-[500px] h-[400px] max-sm:w-[300px] max-sm:h-[225px]"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A151afe0d8ed331d4fec03f90ab4d457da3c64f7000a2b73dba93bd0cd4847922&amp;source=constructor"
        ></iframe>
        {/* Добавить дни работы */}
        <div className="flex flex-col max-w-[500px] gap-4">
          <h1 className="text-2xl md:text-4xl font-share-tech-mono">Как с нами связаться</h1>
          <div className="font-share-tech-mono text-md md:text-lg">
            Адрес: Краснодарский край, Сочи, микрорайон Больничный городок,
            Дагомысский переулок, 18
          </div>
          <div className="font-share-tech-mono text-md md:text-lg">
            Номер телефона: <a href="tel:89184083333" className="text-blue-400 active hover:text-blue-600">8-918-408-33-33</a>
          </div>
          <div className="font-share-tech-mono text-md md:text-lg">Дни работы: пн-пт</div>
          <div className="font-share-tech-mono text-md md:text-lg">Часы работы: 9:00 - 18:00</div>
          <div className="font-share-tech-mono text-md md:text-lg">Почта: <a href="mailto:sk_deluxo@rambler.ru" className="text-blue-400 active hover:text-blue-600">sk_deluxo@rambler.ru</a></div>
          <div className="font-share-tech-mono text-md md:text-lg">Телеграм: <a href="https://t.me/SkDeluxo" className="text-blue-400 active hover:text-blue-600">https://t.me/SkDeluxo</a></div>
        </div>
      </div>
    </div>
  );
}
