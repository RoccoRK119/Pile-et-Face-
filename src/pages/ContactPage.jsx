import { useState } from "react";

const OFFICES = [
  {
    city: "Antananarivo — Siège",
    address: "Lot IBM 47, Tsaralalana",
    tag: "Siège social",
    color: "bg-orange-500",
  },
  {
    city: "Antananarivo — Administratif",
    address: "Lot II A 174 Bis, Nanisana",
    tag: "Bureau opérationnel",
    color: "bg-amber-500",
  },
  {
    city: "Antsirabe",
    address: "1er Étage, Immeuble MAMA, Antsenakely",
    tag: "Bureau régional",
    color: "bg-gray-700",
  },
];

const SERVICES_OPTIONS = [
  "Externalisation RH & Administration",
  "Nettoyage industriel / en hauteur",
  "Nettoyage bureaux & habitations",
  "3D — Dératisation, Désinfection, Désinsectisation",
  "Manutention & Coursier",
  "Catering & Événementiel",
  "Autre / Renseignement général",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputBase = "w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-500 outline-none transition-all duration-200";
  const inputFocused = "border-orange-400 bg-white/10";
  const inputDefault = "border-gray-700 hover:border-gray-500";

  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      {/* MAIN — split layout */}
      <div className="min-h-[calc(100vh-65px)] grid lg:grid-cols-2">

        {/* LEFT — info panel */}
        <div className="bg-gray-900 px-8 lg:px-14 py-16 flex flex-col justify-between border-r border-gray-800">
          <div>
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">Parlons-nous</p>
            <h1 className="text-5xl font-black text-white leading-tight mb-6">
              Votre projet<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">mérite une réponse.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
              Un diagnostic gratuit, sans engagement. Notre équipe revient vers vous sous 24 heures ouvrées.
            </p>

            {/* Direct contacts */}
            <div className="space-y-4 mb-12">
              <a href="tel:0348436405" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Téléphone</p>
                  <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">034 84 364 05 · 034 84 364 23</p>
                </div>
              </a>

              <a href="mailto:operation@pileetface.mg" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">operation@pileetface.mg</p>
                </div>
              </a>

              <a href="https://www.pile-et-face.mg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 0 1 3 12c0-1.21.24-2.366.671-3.418" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Site web</p>
                  <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">www.pile-et-face.mg</p>
                </div>
              </a>
            </div>

            {/* Offices */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Nos bureaux</p>
              <div className="space-y-3">
                {OFFICES.map((o) => (
                  <div key={o.city} className="flex items-start gap-3 p-4 rounded-xl border border-gray-800 bg-gray-800/50">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${o.color}`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-white text-sm font-medium">{o.city}</p>
                        <span className="text-xs text-gray-500 bg-gray-700 px-2 py-0.5 rounded-full">{o.tag}</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-0.5">{o.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom: social proof */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-xs mb-3">Ils nous font confiance</p>
            <div className="flex flex-wrap gap-2">
              {["WFP","Airtel","Air France","BFV-SG","CMA CGM","Orange"].map(c => (
                <span key={c} className="text-xs text-gray-400 border border-gray-700 px-3 py-1 rounded-full">{c}</span>
              ))}
              <span className="text-xs text-gray-500 px-3 py-1">+50 entreprises</span>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="px-8 lg:px-14 py-16 bg-gray-950 flex flex-col justify-center">
          {sent ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 text-orange-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-white mb-3">Message envoyé !</h2>
              <p className="text-gray-400 text-lg mb-8">Notre équipe revient vers vous sous 24 heures ouvrées.</p>
              <button onClick={() => setSent(false)} className="text-orange-400 text-sm underline underline-offset-4 hover:text-orange-300">
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-black text-white mb-2">Envoyez-nous un message</h2>
                <p className="text-gray-400">Décrivez votre besoin, on s'occupe du reste.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Nom complet *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      placeholder="Jean Dupont"
                      className={`${inputBase} ${focused === "name" ? inputFocused : inputDefault}`}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Entreprise</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused("")}
                      placeholder="Ma Société S.A"
                      className={`${inputBase} ${focused === "company" ? inputFocused : inputDefault}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      placeholder="jean@societe.mg"
                      className={`${inputBase} ${focused === "email" ? inputFocused : inputDefault}`}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Téléphone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      placeholder="034 XX XXX XX"
                      className={`${inputBase} ${focused === "phone" ? inputFocused : inputDefault}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Service concerné *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused("")}
                    className={`${inputBase} ${focused === "service" ? inputFocused : inputDefault} cursor-pointer`}
                  >
                    <option value="" disabled className="bg-gray-900">Sélectionnez un service...</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-gray-900">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Votre message *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    rows={5}
                    placeholder="Décrivez votre besoin, le nombre de collaborateurs concernés, votre localisation..."
                    className={`${inputBase} resize-none ${focused === "message" ? inputFocused : inputDefault}`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all text-base"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                  Envoyer ma demande
                </button>

                <p className="text-center text-gray-600 text-xs">
                  En envoyant ce formulaire, vous acceptez d'être recontacté par Pile et Face S.A dans un délai de 24h.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}