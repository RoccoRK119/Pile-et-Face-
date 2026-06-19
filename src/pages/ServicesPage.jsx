import { useState } from "react";

const SERVICES = [
  {
    id: "rh",
    tag: "Ressources Humaines",
    title: "Externalisez votre RH",
    headline: "Libérez-vous. Nous gérons le reste.",
    desc: "De la paie aux contrats, du recrutement à la formation — Pile et Face prend en charge l'intégralité de votre cycle RH pour que vous puissiez vous concentrer sur votre cœur de métier.",
    accent: "from-orange-500 to-amber-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    stat: { val: "1 000+", lbl: "Personnes gérées" },
    features: [
      "Gestion de la paie & déclarations sociales",
      "Recrutement et intégration",
      "Formation & développement des talents",
      "Administration du personnel",
      "Gestion des contrats de travail",
      "Santé, sécurité & bien-être au travail",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    id: "nettoyage",
    tag: "Propreté & Hygiène",
    title: "Nettoyage professionnel",
    headline: "Des espaces impeccables, des équipes formées.",
    desc: "Industriel, en hauteur, bureaux ou habitations — nos équipes certifiées interviennent avec les équipements adaptés et des protocoles stricts pour garantir hygiène et sécurité.",
    accent: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    stat: { val: "6 ans", lbl: "D'expertise terrain" },
    features: [
      "Nettoyage industriel & entrepôts",
      "Nettoyage en hauteur (façades, vitres)",
      "Bureaux & centres commerciaux",
      "Résidences & habitations",
      "Après chantier ou déménagement",
      "Matériel Kärcher professionnel",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: "3d",
    tag: "Hygiène & Santé",
    title: "3D — Dératisation, Désinfection, Désinsectisation",
    headline: "Éliminez les nuisibles. Protégez vos espaces.",
    desc: "Rongeurs, insectes nuisibles ou agents pathogènes — notre équipe intervient avec des protocoles certifiés pour assainir durablement vos locaux professionnels et résidentiels.",
    accent: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    stat: { val: "3D", lbl: "Protocoles certifiés" },
    features: [
      "Dératisation (rats, souris, rongeurs)",
      "Désinsectisation (cafards, moustiques, fourmis...)",
      "Désinfection (virus, bactéries, champignons)",
      "Locaux professionnels & commerces",
      "Habitations individuelles & collectives",
      "Traitement curatif et préventif",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    id: "manutention",
    tag: "Logistique",
    title: "Manutention & Coursier",
    headline: "Vos marchandises bougent. Vos courriers arrivent.",
    desc: "Chargement, déchargement, rangement, transfert — ou livraison express en ville. Nos équipes qualifiées opèrent en ponctuel comme en longue durée, avec discrétion et efficacité.",
    accent: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    stat: { val: "J+0", lbl: "Livraison dans la journée" },
    features: [
      "Manutention manuelle & mécanisée",
      "Chargement / déchargement de camions",
      "Mise en rayon & gestion d'entrepôts",
      "Transfert de matériel",
      "Coursier urbain (collecte & livraison J+0)",
      "Missions ponctuelles ou longue durée",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    id: "catering",
    tag: "Événementiel",
    title: "Pile et Face Catering",
    headline: "Des saveurs qui font la différence.",
    desc: "Notre filiale Catering gère vos événements de A à Z : menus sur mesure, service soigné, décorations personnalisées. Petits-déjeuners d'entreprise, cocktails, buffets — tout est pris en charge.",
    accent: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    stat: { val: "100%", lbl: "Sur mesure" },
    features: [
      "Petits-déjeuners & pauses café",
      "Déjeuners, cocktails & buffets",
      "Service sur place avec personnel",
      "Cuisine locale, internationale & végétarienne",
      "Décoration & mise en ambiance",
      "Livraison simple disponible",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      
      {/* PAGE HEADER */}
      <div className="px-8 pt-16 pb-10 max-w-6xl mx-auto w-full">
        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3">Nos prestations</p>
        <h1 className="text-5xl font-black text-gray-900 leading-tight mb-4">
          Tout ce dont vous<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">avez besoin.</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl">5 domaines d'expertise, 1 interlocuteur, partout à Madagascar.</p>
      </div>

      {/* SERVICE EXPLORER — split layout */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-6xl mx-auto w-full px-8 pb-20 gap-8">

        {/* LEFT: Tab list */}
        <div className="lg:w-72 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-left transition-all duration-200 flex-shrink-0 lg:flex-shrink
                ${active === i
                  ? `bg-gradient-to-r ${s.accent} text-white shadow-lg`
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${active === i ? "bg-white/20" : s.iconBg}`}>
                <div className={active === i ? "text-white" : s.iconColor}>{s.icon}</div>
              </div>
              <div className="min-w-0">
                <p className={`text-xs font-medium truncate ${active === i ? "text-white/70" : "text-gray-400"}`}>{s.tag}</p>
                <p className={`text-sm font-semibold leading-tight ${active === i ? "text-white" : "text-gray-800"}`}>{s.title.split("—")[0].split(",")[0]}</p>
              </div>
            </button>
          ))}
        </div>

        {/* RIGHT: Detail panel */}
        <div className="flex-1">
          <div className={`rounded-3xl border ${svc.border} ${svc.bg} p-8 lg:p-10 h-full`}>
            {/* top */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest ${svc.iconColor}`}>{svc.tag}</span>
                <h2 className="text-3xl font-black text-gray-900 mt-1 leading-tight">{svc.headline}</h2>
              </div>
              <div className="text-right">
                <p className={`text-3xl font-black ${svc.iconColor}`}>{svc.stat.val}</p>
                <p className="text-gray-500 text-xs mt-0.5">{svc.stat.lbl}</p>
              </div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl">{svc.desc}</p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {svc.features.map((f) => (
                <div key={f} className="flex items-start gap-3 bg-white/70 rounded-xl px-4 py-3 border border-white">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${svc.accent}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="/contact"
                className={`flex items-center gap-2 bg-gradient-to-r ${svc.accent} text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity`}
              >
                Demander un devis
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/processus"
                className="flex items-center gap-2 text-gray-600 border border-gray-200 bg-white px-6 py-3 rounded-full hover:border-gray-400 transition-colors text-sm"
              >
                Voir le processus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* REFERENCES BAND */}
      <div className="bg-gray-950 py-10 px-8">
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">Quelques clients qui nous font confiance</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 max-w-4xl mx-auto">
          {["WFP · PAM","Airtel","Hotel Colbert","CMA CGM","BFV-SG","Air France","Orange Madagascar","ONUDI","Croix-Rouge","Intelcia","TLS Contact","Baobab Banque"].map(c => (
            <span key={c} className="text-gray-400 text-sm font-medium">{c}</span>
          ))}
        </div>
      </div>

      <footer className="bg-gray-950 border-t border-gray-800 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-gray-500 text-sm">© 2024 Pile et Face S.A</span>
          <span className="text-gray-600 text-xs">www.pile-et-face.mg</span>
        </div>
      </footer>
    </div>
  );
}