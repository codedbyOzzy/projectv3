import { Moon, ShieldCheck, Database, Layers } from 'lucide-react';
import './Features.css';

export default function Features() {
  const features = [
    {
      icon: <Moon size={32} className="feature-icon" />,
      title: "Night Shift: Gece Vardiyası",
      desc: "Siz uyurken ARIA uzun ve karmaşık araştırma görevlerini üstlenir. Web aramaları yapar, analiz eder ve sabah hazır bir Markdown raporu sunar."
    },
    {
      icon: <ShieldCheck size={32} className="feature-icon" />,
      title: "Güven ve İşlem Makbuzu",
      desc: "Gizlilik her şeydir. ARIA'nın komut satırınıza veya dosyalarınıza olan her müdahalesi Action Receipt ile kaydedilir. Tam kontrol sizin elinizdedir."
    },
    {
      icon: <Database size={32} className="feature-icon" />,
      title: "Model Özgürlüğü (BYOK)",
      desc: "Tek bir modele mecbur değilsiniz. OpenAI, Anthropic, Google veya tamamen yerel ve gizli Llama modelleri (Ollama) arasında anında geçiş yapın."
    },
    {
      icon: <Layers size={32} className="feature-icon" />,
      title: "Derin OS Entegrasyonu",
      desc: "Sadece sohbet etmez, eylem alır. Pano geçmişinizi okur, aktif pencerelerinize göre davranır ve terminalde güvenle komut çalıştırır."
    }
  ];

  return (
    <section id="features" className="features container">
      <div className="section-header reveal">
        <h2 className="section-title">Neden Sıradan Değil?</h2>
        <p className="section-subtitle">Sıradan sohbet botlarının ötesinde, bilgisayarınızı gerçekten kullanan yetenekler.</p>
      </div>
      
      <div className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className={`feature-card glass-panel reveal delay-${(i % 3) * 100}`}>
            <div className="icon-wrapper">
              {f.icon}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
