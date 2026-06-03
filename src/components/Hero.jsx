import { Sparkles, Terminal } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content reveal">
        <div className="badge">
          <Sparkles size={14} className="badge-icon" />
          <span>Windows İçin Kapsamlı AI Katmanı</span>
        </div>
        <h1 className="hero-title">
          Sıradan bir Chatbot Değil.<br />
          <span className="gradient-text">Kişisel AI İşletim Sisteminiz.</span>
        </h1>
        <p className="hero-subtitle delay-100">
          ARIA, bilgisayarınızı anlayan, dosyalarınıza müdahale edebilen, pano geçmişinizi analiz eden ve siz uyurken görevleri otonom olarak tamamlayan yerel AI katmanıdır. İstediğiniz modeli seçin, kontrolü elinize alın.
        </p>
        <div className="hero-actions delay-200">
          <a href="#download" className="btn-primary">
            ARIA'yı Keşfet <Terminal size={18} />
          </a>
          <a href="#features" className="btn-secondary">
            Neler Yapabilir?
          </a>
        </div>
      </div>
      
      <div className="hero-visual glass-panel reveal delay-300">
        <div className="window-header">
          <div className="dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="window-title">ARIA Command Center</div>
        </div>
        <div className="window-body">
          <div className="code-line"><span className="keyword">import</span> ARIA <span className="keyword">from</span> 'core';</div>
          <div className="code-line"></div>
          <div className="code-line"><span className="comment">// Sen uyurken ARIA çalışsın</span></div>
          <div className="code-line"><span className="function">ARIA.startNightShift</span>(&#123;</div>
          <div className="code-line indented">task: <span className="string">"Rakip analizi raporu oluştur"</span>,</div>
          <div className="code-line indented">safeMode: <span className="boolean">true</span></div>
          <div className="code-line">&#125;);</div>
          <div className="code-line mt-4 typing">Rapor oluşturuluyor... [||||||||||  ] 80%</div>
        </div>
      </div>
    </section>
  );
}
