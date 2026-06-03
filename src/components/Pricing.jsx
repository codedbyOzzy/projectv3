import { Check } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  const tiers = [
    {
      name: "FREE",
      price: "$0",
      desc: "Günlük asistan ihtiyaçlarınız için temel AI katmanı.",
      features: [
        "Temel Chat ve Komut Paleti",
        "Sınırlı Web Arama (5/gün)",
        "3 Aktif Hatırlatıcı / 20 Not",
        "Temel Clipboard Aksiyonları",
        "3 Eklenti Desteği"
      ],
      cta: "Ücretsiz Başla",
      popular: false
    },
    {
      name: "PRO",
      price: "$12",
      period: "/ay",
      desc: "Uzun görevleri devredip, iş akışınızı otomatikleştiren profesyonel sürüm.",
      features: [
        "Sınırsız Web, Hatırlatıcı, Not",
        "Night Shift (1 Paralel Görev)",
        "Alt Ajanlar (Coder, Researcher...)",
        "Workflow Builder",
        "Voice Input / Output (TTS)",
        "Gelişmiş Pano (Aksiyon Butonlu)"
      ],
      cta: "PRO'ya Yükselt",
      popular: true
    },
    {
      name: "TEAM",
      price: "$39",
      period: "/kullanıcı/ay",
      desc: "Ekipler için ortak zeka, bilgi tabanı ve senkronizasyon.",
      features: [
        "Tüm PRO Özellikleri",
        "Cross-Device Sync (Cihazlar Arası)",
        "Night Shift (3 Paralel Görev)",
        "Paylaşılan Knowledge Base",
        "Ortak Çalışma Alanı",
        "Yönetici İzin Politikaları"
      ],
      cta: "Ekiple İletişime Geç",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing container">
      <div className="section-header reveal">
        <h2 className="section-title">Hedefinize Uygun Planlar</h2>
        <p className="section-subtitle">Sadece bir sohbet robotu değil, işinizi devrettiğiniz bir çalışan kiralıyorsunuz.</p>
      </div>

      <div className="pricing-grid">
        {tiers.map((tier, i) => (
          <div key={i} className={`pricing-card glass-panel reveal delay-${i * 100} ${tier.popular ? 'popular' : ''}`}>
            {tier.popular && <div className="popular-badge">En Çok Tercih Edilen</div>}
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
                  <Check size={18} className="check-icon" />
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
