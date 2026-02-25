import { Link } from "react-router-dom";

export default function Index() {
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
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕДА КАК
              <br />
              ИСКУССТВО <span>вкуса</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Кулинария — это больше, чем еда. Это любовь, традиция и мастерство.
              В «Вермишели» мы готовим из свежих продуктов каждый день, сохраняя
              настоящий домашний вкус в каждом блюде.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link to="/menu">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Наше меню
                </button>
              </Link>
              <Link to="/contacts">
                <button className="btn-cta" style={{ background: "white" }}>
                  Найти нас
                </button>
              </Link>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              ДОМАШНИЙ
              <br />
              ВКУС
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВЕРМИШЕЛЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              СВЕЖЕЕ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ГОТОВИМ КАЖДЫЙ ДЕНЬ * СВЕЖИЕ ПРОДУКТЫ * ДОМАШНИЕ РЕЦЕПТЫ * ДОСТУПНЫЕ ЦЕНЫ * НЕСКОЛЬКО ФИЛИАЛОВ *
            ГОТОВИМ КАЖДЫЙ ДЕНЬ * СВЕЖИЕ ПРОДУКТЫ * ДОМАШНИЕ РЕЦЕПТЫ * ДОСТУПНЫЕ ЦЕНЫ * НЕСКОЛЬКО ФИЛИАЛОВ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">О КУЛИНАРИИ</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              <div className="menu-card" style={{ padding: "30px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🍝</div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", marginBottom: "12px", textTransform: "uppercase" }}>
                  Традиции вкуса
                </h3>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                  Наши рецепты созданы с заботой о каждом госте. Мы используем только свежие,
                  натуральные ингредиенты без консервантов и усилителей вкуса.
                </p>
              </div>

              <div className="menu-card" style={{ padding: "30px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>👨‍🍳</div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", marginBottom: "12px", textTransform: "uppercase" }}>
                  Мастерство шефов
                </h3>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                  Наши повара — настоящие профессионалы с многолетним опытом. Каждое блюдо
                  готовится с вниманием к деталям и уважением к продукту.
                </p>
              </div>

              <div className="menu-card" style={{ padding: "30px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌿</div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", marginBottom: "12px", textTransform: "uppercase" }}>
                  Польза и вкус
                </h3>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                  Сбалансированное КБЖУ, разнообразие позиций для любого образа жизни — от
                  сытных горячих блюд до лёгких салатов и десертов.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЫ ГОТОВИМ С ДУШОЙ.</h2>
            <p className="vibe-text">
              «Вермишель» — это семейная кулинария с атмосферой уюта. Мы верим, что
              хорошая еда делает жизнь лучше. Несколько филиалов по городу — чтобы
              вкусный обед был всегда рядом с вами.
            </p>
            <Link to="/contacts">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Найти филиал
              </button>
            </Link>
          </div>
          <div className="vibe-img" style={{ background: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            ХИТЫ МЕНЮ
          </h2>
          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Паста карбонара"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Паста Карбонара</h3>
                  <span className="price">390 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Классическая карбонара со сливочным соусом, беконом и пармезаном.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Популярное</span>
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Лазанья"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Лазанья болоньезе</h3>
                  <span className="price">450 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Многослойная лазанья с мясным соусом болоньезе и сыром.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Новинка</span>
              <img
                src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пицца"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Пицца Маргарита</h3>
                  <span className="price">420 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Томатный соус, моцарелла, базилик на тонком хрустящем тесте.
                </p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/menu">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Всё меню
              </button>
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ВЕРМИШЕЛЬ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кулинария с домашним вкусом. Свежие блюда каждый день — с любовью к еде и гостям.
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
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (800) 123-45-67</li>
            <li>info@vermishel.ru</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
