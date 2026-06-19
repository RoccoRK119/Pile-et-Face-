export default function Footer() {
  return (
    <footer className="bg-gray-950 px-6 md:px-16 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">PF</span>
          </div>
          <span className="text-gray-400 text-sm">Pile et Face S.A · Tsaralalana, Antananarivo</span>
        </div>
        <p className="text-gray-600 text-xs">© 2024 Pile et Face S.A · www.pile-et-face.mg</p>
      </div>
    </footer>
  );
}