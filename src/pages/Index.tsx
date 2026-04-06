import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import FaqContactSection from "@/components/FaqContactSection"
import FooterSection from "@/components/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020203] text-white">
      <HeroSection />
      <FeaturesSection />
      <FaqContactSection />
      <FooterSection />
    </div>
  )
}

export default Index
