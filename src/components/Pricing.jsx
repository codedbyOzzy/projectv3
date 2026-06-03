import { Check } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  const tiers = [
    {
      name: "FREE",
      price: "$0",
      desc: "Temel kişisel işletim sistemi deneyimi.",
      features: [
        "Command OS (Alt+Space)",
        "Sınırlı Web Arama (5/gün)",
        "Conversation Threads (3)",
        "Temel Clipboard Zekası"
      ],
      cta: "İndir"
    },
    {
      name: "PRO",
      price: "$12",
      period: "/ay",
      desc: "Gücü hisset. Uzun görevleri ARIA'ya devret.",
      features: [
        "Night Shift 2.0 (Otonom Görevler)",
        "Sınırsız Model Özgürlüğü (BYOK)",
        "Knowledge Base & Bellek Kontrolü",
        "Action Receipt (İşlem Şeffaflığı)",
        "Workflow Builder"
      ],
      cta: "PRO'ya Yükselt",
      popular: true
    },
    {
      name: "TEAM",
      price: "$39",
      period: "/kullanıcı",
      desc: "Ekipler için ortak zeka ve şirket RAG hafızası.",
      features: [
        "Cross-Device Sync",
        "Paylaşılan Knowledge Base",
        "Takım Workflows",
        "Admin Denetim Paneli"
      ],
      cta: "İletişime Geç"
    }
  ];

  return (
    <section id="pricing" className="pricing container">
      <div className="section-header reveal">
        <h2 className="section-title text-gradient">Sade ve Şeffaf Planlar</h2>
      </div>

      <div className="pricing-grid">
        {tiers.map((tier, i) => (
          <div key={i} className={`pricing-card premium-card reveal delay-${i * 100} ${tier.popular ? 'popular' : ''}`}>
            {tier.popular && <div className="popular-badge">Popüler</div>}
            <h3 className="tier-name">{tier.name}</h3>
            <div className="tier-price">
              <span className="amount">{tier.price}</span>
              {tier.period && <span className="period">{tier.period}</span>}
            </div>
            <p className="tier-desc">{tier.desc}</p>
            <hr className="divider" />
            <ul className="tier-features">
              {tier.features.map((f, j) => (
                <li key={j}>
                  <Check size={16} className="check-icon" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className={tier.popular ? 'btn-primary full-width' : 'btn-secondary full-width'}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
