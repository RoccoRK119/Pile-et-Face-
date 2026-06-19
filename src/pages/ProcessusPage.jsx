import { useState } from "react";

const PHASES = [
  {
    num: "01",
    phase: "Découverte",
    title: "On apprend à vous connaître",
    duration: "Jour 1–3",
    desc: "Avant de proposer quoi que ce soit, on écoute. Un consultant dédié rencontre votre équipe, analyse vos processus actuels, identifie les frictions et cartographie vos besoins réels — pas ceux qu'on suppose.",
    deliverable: "Rapport de diagnostic RH",
    actions: [
      "Entretien avec votre direction & RH",
      "Audit des processus existants",
      "Identification des points de friction",
      "Cartographie de vos effectifs & contrats",
    ],
    color: "orange",
    gradFrom: "#f97316",
    gradTo: "#fb923c",
  },
  {
    num: "02",
    phase: "Proposition",
    title: "Une offre taillée pour vous",
    duration: "Jour 4–7",
    desc: "Sur la base du diagnostic, nous construisons une proposition sur mesure : périmètre exact des services, calendrier de déploiement, tarification transparente. Pas de package générique — une réponse à votre situation.",
    deliverable: "Proposition commerciale détaillée",
    actions: [
      "Périmètre de services personnalisé",
      "Planning de transition",
      "Tarification claire & détaillée",
      "SLA & indicateurs de performance",
    ],
    color: "amber",
    gradFrom: "#f59e0b",
    gradTo: "#fbbf24",
  },
  {
    num: "03",
    phase: "Transition",
    title: "On prend la main, sans accroc",
    duration: "Semaine 2–4",
    desc: "Notre équipe s'intègre à votre organisation avec un plan de bascule minutieux. Transfert des dossiers, paramétrage des outils, formation de vos équipes — la transition est invisible pour vos collaborateurs.",
    deliverable: "Mise en production complète",
    actions: [
      "Transfert & audit des dossiers RH",
      "Paramétrage des outils & logiciels",
      "Formation de vos référents internes",
      "Tests & validation avant bascule",
    ],
    color: "sky",
    gradFrom: "#0ea5e9",
    gradTo: "#38bdf8",
  },
  {
    num: "04",
    phase: "Opération",
    title: "On gère. Vous pilotez.",
    duration: "En continu",
    desc: "La gestion quotidienne est entre nos mains. Paie, contrats, déclarations, recrutement — tout est traité dans les délais. Vous recevez un tableau de bord mensuel et un point de suivi regular avec votre consultant.",
    deliverable: "Reporting mensuel & KPIs RH",
    actions: [
      "Traitement de la paie chaque mois",
      "Gestion administrative en temps réel",
      "Point mensuel avec votre consultant",
      "Tableau de bord RH personnalisé",
    ],
    color: "emerald",
    gradFrom: "#10b981",
    gradTo: "#34d399",
  },
  {
    num: "05",
    phase: "Amélioration",
    title: "On optimise en continu",
    duration: "Trimestriel",
    desc: "Tous les trois mois, nous faisons un bilan stratégique : performance des indicateurs, évolution de vos besoins, nouvelles réglementations. L'objectif : que votre RH soit toujours un avantage compétitif.",
    deliverable: "Bilan stratégique trimestriel",
    actions: [
      "Revue des KPIs & objectifs RH",
      "Veille juridique & réglementaire",
      "Ajustement du périmètre de services",
      "Plan d'amélioration pour le prochain trimestre",
    ],
    color: "violet",
    gradFrom: "#8b5cf6",
    gradTo: "#a78bfa",
  },
];

