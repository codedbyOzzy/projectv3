import './Hero.css';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content reveal">
        <div className="hero-pill">
          <span className="pill-dot"></span>
          ARIA V3 Yayınlandı. Gerçek İşletim Sistemi Katmanı.
        </div>
        <h1 className="hero-title text-gradient">
          Sadece sohbet etmeyin.<br />
          Bilgisayarınızı yönetin.
        </h1>
        <p className="hero-subtitle delay-100">
          ARIA, Windows ile bütünleşik çalışan, dilediğiniz yapay zeka modelini 
          yerel veya bulut tabanlı olarak seçebildiğiniz, gizlilik odaklı kişisel 
          AI işletim sistemidir.
        </p>
        <div className="hero-actions delay-200">
          <a href="#download" className="btn-primary">Windows İçin İndir</a>
          <a href="#docs" className="btn-secondary">Dökümantasyonu İncele</a>
        </div>
      </div>
      
      <div className="hero-image-wrapper reveal delay-300">
        <img src="/command_os.png" alt="ARIA Command OS" className="hero-image" />
        <div className="image-glow"></div>
      </div>
    </section>
  );
}
