import { Command, MessageSquare, Workflow } from 'lucide-react';
import './Showcase.css';

export default function Showcase() {
  return (
    <section id="showcase" className="showcase container">
      <div className="section-header reveal">
        <h2 className="section-title">Arayüz Değil, <span className="gradient-text-accent">İş İstasyonu</span></h2>
        <p className="section-subtitle">Sadece sohbet penceresinden ibaret olmayan, yerel işletim sistemi hissi veren zengin arayüzler.</p>
      </div>

      <div className="showcase-layout">
        <div className="showcase-text">
          <div className="showcase-item reveal delay-100 active-item">
            <div className="item-icon"><Command /></div>
            <div>
              <h3>Komut Paleti (Slash Commands)</h3>
              <p>Alt+Space ile anında Bar'ı açın. `/night`, `/code`, `/translate` ile iş akışınızı hızlandırın. Sürükle bırak desteğiyle saniyeler içinde analiz.</p>
            </div>
          </div>
          
          <div className="showcase-item reveal delay-200">
            <div className="item-icon"><MessageSquare /></div>
            <div>
              <h3>Conversation Threads</h3>
              <p>Her konu için ayrı iş parçacığı oluşturun. Tek bir uzun sohbet yerine kategorize edilmiş, kolay aranan konuşma geçmişi.</p>
            </div>
          </div>

          <div className="showcase-item reveal delay-300">
            <div className="item-icon"><Workflow /></div>
            <div>
              <h3>Workflow Builder & Otomasyon</h3>
              <p>Otomatikleşen işlerinizi birbirine bağlayın. Tetikleyiciler (zaman, pano) ile tamamen size özel otomasyon zincirleri oluşturun.</p>
            </div>
          </div>
        </div>

        <div className="showcase-visual glass-panel reveal delay-200">
          <div className="search-bar">
            <Command size={18} className="search-icon"/>
            <input type="text" placeholder="ARIA ile eylem yap... (Örn: /night rakip analizi yap)" disabled />
          </div>
          <div className="search-results">
            <div className="result-item selected">
              <span className="cmd">/night</span>
              <span className="desc">Gece vardiyasında otonom araştırma başlat</span>
            </div>
            <div className="result-item">
              <span className="cmd">/code</span>
              <span className="desc">Coder agent ile proje dosyalarında değişiklik yap</span>
            </div>
            <div className="result-item">
              <span className="cmd">/vision</span>
              <span className="desc">Mevcut aktif pencerenin ekran görüntüsünü analiz et</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
