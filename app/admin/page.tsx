import Link from 'next/link';
import { LayoutDashboard, Users, BookOpen, Settings, Plus, ArrowLeft } from 'lucide-react';

export default function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col">
        <Link href="/" className="text-2xl font-extrabold mb-10 text-white flex items-center gap-2">
           <ArrowLeft className="w-5 h-5 text-slate-400 hover:text-white" />
           Admin<span className="text-blue-500">Panel</span>
        </Link>
        <nav className="flex flex-col gap-2 flex-1">
          <a href="#" className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium">
            <LayoutDashboard className="w-5 h-5" /> Boshqaruv
          </a>
          <a href="#" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
            <BookOpen className="w-5 h-5" /> Kitoblar & Kategoriyalar
          </a>
          <a href="#" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
            <Users className="w-5 h-5" /> Foydalanuvchilar
          </a>
          <a href="#" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors mt-auto">
            <Settings className="w-5 h-5" /> Sozlamalar
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Umumiy Holat</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 shadow-sm transition-colors">
            <Plus className="w-5 h-5" /> Yangi kitob qo&apos;shish
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 font-medium mb-1">Jami Kitoblar</p>
            <h3 className="text-3xl font-bold text-slate-900">1,248</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 font-medium mb-1">Biznes Kategoriyasi</p>
            <h3 className="text-3xl font-bold text-slate-900">512</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 font-medium mb-1">Ilm-fan Kategoriyasi</p>
            <h3 className="text-3xl font-bold text-slate-900">736</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-800">Oxirgi qo&apos;shilganlar</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Nomi</th>
                <th className="p-4 font-medium">Kategoriya</th>
                <th className="p-4 font-medium">Holati</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-900">#001</td>
                <td className="p-4 text-slate-700">Raqamli Iqtisodiyot</td>
                <td className="p-4"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Biznes</span></td>
                <td className="p-4 text-green-600 font-medium">Faol</td>
              </tr>
              <tr className="border-t border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-900">#002</td>
                <td className="p-4 text-slate-700">Kvant Fizikasi</td>
                <td className="p-4"><span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Ilm-fan</span></td>
                <td className="p-4 text-green-600 font-medium">Faol</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}