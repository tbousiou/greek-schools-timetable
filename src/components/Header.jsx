import { Menu } from 'lucide-react'

function Header({ toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar} className="lg:hidden text-slate-800">
          <Menu size={24} />
        </button>
        <div className="lg:ml-0 ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Ωρολόγια Προγράμματα
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-300" />
        </div>
      </div>
    </header>
  )
}

export default Header