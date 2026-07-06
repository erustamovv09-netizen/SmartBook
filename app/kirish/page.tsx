import Link from 'next/link';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-cyan-400/20 blur-[100px]"></div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 relative z-10">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Bosh sahifaga qaytish
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Tizimga kirish</h1>
          <p className="text-slate-500">Ma&apos;lumotlar bazasi va admin panelga o&apos;tish uchun profilingizga kiring.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Elektron pochta</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input 
                type="email" 
                placeholder="admin@smartbook.uz" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Parol</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">Parolni unutdingizmi?</a>
            </div>
          </div>

          <Link href="/admin" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-blue-200 flex justify-center mt-6">
            Kirish
          </Link>
        </form>
      </div>
    </div>
  );
}