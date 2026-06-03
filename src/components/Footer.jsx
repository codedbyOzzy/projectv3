import { Layers } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Layers size={20} color="#fff" strokeWidth={1.5}/>
            <span>ARIA</span>
          </div>
          <p>Windows için tasarlanmış kişisel AI işletim sistemi. Sınırları aşın.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Ürün</h4>
            <a href="#night-shift">Night Shift 2.0</a>
            <a href="#model-freedom">Model Özgürlüğü</a>
            <a href="#features">Özellikler</a>
          </div>
          <div className="link-group">
            <h4>Geliştirici</h4>
            <a href="#">Eklenti API</a>
            <a href="#">MCP Desteği</a>
            <a href="#">GitHub</a>
          </div>
          <div className="link-group">
            <h4>Şirket</h4>
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