const colorMap = {
  orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
  amber:  { bg: "bg-amber-50",  border: "border-amber-200",  text: "text-amber-600",  badge: "bg-amber-100 text-amber-700" },
  sky:    { bg: "bg-sky-50",    border: "border-sky-200",    text: "text-sky-600",    badge: "bg-sky-100 text-sky-700" },
  emerald:{ bg: "bg-emerald-50",border: "border-emerald-200",text: "text-emerald-600",badge: "bg-emerald-100 text-emerald-700" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
};

export default function ProcessusPage() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active];
  const c = colorMap[phase.color];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HERO BAND */}
      <div className="bg-gray-950 px-8 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px"}} />
        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 relative">Notre méthode</p>
        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5 relative">
          Du premier contact<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">à l'excellence opérationnelle.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto relative">
          Un processus en 5 phases conçu pour une transition sans friction et une gestion RH qui s'améliore en continu.
        </p>

        {/* Timeline pills */}
        <div className="flex items-center justify-center gap-0 mt-12 relative">
          {PHASES.map((p, i) => (
            <div key={p.num} className="flex items-center">
              <button
                onClick={() => setActive(i)}
                className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl transition-all duration-200
                  ${active === i ? "bg-white/10 scale-105" : "hover:bg-white/5"}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all"
                  style={active === i ? { background: `linear-gradient(135deg, ${p.gradFrom}, ${p.gradTo})`, color: "white" } : { background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
                >
                  {p.num}
                </div>
                <span className={`text-xs font-medium hidden md:block ${active === i ? "text-white" : "text-gray-500"}`}>{p.phase}</span>
              </button>
              {i < PHASES.length - 1 && (
                <div className={`w-8 h-px transition-colors ${i < active ? "bg-orange-500" : "bg-gray-700"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PHASE DETAIL */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className={`rounded-3xl ${c.bg} ${c.border} border p-8 lg:p-12`}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-6xl font-black opacity-20 ${c.text}`}>{phase.num}</span>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>{phase.phase}</span>
                  <div className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ml-2 ${c.badge}`}>{phase.duration}</div>
                </div>
              </div>

              <h2 className="text-4xl font-black text-gray-900 mb-5 leading-tight">{phase.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{phase.desc}</p>

              <div className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border ${c.border} bg-white/60`}>
                <svg className={`w-5 h-5 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Livrable : {phase.deliverable}</span>
              </div>
            </div>

            {/* Right: actions */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Actions concrètes à cette étape</p>
              {phase.actions.map((a, i) => (
                <div key={a} className="flex items-center gap-4 bg-white/80 border border-white rounded-2xl px-5 py-4 shadow-sm">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${phase.gradFrom}, ${phase.gradTo})` }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-gray-800 text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation between phases */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-gray-600 text-sm hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Phase précédente
          </button>

          <div className="flex gap-2">
            {PHASES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${active === i ? "w-6 bg-orange-500" : "bg-gray-200 hover:bg-gray-300"}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive(Math.min(PHASES.length - 1, active + 1))}
            disabled={active === PHASES.length - 1}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            Phase suivante
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* GARANTIES BAND */}
      <div className="bg-gray-50 border-t border-gray-100 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">Nos engagements tout au long du processus</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Confidentially */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-2">Confidentialité totale</p>
              <p className="text-gray-500 text-xs leading-relaxed">Vos données RH sont protégées et ne quittent jamais notre périmètre sécurisé.</p>
            </div>

            {/* Responsiveness */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-2">Réactivité 24h</p>
              <p className="text-gray-500 text-xs leading-relaxed">Toute demande urgente reçoit une réponse dans les 24 heures ouvrées.</p>
            </div>

            {/* Compliance */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-2">Conformité légale</p>
              <p className="text-gray-500 text-xs leading-relaxed">Respect du Code du travail malgache et veille réglementaire permanente.</p>
            </div>

            {/* Single point of contact */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-2">Interlocuteur unique</p>
              <p className="text-gray-500 text-xs leading-relaxed">Un consultant dédié connaît votre dossier et reste votre point de contact.</p>
            </div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-400 px-8 py-16 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Prêt à démarrer ?</h2>
        <p className="text-orange-100 mb-8 max-w-md mx-auto">Le diagnostic est gratuit et sans engagement. Contactez-nous dès aujourd'hui.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-md">
            Demander un diagnostic gratuit
          </a>
          <a href="/services" className="text-white border border-white/40 px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
            Voir tous nos services
          </a>
        </div>
      </div>
    </div>
  );
}