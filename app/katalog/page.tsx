import Link from 'next/link';
import { Search, Book, ArrowLeft, Download, Filter } from 'lucide-react';

export default function Katalog() {
  // Vaqtinchalik ma'lumotlar bazasi (Mock Data)
  const books = [
    { id: 1, title: "Raqamli Iqtisodiyot", author: "Jon Smit", category: "Biznes", color: "bg-blue-500", year: 2024 },
    { id: 2, title: "Kvant Fizikasi", author: "Albert N.", category: "Ilm-fan", color: "bg-indigo-500", year: 2023 },
    { id: 3, title: "Menejment Asoslari", author: "Maykl Porter", category: "Biznes", color: "bg-blue-500", year: 2025 },
    { id: 4, title: "Koinot Sirlari", author: "Stiven Xoking", category: "Ilm-fan", color: "bg-indigo-500", year: 2021 },
    { id: 5, title: "Sun&apos;iy Intellekt", author: "Yoshyua Bengio", category: "IT va Dasturlash", color: "bg-cyan-500", year: 2026 },
    { id: 6, title: "Marketing Sirlari", author: "Filipp Kotler", category: "Biznes", color: "bg-blue-500", year: 2022 },
    { id: 7, title: "Odam Anatomiyasi", author: "Ibn Sino", category: "Tibbiyot", color: "bg-emerald-500", year: 2020 },
    { id: 8, title: "Algoritmlar", author: "Tomas Kormen", category: "IT va Dasturlash", color: "bg-cyan-500", year: 2023 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Yuqori navigatsiya qismi */}
      <div className="bg-white border-b border-slate-200 py-6 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Bosh sahifaga qaytish
          </Link>
          <h1 className="text-xl font-bold text-slate-900 hidden sm:block">SmartBook Katalogi</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        {/* Qidiruv va Filtr paneli */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 mb-8 relative z-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Kitob nomi, avtor yoki mavzu bo&apos;yicha qidiring..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-700"
            />
          </div>
          <div className="flex gap-4">
            <button className="bg-slate-50 text-slate-600 border border-slate-200 px-6 py-3 rounded-xl font-medium hover:bg-slate-100 transition-colors flex items-center gap-2">
              <Filter className="w-5 h-5" /> Filtr
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-blue-200">
              Qidirish
            </button>
          </div>
        </div>

        {/* Kategoriyalar tugmalari (Pills) */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer shadow-sm hover:bg-blue-700 transition-colors">
            Barchasi
          </span>
          <span className="bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-colors shadow-sm">
            Biznes
          </span>
          <span className="bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-colors shadow-sm">
            Ilm-fan
          </span>
          <span className="bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-colors shadow-sm">
            IT va Dasturlash
          </span>
          <span className="bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-colors shadow-sm">
            Tibbiyot
          </span>
        </div>

        {/* Kitoblar ro'yxati (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
              
              {/* Kitob muqovasi (Cover) */}
              <div className={`w-full h-56 ${book.color} rounded-2xl mb-5 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <Book className="w-14 h-14 mb-3 z-10 opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                <span className="text-white/80 text-sm font-medium z-10 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  {book.year}
                </span>
              </div>
              
              {/* Kitob ma'lumotlari */}
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3">
                  {book.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5 leading-tight">{book.title}</h3>
                <p className="text-sm text-slate-500">{book.author}</p>
              </div>

              {/* Tugmalar qismi */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <button className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors flex items-center gap-1 group-hover:pl-1 duration-300">
                  O&apos;qishni boshlash
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <Download className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}