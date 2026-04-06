import { UtensilsCrossed, BedDouble, Landmark, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const PATTERN_URL = "https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png"

const FeaturesSection = () => {
  return (
    <>
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
                backgroundImage: `url(${PATTERN_URL})`,
                backgroundRepeat: "repeat",
                backgroundSize: "600px",
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
    </>
  )
}

export default FeaturesSection