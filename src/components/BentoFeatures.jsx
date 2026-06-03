import { Terminal, Lock, HardDrive, Layers } from 'lucide-react';
import './BentoFeatures.css';

export default function BentoFeatures() {
  return (
    <section id="features" className="bento-section container">
      <div className="section-header reveal">
        <h2 className="section-title text-gradient">Sisteminizin Kalbinde</h2>
      </div>

      <div className="bento-grid">
        <div className="bento-card premium-card span-2 reveal delay-100">
          <Terminal size={24} className="bento-icon" />
          <h3>Action Receipt (İşlem Makbuzu)</h3>
          <p>Güven kara kutuda olmaz. ARIA'nın terminalinize yazdığı her kod, okuduğu her dosya, hangi modeli kullandığı şeffaf bir makbuz olarak kaydedilir.</p>
        </div>

        <div className="bento-card premium-card reveal delay-200">
          <HardDrive size={24} className="bento-icon" />
          <h3>Knowledge Base</h3>
          <p>Tüm proje dosyalarınızı RAG ile hafızaya alır. Sadece kodu değil, mimariyi de anlar.</p>
        </div>

        <div className="bento-card premium-card reveal delay-100">
          <Layers size={24} className="bento-icon" />
          <h3>Conversation Threads</h3>
          <p>Tek bir uzun sohbet yok. Konulara göre ayrılmış iş parçacıkları (Threads) ile düzen.</p>
        </div>

        <div className="bento-card premium-card span-2 reveal delay-200">
          <Lock size={24} className="bento-icon" />
          <h3>Güvenlik & Gizlilik Paneli</h3>
          <p>ARIA'nın hakkınızda bildiği (facts) her şeyi görüntüleyin, yönetin, silin. Local modeller ve şifrelenmiş veri yapıları ile %100 kontrol sizde.</p>
        </div>
      </div>
    </section>
  );
}
