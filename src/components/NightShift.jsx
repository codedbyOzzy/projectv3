import './FeatureSection.css';

export default function NightShift() {
  return (
    <section id="night-shift" className="feature-section container">
      <div className="feature-content reveal">
        <h2 className="feature-title text-gradient">Night Shift 2.0</h2>
        <p className="feature-desc">
          Sohbet arayüzleri beklemeyi gerektirir. ARIA'nın asıl gücü otonom görev yöneticisidir. 
          Siz bilgisayardan uzakken bile derinlemesine araştırmalar yapar, kod analizleri gerçekleştirir 
          ve siz döndüğünüzde kusursuz raporlar sunar.
        </p>
        <ul className="feature-list">
          <li>Otonom Görev Zincirleri</li>
          <li>Hazır Şablonlar (Rakip Analizi, Haber Özeti)</li>
          <li>Öz-doğrulama ve Kalite Kontrol Sistemi</li>
        </ul>
      </div>
      
      <div className="feature-visual reveal delay-200">
        <img src="/night_shift.png" alt="Night Shift UI" className="mockup-img" />
      </div>
    </section>
  );
}
