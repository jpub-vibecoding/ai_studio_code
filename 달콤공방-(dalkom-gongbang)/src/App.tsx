import { motion } from "motion/react";
import { Instagram, Clock, Phone, MapPin, Send, Cookie } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "초코칩 쿠키",
    price: "3,500원",
    description: "진한 벨기에산 초코칩이 듬뿍 들어간 클래식한 수제 쿠키입니다. 겉바속촉의 정석을 느껴보세요.",
    image: "/src/assets/images/chocolate_chip_cookie_1779095021421.png"
  },
  {
    id: 2,
    name: "말차 쿠키",
    price: "3,800원",
    description: "제주산 말차의 진한 향과 화이트 초코칩, 마카다미아가 어우러진 고급스러운 맛입니다.",
    image: "/src/assets/images/matcha_cookie_white_chocolate_1779095036521.png"
  },
  {
    id: 3,
    name: "솔티드 캬라멜 쿠키",
    price: "4,000원",
    description: "매장에서 직접 끓인 수제 캬라멜과 말돈 소금의 완벽한 단짠 조화를 자랑합니다.",
    image: "/src/assets/images/salted_caramel_cookie_1779095051282.png"
  }
];

export default function App() {
  const scrollIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen selection:bg-bakery-accent/10">
      {/* Navigation Header */}
      <nav className="h-20 flex items-center justify-between px-6 md:px-12 border-b border-bakery-soft sticky top-0 bg-bakery-bg/80 backdrop-blur-md z-50">
        <div className="text-2xl font-bold tracking-tight text-bakery-ink font-serif italic">달콤공방</div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] opacity-60 font-sans font-semibold">
          <span className="cursor-pointer hover:opacity-100 transition-opacity">About</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Cookies</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Reviews</span>
        </div>
      </nav>

      {/* New Hero Section */}
      <section className="w-full bg-bakery-hero py-24 md:py-40 px-6 text-center text-white overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            매일 아침 구워 <br /> 당일 배송합니다.
          </h1>
          <p className="text-lg md:text-2xl font-light opacity-90 font-serif">
            따뜻한 온기와 달콤한 행복을 문 앞까지 전해드려요.
          </p>
        </motion.div>
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-0" />
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-6 tracking-tight text-bakery-ink font-medium">
            정성을 담은 프리미엄 수제 쿠키
          </h2>
          <p className="text-base md:text-xl text-bakery-accent italic font-serif leading-relaxed opacity-80">
            매일 아침 달콤한 향기로 문을 여는 작은 공방, 달콤공방입니다.
          </p>
        </motion.div>
      </section>

      {/* Product Section */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              transition={{ 
                layout: { duration: 0.3 },
                default: { delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }}
              className="bg-white rounded-[2.5rem] p-8 border border-bakery-soft flex flex-col shadow-[0_4px_20px_-4px_rgba(67,52,34,0.05)] hover:shadow-[0_30px_60px_-12px_rgba(67,52,34,0.12)] transition-shadow duration-500 group"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl mb-8 bg-bakery-bg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-bakery-ink/5 rounded-3xl" />
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="font-serif text-2xl mb-2 text-bakery-ink font-semibold">{product.name}</h3>
                <p className="text-sm text-bakery-accent/70 leading-relaxed mb-10 flex-grow">
                  {product.description}
                </p>
                <div className="flex flex-col gap-6 pt-6 border-t border-bakery-soft/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-bakery-ink/40 font-bold">Price</span>
                    <span className="font-bold text-2xl text-bakery-ink">{product.price}</span>
                  </div>
                  <a
                    href="https://pf.kakao.com/_placeholder"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-black text-white py-4 rounded-xl text-sm font-sans font-bold tracking-wider hover:bg-bakery-accent transition-all duration-300 text-center shadow-lg hover:shadow-bakery-accent/20"
                  >
                    주문하기
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-bakery-footer pt-20 pb-16 px-6 border-t border-bakery-soft">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-bakery-ink">운영 시간</p>
            <p className="text-xs text-bakery-accent font-medium">화 - 토 11:00 - 20:00 <span className="opacity-50 ml-1">(일, 월 휴무)</span></p>
          </div>

          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm font-bold text-bakery-ink">연락처</p>
            <p className="text-xs text-bakery-accent font-medium">010-1234-5678</p>
          </div>

          <div className="flex flex-col gap-2 md:text-right">
            <p className="text-sm font-bold text-bakery-accent">Instagram</p>
            <p className="text-xs tracking-tight text-bakery-ink font-semibold">@sweet_atelier_cookies</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-bakery-ink/20 font-bold">
            &copy; 2026 달콤공방
          </p>
        </div>
      </footer>
    </div>
  );
}
