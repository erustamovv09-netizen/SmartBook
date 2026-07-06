import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Aloqa() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <Link href="/" className="flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Bosh sahifaga qaytish
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Biz bilan aloqa</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Takliflaringiz, savollaringiz yoki hamkorlik bo&apos;yicha bizga xabar yo&apos;llang. Sizga eng qisqa vaqt ichida javob beramiz.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto">
          
          <div className="bg-blue-600 text-white p-10 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 rounded-full bg-blue-500/50 blur-[50px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Kontaktlar</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 text-blue-200" />
                  <div>
                    <p className="text-sm text-blue-200 mb-1">Elektron pochta</p>
                    <p className="font-medium text-lg">info@smartbook.uz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 text-blue-200" />
                  <div>
                    <p className="text-sm text-blue-200 mb-1">Telefon raqam</p>
                    <p className="font-medium text-lg">+998 90 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 text-blue-200" />
                  <div>
                    <p className="text-sm text-blue-200 mb-1">Manzil</p>
                    <p className="font-medium text-lg leading-relaxed">Toshkent shahri, <br/> IT Park binosi, 4-qavat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 lg:w-3/5">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Xabar yo&apos;llash</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Ismingiz</label>
                  <input type="text" placeholder="Ali Valiyev" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Emailingiz</label>
                  <input type="email" placeholder="ali@gmail.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Mavzu</label>
                <input type="text" placeholder="Sayt boshqaruvi bo'yicha savol" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Xabaringiz</label>
                <textarea rows={4} placeholder="Assalomu alaykum, men tizim bo'yicha..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-md hover:shadow-blue-200 flex items-center gap-2 group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Xabarni yuborish
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}