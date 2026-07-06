import Link from 'next/link';
import { ArrowLeft, BarChart, Briefcase, Zap, Smartphone, Shield, BookCopy } from 'lucide-react';

export default function Imkoniyatlar() {
  const features = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Tizimli Boshqaruv",
      desc: "Kategoriyalarni to'g'ri tashkil etish, yangi kitoblarni qo'shish va sayt arxitekturasini nazorat qilish admin panel orqali juda qulay.",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Biznes va Ilm-fan Kutubxonasi",
      desc: "Aynan professional o'sish, ilmiy maqolalar va biznes adabiyotlar bazasini shakllantirish uchun maxsus moslashtirilgan tuzilma.",
      color: "text-indigo-600",
      bg: "bg-indigo-100"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Yuqori Tezlik (Next.js)",
      desc: "Sahifalar soniyaning mindan bir qismida yuklanadi. Qidiruv tizimi orqali kerakli kitobni zudlik bilan topish kafolatlanadi.",
      color: "text-cyan-600",
      bg: "bg-cyan-100"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobil Moslashuvchanlik",
      desc: "Platforma barcha ekranlarda, ayniqsa so'nggi iOS operatsion tizimi va Apple qurilmalarida mukammal va uzluksiz ishlashiga moslashtirilgan.",
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      icon: <BookCopy className="w-6 h-6" />,
      title: "Oson Ma'lumotlar Kiritish",
      desc: "Kitob muqovalari, pdf fayllar va avtorlar haqidagi ma'lumotlarni ommaviy yuklash imkoniyati mavjud.",
      color: "text-emerald-600",
      bg: "bg-emerald-100"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Xavfsizlik",
      desc: "Ma'lumotlar bazasi va admin panelga kirish zamonaviy shifrlash protokollari bilan himoyalangan.",
      color: "text-rose-600",
      bg: "bg-rose-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-white border-b border-slate-200 py-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <Link href="/" className="flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Bosh sahifaga qaytish
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Platformamiz Imkoniyatlari</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
          Bizning tizim kitobxonlar uchun tezkor qidiruvni, adminlar uchun esa ma&apos;lumotlarni oson boshqarishni ta&apos;minlaydi.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}