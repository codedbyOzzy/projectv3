import clipboardIntelImg from '../assets/clipboard_intel.png';
import './FeatureSection.css';

export default function ClipboardIntelligence() {
  return (
    <section id="clipboard-intel" className="feature-section container reverse">
      <div className="feature-visual reveal delay-200">
        <img src={clipboardIntelImg} alt="Clipboard Intelligence UI" className="mockup-img" />
      </div>

      <div className="feature-content reveal">
        <h2 className="feature-title text-gradient">Pano Zekası (Clipboard)</h2>
        <p className="feature-desc">
          Ctrl+C yaptığınız anda ARIA ne istediğinizi bilir. Sistem panonuzu anlık olarak 
          analiz eder ve kopyaladığınız verinin türüne (Kod, URL, Hata Logu) göre size 
          özel hızlı aksiyonlar sunar.
        </p>
        <ul className="feature-list">
          <li><strong>Hata Ayıklama (Debug):</strong> Kopyalanan terminal hatalarını anında çözer.</li>
          <li><strong>Smart Paste:</strong> Metni veya kodu hedef konuma uygun formata dönüştürür.</li>
          <li><strong>Command OS Entegrasyonu:</strong> Alt+Space ile panodaki veriyi doğrudan işler.</li>
        </ul>
      </div>
    </section>
  );
}
