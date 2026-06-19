import { useState } from "react";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H18M9 10.5H7.875c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125H9" />
      </svg>
    ),
    title: "Gestion de la paie",
    desc: "Calcul, édition et versement des salaires en conformité totale avec le droit du travail malgache.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Recrutement & intégration",
    desc: "Sourcing, présélection, entretiens et onboarding structuré de vos nouveaux collaborateurs.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "Formation & développement",
    desc: "Plans de formation sur mesure pour renforcer les compétences et fidéliser vos talents.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Gestion des carrières",
    desc: "Accompagnement des mobilités internes, promotions et évolutions professionnelles.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Administration du personnel",
    desc: "Gestion des dossiers, absences, congés, registres et toutes les obligations administratives.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Gestion des contrats",
    desc: "Rédaction, suivi, renouvellement et archivage sécurisé de tous vos contrats de travail.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Santé & sécurité au travail",
    desc: "Mise en conformité HSE, visites médicales, bien-être et prévention des risques professionnels.",
    color: "bg-orange-100 text-orange-600",
  },
];

const steps = [
  {
    num: "01",
    title: "Audit de vos besoins",
    desc: "Analyse de votre structure, effectifs et processus RH existants pour identifier les opportunités d'optimisation.",
  },
  {
    num: "02",
    title: "Proposition personnalisée",
    desc: "Conception d'une offre sur mesure adaptée à votre secteur, votre taille d'entreprise et votre budget.",
  },
  {
    num: "03",
    title: "Mise en place & transition",
    desc: "Déploiement opérationnel par notre équipe et accompagnement de vos collaborateurs pendant toute la transition.",
  },
  {
    num: "04",
    title: "Suivi & reporting",
    desc: "Tableaux de bord RH, rapports réguliers et point mensuel pour piloter sereinement vos ressources humaines.",
  },
];

const stats = [
  { value: "1 000+", label: "Personnes en gestion" },
  { value: "7", label: "Services RH couverts" },
  { value: "6+", label: "Années d'expertise" },
  { value: "Madagascar", label: "Couverture nationale" },
];

export default function PileFaceRH() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 md:px-16 py-20 md:py-28">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute top-10 right-40 w-8 h-8 rounded-full bg-white/20 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Ressources Humaines · Administration
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Externalisez vos RH,<br />
            <span className="text-amber-200">concentrez-vous sur l'essentiel</span>
          </h1>
          <p className="text-orange-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Pile et Face prend en charge votre gestion RH et administrative de A à Z — paie, contrats, recrutement et bien-être au travail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="flex items-center gap-2 bg-white text-orange-600 font-semibold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Demander un devis
            </a>
            <a href="#services" className="flex items-center gap-2 text-white border border-white/40 px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">
              Découvrir nos services
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-gray-900 px-6 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-orange-400 mb-1">{s.value}</p>
              <p className="text-gray-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Ce que nous faisons</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Une prise en charge complète</h2>
            <p className="text-gray-500 max-w-xl">
              De la gestion quotidienne de la paie à la stratégie de développement des talents, nous couvrons l'ensemble du cycle RH.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${s.color} group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section id="processus" className="bg-orange-50 px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Notre méthode</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Un accompagnement en 4 étapes</h2>
            <p className="text-gray-500 max-w-xl">
              De l'audit initial au suivi opérationnel, notre processus garantit une transition sans friction.
            </p>
          </div>

          {/* Step tabs */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 min-w-0 md:min-w-[200px]">
              {steps.map((step, i) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-left transition-all duration-200 whitespace-nowrap md:whitespace-normal ${
                    activeStep === i
                      ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                      : "bg-white text-gray-600 hover:bg-orange-100"
                  }`}
                >
                  <span className={`text-xs font-bold ${activeStep === i ? "text-orange-200" : "text-orange-400"}`}>
                    {step.num}
                  </span>
                  <span className="text-sm font-medium">{step.title}</span>
                </button>
              ))}
            </div>

            <div className="flex-1 bg-white rounded-2xl p-8 border border-orange-100 shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl font-black text-orange-100">{steps[activeStep].num}</span>
                <h3 className="text-xl font-bold text-gray-900">{steps[activeStep].title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base mb-6">{steps[activeStep].desc}</p>
              <div className="flex items-center gap-2 text-orange-500 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Inclus dans toutes nos formules
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Pourquoi nous choisir</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                L'externalisation RH au cœur de notre savoir-faire
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                    ),
                    title: "Conformité garantie",
                    desc: "Respect total du Code du travail malgache et des obligations légales en vigueur.",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    ),
                    title: "Équipe de 1 000+ collaborateurs",
                    desc: "Une présence nationale à travers toutes les provinces et grandes villes de Madagascar.",
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    ),
                    title: "Réactivité & flexibilité",
                    desc: "Des solutions modulables qui s'adaptent à vos pics d'activité et évolutions organisationnelles.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-white/30 mb-6">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl font-medium leading-relaxed mb-6">
                Avec plus de 1 000 personnes déjà en gestion, l'externalisation est au cœur de notre savoir-faire.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">PF</div>
                <div>
                  <p className="font-semibold text-sm">Pile et Face S.A</p>
                  <p className="text-orange-200 text-xs">Depuis 2018 · Madagascar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-gray-900 px-6 md:px-16 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-orange-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à déléguer votre RH ?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Contactez-nous pour un diagnostic gratuit. Notre équipe vous rappelle sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:operation@pileetface.mg"
              className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              operation@pileetface.mg
            </a>
            <a
              href="tel:0348436405"
              className="flex items-center gap-2 border border-gray-600 text-gray-300 px-8 py-4 rounded-full hover:border-orange-500 hover:text-orange-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              034 84 364 05
            </a>
          </div>
        </div>
      </section>

      

    </div>
  );
}