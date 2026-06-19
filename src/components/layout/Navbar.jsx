import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-orange-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-white font-bold text-xs">PF</span>
        </div>
        <span className="font-semibold text-gray-900 text-sm tracking-wide">PILE ET FACE S.A</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-orange-500 transition-colors">Accueil</Link>
        <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
        <Link to="/processus" className="hover:text-orange-500 transition-colors">Processus</Link>
        <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
      </div>
      <a href="tel:0348436405" className="hidden md:flex items-center gap-2 bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        034 84 364 05
      </a>
    </nav>
  );
}