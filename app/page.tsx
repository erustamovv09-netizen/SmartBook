import Link from 'next/link';
import { BookOpen, BarChart, Zap, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200 scroll-smooth">
      
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
            Smart<span className="text-blue-600">Book</span>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <Link href="#home" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Asosiy</Link>
            <Link href="/imkoniyatlar" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Imkoniyatlar</Link>
            <Link href="/aloqa" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Aloqa</Link>
          </nav>

          <Link href="/kirish" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-blue-200">
            Tizimga kirish
          </Link>
        </div>
      </header>
  

      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-cyan-400/20 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Yangi Next.js versiyasida
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl">
            Ilm-fan va biznes kitoblari <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              yangi formatda
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Ma&apos;lumotlar bazasini qulay boshqaring, kataloglarni tartiblang va o&apos;quvchilarga eng yaxshi raqamli resurslarni taqdim eting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/katalog" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group">
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
              Katalogga kirish
            </Link>
            <Link href="/imkoniyatlar" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center">
              Batafsil ma&apos;lumot
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nega aynan bizning tizim?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Platformamiz sizga eng zamonaviy texnologiyalar yordamida tezlik va qulaylikni taqdim etadi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tizimli Boshqaruv</h3>
              <p className="text-slate-600 leading-relaxed">
                Kategoriyalarni to&apos;g&apos;ri tashkil etish, yangi ma&apos;lumotlarni qo&apos;shish va sayt arxitekturasini nazorat qilish juda qulay.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Biznes va Ilm-fan</h3>
              <p className="text-slate-600 leading-relaxed">
                Aynan professional o&apos;sish va ilmiy izlanishlar uchun mo&apos;ljallangan maxsus adabiyotlar to&apos;plami.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Yuqori Tezlik</h3>
              <p className="text-slate-600 leading-relaxed">
                Foydalanuvchilar qidiruv tizimidan zudlik bilan kerakli bo&apos;limni topishlari va resurslarni yuklashlari kafolatlanadi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12 border-t border-slate-800 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-extrabold tracking-tight text-white">
            Smart<span className="text-blue-500">Book</span>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; 2026 Barcha huquqlar himoyalangan. Next.js va Tailwind CSS orqali yaratildi.
          </p>
        </div>
      </footer>
      
    </div>
  );
}