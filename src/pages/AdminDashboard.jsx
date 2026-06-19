import { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // 1. STATISTIQUES ACCUEIL
  const [stats, setStats] = useState([
    { id: 'stat-1', name: 'Personnes en Gestion', value: '1,240', suffix: '+' },
    { id: 'stat-2', name: 'Services Actifs', value: '7', suffix: '' },
    { id: 'stat-3', name: 'Audits en cours', value: '4', suffix: ' dossiers' },
  ]);

  // 2. LEADS & MESSAGES
  const [leads, setLeads] = useState([
    { id: 'MSG-201', client: 'Airtel Madagascar', type: 'Devis Paie', date: '18 Juin', status: 'En attente', message: "Bonjour, nous souhaitons externaliser la paie de 150 collaborateurs à Tsaralalana." },
    { id: 'MSG-202', client: 'Société BFV-SG', type: 'Audit Légal', date: '17 Juin', status: 'Traité', message: "Demande d'analyse de conformité sur nos nouveaux contrats d'insertion." },
  ]);

  // 3. PIPELINE INTEGRATION
  const [audits, setAudits] = useState([
    { id: 'AUD-01', client: 'Airtel', step: 'Audit Initial', progress: 25, color: 'bg-amber-500' },
    { id: 'AUD-02', client: 'BFV-SG', step: 'Mise en place', progress: 75, color: 'bg-orange-500' },
  ]);

  // 4. VARIABLES DE PAIE
  const [payrollVariables, setPayrollVariables] = useState([
    { id: 'VAR-01', employee: 'Rindra Rakoto', company: 'Airtel', leaveDays: 2.5, overTimeHours: 8, status: 'Validé' },
    { id: 'VAR-02', employee: 'Sitraka Rajaona', company: 'BFV-SG', leaveDays: 0, overTimeHours: 12, status: 'En attente' },
  ]);

  // 5. CONTRATS & ONBOARDING
  const [onboardings, setOnboardings] = useState([
    { id: 'ONB-01', employee: 'Tahina Razafy', company: 'Airtel', type: 'CDI (Droit Malgache)', step: 'Affiliation CNaPS', status: 'En cours' },
    { id: 'ONB-02', employee: 'Hery Lalaina', company: 'Inbound Tech', type: 'CDD - 6 mois', step: 'Visa Inspection du travail', status: 'Urgent' },
  ]);

  // 6. CONFORMITÉ ET DÉCLARATIONS SOCIALES
  const [complianceDocs] = useState([
    { id: 'DOC-01', type: 'Déclaration CNaPS - Q2', period: 'Avril - Juin 2026', status: 'Généré', deadLine: '15 Juillet 2026' },
    { id: 'DOC-02', type: 'Fichier d\'état IRSA', period: 'Mai 2026', status: 'Déposé', deadLine: '15 Juin 2026' },
  ]);

  // 7. SUIVI MÉDICAL & RISQUES PROFESSIONNELS (SMIE / OSTIE)
  const [medicalVisits] = useState([
    { id: 'MED-101', employee: 'Andry Tsiry', company: 'Airtel', center: 'OSTIE Behoririka', type: 'Embauche', date: '22 Juin 2026', status: 'Planifié' },
    { id: 'MED-102', employee: 'Lova Hasina', company: 'Inbound Tech', center: 'SMIE Ankorondrano', type: 'Annuelle', date: '10 Juin 2026', status: 'Aptitude Validée' },
  ]);

  // 8. FACTURATION DES HONORAIRES D'EXTERNALISATION
  const [invoices] = useState([
    { id: 'FAC-2026-04', client: 'Airtel Madagascar', volumeEmployees: 150, ratePerHead: 15000, totalAmount: 2250000, status: 'Envoyé' },
    { id: 'FAC-2026-05', client: 'Société BFV-SG', volumeEmployees: 85, ratePerHead: 18000, totalAmount: 1530000, status: 'Payé' },
  ]);

  // ACTIONS INTERACTIVES
  const updateStatus = (id, newStatus) => setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  const approvePayroll = (id) => setPayrollVariables(payrollVariables.map(v => v.id === id ? { ...v, status: 'Validé' } : v));
  
  const advanceAudit = (id) => {
    setAudits(audits.map(a => {
      if (a.id === id) {
        const nextProgress = Math.min(a.progress + 25, 100);
        const steps = ['Audit Initial', 'Proposition de Plan', 'Mise en place', 'Suivi & Optimisation'];
        return { 
          ...a, 
          progress: nextProgress, 
          step: steps[Math.min(Math.floor(nextProgress / 25) - 1, 3)] || a.step,
          color: nextProgress === 100 ? 'bg-green-500' : 'bg-orange-500'
        };
      }
      return a;
    }));
  };

  const updateStatValue = (id) => {
    const newValue = prompt("Entrez la nouvelle valeur :");
    if (newValue) setStats(stats.map(s => s.id === id ? { ...s, value: newValue } : s));
  };

  const quickAddLead = () => {
    const client = prompt("Nom de l'entreprise cliente :");
    if(client) {
      setLeads([{ id: `MSG-${Date.now().toString().slice(-3)}`, client, type: 'Audit / Conseil', date: 'Aujourd\'hui', status: 'En attente', message: 'Création manuelle depuis le backoffice.' }, ...leads]);
    }
  };

  const quickAddOnboarding = () => {
    const employee = prompt("Nom et prénom du collaborateur :");
    if(employee) {
      setOnboardings([{ id: `ONB-${Date.now().toString().slice(-2)}`, employee, company: 'Client Pilote', type: 'CDI', step: 'Rédaction du contrat', status: 'En cours' }, ...onboardings]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans text-slate-800">
      
      {/* SIDEBAR NAVIGATION AVEC ICÔNES SVG PROFESSIONNELLES */}
      <aside className="w-full md:w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white text-xs">PF</div>
          <div>
            <h1 className="font-bold text-sm tracking-wide">PILE ET FACE S.A</h1>
            <p className="text-xs text-slate-400 font-medium">Platform ERP Core RH</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-4 mb-2">Canal Commercial</div>
          
          <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            KPI Vitrine
          </button>
          
          <button onClick={() => setActiveTab('contact')} className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'contact' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <span className="flex items-center gap-3">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
              Entrées CRM
            </span>
            <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">{leads.filter(l => l.status === 'En attente').length}</span>
          </button>
          
          <button onClick={() => setActiveTab('processus')} className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'processus' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.2" /></svg>
            Étapes d'Audits
          </button>

          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-4 pt-4 mb-2">Administration RH</div>
          
          <button onClick={() => setActiveTab('onboarding')} className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'onboarding' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Contrats & Embauches
          </button>
          
          <button onClick={() => setActiveTab('medical')} className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'medical' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Médecine du Travail
          </button>
          
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-4 pt-4 mb-2">Traitement Financier</div>
          
          <button onClick={() => setActiveTab('payroll')} className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'payroll' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Saisie Variables Paie
          </button>
          
          <button onClick={() => setActiveTab('compliance')} className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'compliance' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Télétrans CNaPS / IRSA
          </button>
          
          <button onClick={() => setActiveTab('billing')} className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'billing' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h6m-6 1h6m-7 3h8a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Facturation Honoraires
          </button>
        </nav>
      </aside>

      {/* CONTENU CENTRAL */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        
        {/* HEADER DYNAMIQUE */}
        <div className="border-b border-gray-200 pb-5 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {activeTab === 'overview' && "Pilotage de la Performance Commerciale"}
            {activeTab === 'contact' && "Fiches Prospects & Pipeline d'Acquisition"}
            {activeTab === 'processus' && "Suivi Opérationnel des Audits de Transition"}
            {activeTab === 'onboarding' && "Formalités Légales d'Embauche"}
            {activeTab === 'medical' && "Santé au Travail & Affiliations Sanitaires Inter-entreprises"}
            {activeTab === 'payroll' && "Collecte Structurée de Clôture Mensuelle de Paie"}
            {activeTab === 'compliance' && "Échéancier de Télédéclarations Obligatoires"}
            {activeTab === 'billing' && "Rapprochement & Facturation Mensuelle des Clients"}
          </h2>
        </div>

        {/* 1. INTERACTIF : STATISTIQUES ACCUEIL */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}{stat.suffix}</p>
                </div>
                <button onClick={() => updateStatValue(stat.id)} className="mt-4 text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  Ajuster la valeur
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 2. INTERACTIF : LEADS CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-4">
            <button onClick={quickAddLead} className="bg-orange-500 text-white text-xs px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-orange-600 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              Enregistrer un lead manuellement
            </button>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
              {leads.map((lead) => (
                <div key={lead.id} className="p-4 border border-gray-100 rounded-xl bg-gray-50/50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1"><span className="font-bold text-gray-900">{lead.client}</span><span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">{lead.type}</span></div>
                    <p className="text-sm text-gray-600 italic">"{lead.message}"</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${lead.status === 'En attente' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>{lead.status}</span>
                    {lead.status === 'En attente' && (<button onClick={() => updateStatus(lead.id, 'Traité')} className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-orange-500">Prendre en charge</button>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. INTERACTIF : PIPELINE PROCESSUS */}
        {activeTab === 'processus' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-6">
            {audits.map((audit) => (
              <div key={audit.id} className="p-4 border border-gray-100 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900">{audit.client} <b className="text-slate-400 font-normal">({audit.step})</b></span>
                  <span className="text-sm font-bold text-gray-700">{audit.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className={`h-full ${audit.color} transition-all duration-300`} style={{ width: `${audit.progress}%` }}></div>
                </div>
                {audit.progress < 100 && (
                  <button onClick={() => advanceAudit(audit.id)} className="mt-3 text-xs bg-slate-900 text-white font-bold px-3 py-1 rounded-md hover:bg-orange-500 flex items-center gap-1">
                    Étape suivante
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 4. INTERACTIF : CONTRATS & ONBOARDING */}
        {activeTab === 'onboarding' && (
          <div className="space-y-4">
            <button onClick={quickAddOnboarding} className="bg-slate-900 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-orange-500 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              Initialiser un Onboarding Salarié
            </button>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 font-semibold uppercase text-xs border-b border-gray-100">
                    <th className="p-4">Salarié / Client</th>
                    <th className="p-4">Type de Contrat</th>
                    <th className="p-4">Étape Administrative</th>
                    <th className="p-4 text-right">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                  {onboardings.map((onb) => (
                    <tr key={onb.id} className="hover:bg-gray-50/50">
                      <td className="p-4"><div>{onb.employee}</div><div className="text-xs text-gray-400">{onb.company}</div></td>
                      <td className="p-4 text-xs font-mono">{onb.type}</td>
                      <td className="p-4 text-slate-600 text-xs">{onb.step}</td>
                      <td className="p-4 text-right"><span className={`text-xs px-2 py-0.5 rounded font-bold ${onb.status === 'Urgent' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>{onb.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. MÉDECINE DU TRAVAIL */}
        {activeTab === 'medical' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold text-gray-400 uppercase">
                <tr>
                  <th className="p-4">Collaborateur</th>
                  <th className="p-4">Centre Médical</th>
                  <th className="p-4">Type de visite</th>
                  <th className="p-4 text-right">Aptitude</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                {medicalVisits.map((visit) => (
                  <tr key={visit.id} className="hover:bg-gray-50/50">
                    <td className="p-4"><div>{visit.employee}</div><div className="text-xs text-gray-400">{visit.company}</div></td>
                    <td className="p-4 text-xs">{visit.center}</td>
                    <td className="p-4"><span className="text-xs bg-slate-100 px-2 py-0.5 rounded">{visit.type}</span></td>
                    <td className="p-4 text-right"><span className={`text-xs px-2 py-0.5 rounded font-bold ${visit.status === 'Planifié' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'}`}>{visit.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 6. VARIABLES DE PAIE */}
        {activeTab === 'payroll' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-400 font-semibold uppercase text-xs border-b border-gray-100">
                  <th className="p-4">Salarié / Client</th>
                  <th className="p-4">Congés Pris</th>
                  <th className="p-4">Heures Supp</th>
                  <th className="p-4">Statut Paie</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                {payrollVariables.map((variable) => (
                  <tr key={variable.id} className="hover:bg-gray-50/50">
                    <td className="p-4"><div className="font-bold text-gray-900">{variable.employee}</div><div className="text-xs text-gray-400">{variable.company}</div></td>
                    <td className="p-4">{variable.leaveDays} j</td>
                    <td className="p-4 text-orange-600">+{variable.overTimeHours}h</td>
                    <td className="p-4"><span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${variable.status === 'Validé' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>{variable.status}</span></td>
                    <td className="p-4 text-right">
                      {variable.status === 'En attente' && (<button onClick={() => approvePayroll(variable.id)} className="text-xs bg-slate-900 text-white px-3 py-1 rounded-md font-bold hover:bg-orange-500">Valider pour calcul</button>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 7. COMPLIANCE OBLIGATIONS */}
        {activeTab === 'compliance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {complianceDocs.map((doc) => (
              <div key={doc.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-gray-500">{doc.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${doc.status === 'Déposé' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>{doc.status}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mt-3">{doc.type}</h4>
                  <p className="text-xs text-gray-400 mt-1">Période : {doc.period}</p>
                </div>
                <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Date Limite : <b className="text-gray-600">{doc.deadLine}</b></span>
                  <button className="text-orange-600 font-bold hover:underline flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 8. FACTURATION HONORAIRES */}
        {activeTab === 'billing' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold text-gray-400 uppercase">
                <tr>
                  <th className="p-4">Entreprise Cliente</th>
                  <th className="p-4">Effectif Actif</th>
                  <th className="p-4">Tarif Unitaire</th>
                  <th className="p-4">Total Facturé H.T.</th>
                  <th className="p-4 text-right">Encaissement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-gray-50/50">
                    <td className="p-4 text-gray-900 font-bold">{inv.client}</td>
                    <td className="p-4">{inv.volumeEmployees} salariés</td>
                    <td className="p-4 font-mono text-xs">{inv.ratePerHead.toLocaleString()} Ar</td>
                    <td className="p-4 text-orange-600 font-bold">{inv.totalAmount.toLocaleString()} Ar</td>
                    <td className="p-4 text-right"><span className={`text-xs px-2 py-0.5 rounded font-bold ${inv.status === 'Payé' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>{inv.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </main>
    </div>
  );
}