import { Link } from "react-router-dom";

const services = [
  {
    title: "Gestion de la paie",
    desc: "Calcul, bulletins, déclarations sociales et fiscales gérés de bout en bout chaque mois.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Recrutement",
    desc: "Sourcing, présélection et entretiens pour vous fournir des candidats déjà qualifiés.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Formation",
    desc: "Plans de formation adaptés aux besoins métiers et au développement des compétences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Administration du personnel",
    desc: "Contrats, dossiers salariés, registres légaux et démarches administratives courantes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Gestion des absences",
    desc: "Suivi des congés, arrêts maladie et autorisations dans un système centralisé.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Relations sociales",
    desc: "Accompagnement sur les obligations légales, conflits et dialogue avec les représentants du personnel.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    title: "Reporting RH",
    desc: "Tableaux de bord et indicateurs clés transmis régulièrement à la direction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Audit", desc: "Analyse de votre organisation RH actuelle et identification des besoins." },
  { num: "02", title: "Proposition", desc: "Plan d'externalisation sur mesure avec périmètre et tarifs clairs." },
  { num: "03", title: "Mise en place", desc: "Transfert des dossiers et démarrage de la gestion par notre équipe." },
  { num: "04", title: "Suivi", desc: "Reporting régulier et ajustements continus selon vos retours." },
];

export default function RHAdministration() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 md:px-16 py-20 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            1 000+ personnes en gestion
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Externalisation RH & Administration
          </h1>
          <p className="text-orange-50 text-lg mb-8">
            Confiez la gestion de vos ressources humaines à des experts, et concentrez-vous sur votre activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">
              Demander un devis
            </Link>
            <a href="tel:0348436405" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              034 84 364 05
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-950 px-6 md:px-16 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-orange-500">1 000+</p>
            <p className="text-gray-400 text-sm mt-1">Personnes gérées</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-orange-500">7</p>
            <p className="text-gray-400 text-sm mt-1">Services proposés</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-orange-500">6 ans</p>
            <p className="text-gray-400 text-sm mt-1">Depuis 2018</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-orange-500">MG</p>
            <p className="text-gray-400 text-sm mt-1">Madagascar</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Nos services RH</h2>
          <p className="text-gray-500 text-center mb-12">Une prise en charge complète, du recrutement à la paie.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-orange-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section id="processus" className="bg-orange-50 px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Comment ça marche</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-6 text-center">
                <p className="text-orange-500 font-bold text-sm mb-3">{s.num}</p>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/processus" className="text-orange-600 font-medium hover:underline">
              Voir le détail du processus →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contact" className="bg-gray-950 px-6 md:px-16 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Prêt à externaliser votre RH ?</h2>
        <p className="text-gray-400 mb-8">Parlons de votre organisation et de vos besoins.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Nous contacter
          </Link>
          <a href="mailto:contact@pile-et-face.mg" className="border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
            contact@pile-et-face.mg
          </a>
        </div>
      </section>
    </div>
  );
}