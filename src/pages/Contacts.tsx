import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const branches = [
  {
    name: "Кулинария на Московском",
    address: "Московский проспект, 128",
    phone: "+7 (812) 000-00-01",
    hours: "Пн–Вс: 09:00–21:00",
  },
];

export default function Contacts() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ВЕРМИШЕЛЬ</div>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/menu">Меню</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        <Link to="/menu">
          <button className="btn-cta">Смотреть меню</button>
        </Link>
      </header>

      <main>
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ ФИЛИАЛЫ</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "30px" }}>
            {branches.map((b, i) => (
              <div key={i} className="menu-card" style={{ padding: "30px" }}>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", marginBottom: "20px", textTransform: "uppercase", lineHeight: 1.3 }}>
                  {b.name}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <Icon name="MapPin" size={20} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "15px", color: "#444" }}>{b.address}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Icon name="Phone" size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />
                    <span style={{ fontSize: "15px", color: "#444" }}>{b.phone}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Icon name="Clock" size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />
                    <span style={{ fontSize: "15px", color: "#444" }}>{b.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ВЕРМИШЕЛЬ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кулинария с домашним вкусом. Свежие блюда каждый день.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link></li>
            <li><Link to="/menu" style={{ color: "inherit", textDecoration: "none" }}>Меню</Link></li>
            <li><Link to="/contacts" style={{ color: "inherit", textDecoration: "none" }}>Контакты</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 09:00–21:00</li>
            <li>Сб–Вс: 10:00–22:00</li>
            <li>Без выходных</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
