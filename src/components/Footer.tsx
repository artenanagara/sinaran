export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="font-bold text-[16px] text-gray-900">
          sinaran<span className="text-[#1A6BFF]">.</span>
        </div>
        <div className="flex gap-7">
          {['Layanan', 'Portfolio', 'Kontak', 'Instagram'].map((item) => (
            <a key={item} href="#" className="text-[12px] font-medium text-gray-400 hover:text-gray-700 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <p className="text-[12px] text-gray-300">© 2025 Sinaran</p>
      </div>
    </footer>
  )
}
