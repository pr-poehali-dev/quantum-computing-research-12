import { Button } from "@/components/ui/button"

const PATTERN_URL = "https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png"

const FooterSection = () => {
  return (
    <footer className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12 relative overflow-hidden">
          {/* Хохломской паттерн — декоративный фон футера */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url(${PATTERN_URL})`,
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
                backgroundImage: `url(${PATTERN_URL})`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "auto 100%",
              }}
            />
            <p className="text-white/60 text-sm text-center">© 2026 Туристический портал Семёновского округа</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
