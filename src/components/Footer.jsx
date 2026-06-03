import { Command } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-content glass-panel">
        <div className="footer-brand">
          <div className="logo">
            <Command size={24} color="var(--accent-color)" />
            <span>ARIA V3</span>
          </div>
          <p>Kişisel AI İşletim Sisteminiz. Windows için yerel, hızlı ve tamamen size ait.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Ürün</h4>
            <a href="#features">Özellikler</a>
            <a href="#showcase">Arayüz</a>
            <a href="#pricing">Planlar</a>
          </div>
          <div className="link-group">
            <h4>Geliştirici</h4>
            <a href="#">Dökümantasyon</a>
            <a href="#">Eklenti API</a>
            <a href="#">GitHub</a>
          </div>
          <div className="link-group">
            <h4>Şirket</h4>
            <a href="#">Hakkımızda</a>
            <a href="#">Gizlilik</a>
            <a href="#">Şartlar</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ARIA AI. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
