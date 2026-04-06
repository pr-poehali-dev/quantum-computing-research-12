import { MapPin, Calendar, UtensilsCrossed, BedDouble, Landmark, BookOpen, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Как добраться до округа?",
      answer:
        "Округ хорошо связан с крупными городами: регулярное автобусное и железнодорожное сообщение, а также федеральная трасса. Из Москвы удобнее всего добираться по трассе М-10 или поездом с Ленинградского вокзала. Туристический центр также организует трансферы для групп.",
    },
    {
      question: "Какое лучшее время для посещения?",
      answer:
        "Округ прекрасен в любое время года. Летом — зелень, реки и фестивали под открытым небом. Осенью — живописные леса и сбор урожая. Зима подарит снежные пейзажи и горнолыжные маршруты. Весна богата фольклорными праздниками и первым цветением.",
    },
    {
      question: "Где можно остановиться?",
      answer:
        "На портале представлены все варианты размещения: от уютных гостевых домов и небольших отелей в историческом центре до загородных баз отдыха и эко-усадеб. Фильтры позволяют найти объект по цене, расположению и типу.",
    },
    {
      question: "Как попасть на ближайшее событие?",
      answer:
        "Все мероприятия собраны в событийном календаре портала. Вы можете отфильтровать события по дате, типу (фестиваль, ярмарка, концерт, экскурсия) и месту проведения. Подпишитесь на рассылку — и мы заранее напомним о ближайших событиях.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#020203] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/34749f53-eab3-480c-a0d1-a7653880f528.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Декоративный элемент — листок справа */}
        <img
          src="https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png"
          alt=""
          aria-hidden="true"
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-[420px] opacity-20 pointer-events-none select-none z-10"
          style={{ filter: "hue-rotate(0deg) saturate(1.2)" }}
        />
        {/* Декоративный элемент — листок слева */}
        <img
          src="https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png"
          alt=""
          aria-hidden="true"
          className="absolute -left-24 bottom-24 w-[340px] opacity-15 pointer-events-none select-none z-10 rotate-180"
        />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-[#FFDB18] font-bold text-lg tracking-widest uppercase">Семёнов</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["История", "Достопримечательности", "Музеи", "События", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-[#E8491F] text-white hover:bg-[#E8491F]/90 rounded-full px-6">Планировать поездку</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Официальный туристический портал</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-balance text-[#FFDB18]">Семёнов</h1>
          <p className="text-lg md:text-xl text-[#E7AE6D] mb-8 tracking-wide">Город, где дерево становится золотом</p>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Родина хохломской росписи, богатая история и живая народная культура — всё о туризме Семёновского округа в одном месте.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-[#E8491F] text-white hover:bg-[#E8491F]/90 rounded-full px-8 py-4 text-lg">
              Что посмотреть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-[#FFDB18]/20 ring-1 ring-[#FFDB18]/60 backdrop-blur border-0 text-[#FFDB18] hover:bg-[#FFDB18]/30 rounded-full px-8 py-4 text-lg"
            >
              События и мероприятия
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="MapPin" className="w-4 h-4" />
            <span className="text-sm font-medium">Всё о туризме в одном месте</span>
          </div>
        </div>
      </div>

      {/* Brand Pattern Divider */}
      <div
        className="w-full h-24 opacity-20"
        style={{
          backgroundImage: "url(https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* История */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-[#E8491F]/40 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8491F]/20 ring-1 ring-[#E8491F]/50 mb-6">
                <BookOpen className="w-6 h-6 text-[#E8491F]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">История города</h3>
              <p className="text-white/80 leading-relaxed">Многовековое прошлое, архитектурные памятники и судьбы людей, формировавших округ.</p>
            </div>

            {/* Питание */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-[#FFDB18]/40 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFDB18]/20 ring-1 ring-[#FFDB18]/50 mb-6">
                <UtensilsCrossed className="w-6 h-6 text-[#FFDB18]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Рестораны и кафе</h3>
              <p className="text-white/80 leading-relaxed">Лучшие точки питания — от традиционной кухни до современных ресторанов.</p>
            </div>

            {/* Размещение */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-[#E8491F]/40 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8491F]/20 ring-1 ring-[#E8491F]/50 mb-6">
                <BedDouble className="w-6 h-6 text-[#E8491F]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Где остановиться</h3>
              <p className="text-white/80 leading-relaxed">Гостиницы, гостевые дома и загородные усадьбы на любой бюджет.</p>
            </div>

            {/* Музеи и объекты */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-[#FFDB18]/40 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFDB18]/20 ring-1 ring-[#FFDB18]/50 mb-6">
                <Landmark className="w-6 h-6 text-[#FFDB18]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Музеи и объекты</h3>
              <p className="text-white/80 leading-relaxed">Туристические объекты показа, музеи и культурные пространства округа.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section — "Как исследовать округ" */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12 relative overflow-hidden">
            {/* Хохломской паттерн — декоративный фон */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: "url(https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png)",
                backgroundRepeat: "repeat",
                backgroundSize: "320px",
              }}
            />
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как исследовать округ</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Планируйте поездку шаг за шагом — от знакомства с историей до открытия местных вкусов.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Step 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-[#E8491F] mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">История и культура</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Погрузитесь в историю округа: старинные летописи, архитектурные памятники и рассказы о людях, основавших эти земли.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-[#FFDB18] mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Туристические объекты</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Посетите ключевые достопримечательности и объекты показа: храмы, усадьбы, природные заповедники и смотровые площадки.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-[#E8491F] mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Местная кухня</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Откройте для себя блюда региональной кухни в лучших ресторанах и кафе округа — от фермерских завтраков до вечерних ужинов.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-[#FFDB18] mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">События и праздники</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Планируйте визит вместе с событийным календарём: фестивали, ярмарки, концерты и народные гуляния круглый год.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#E8491F] text-white hover:bg-[#E8491F]/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Посмотреть все объекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед поездкой: транспорт, размещение, события и лучшее время для посещения округа.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Задать вопрос</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Расскажите, что вас интересует — объекты, события, маршруты..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Туристический информационный центр округа. Отвечаем на вопросы о маршрутах, событиях, размещении и экскурсиях. Обращайтесь — мы рады помочь спланировать поездку!
                  </p>
                </div>

                {/* Info Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon name="MapPin" className="w-8 h-8 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Туристический центр</h4>
                      <p className="text-gray-600">Информация и помощь туристам</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[#E8491F] text-white hover:bg-[#E8491F]/90 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать нам
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12 relative overflow-hidden">
            {/* Хохломской паттерн — декоративный фон футера */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: "url(https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png)",
                backgroundRepeat: "repeat",
                backgroundSize: "280px",
              }}
            />
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold tracking-widest uppercase text-[#FFDB18]">Семёнов</span>
                </div>
                <p className="text-[#E7AE6D] text-sm mb-4 tracking-wide">Город, где дерево становится золотом</p>
                <p className="text-white/70 leading-relaxed text-pretty text-sm">
                  Официальный туристический портал Семёновского округа. История, хохломской промысел, достопримечательности, музеи, события и размещение.
                </p>
              </div>

              {/* Explore Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">НАПРАВЛЕНИЯ</h3>
                <ul className="space-y-3">
                  {["Достопримечательности", "Музеи", "Природные объекты", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">СЕРВИСЫ</h3>
                <ul className="space-y-3">
                  {["Где остановиться", "Где поесть", "События", "Маршруты"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОМОЩЬ</h3>
                <ul className="space-y-3">
                  {["Информационный центр", "Контакты", "Вопросы и ответы", "Об округе"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Подписка на события</h3>
                <p className="text-white/60 text-sm mb-4">Получайте анонсы фестивалей, ярмарок и новых маршрутов первыми.</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-[#E8491F] text-white hover:bg-[#E8491F]/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4">
              <div
                className="w-full h-12 opacity-15 rounded-lg"
                style={{
                  backgroundImage: "url(https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png)",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "auto 100%",
                }}
              />
              <p className="text-white/60 text-sm text-center">© 2026 Туристический портал Семёновского округа</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index