import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const PATTERN_URL = "https://cdn.poehali.dev/projects/e1a25dbb-de40-4024-a23b-a8ac5e63fb98/bucket/5989132d-032c-4a3c-9d22-9a25af8aefea.png"

const HeroSection = () => {
  return (
    <>
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
          src={PATTERN_URL}
          alt=""
          aria-hidden="true"
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-[420px] opacity-20 pointer-events-none select-none z-10"
          style={{ filter: "hue-rotate(0deg) saturate(1.2)" }}
        />
        {/* Декоративный элемент — листок слева */}
        <img
          src={PATTERN_URL}
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
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />
    </>
  )
}

export default HeroSection
