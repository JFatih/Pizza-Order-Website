import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import OrderPizza from "./components/OrderPizza";
import Home from "./components/Home";
import SuccessPage from "./components/SuccessPage";
import pizzaData from "./components/PizzaData";
import { useState } from "react";

const initialValues = {
  pizzaAdı: "",
  boyutSec: "",
  hamurKalınlıgı: "",
  ekMalzemeler: [],
  adı: "",
  soyadı: "",
  yorum: "",
  adet: "",
  secimler: 0,
  toplam: 0,
};

function App() {
  const [orderForm, setOrderForm] = useState(initialValues);
  return (
    <div className="main-footer">
      <h1 className="footer-title">Teknolojik Yemekler</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/OrderPizza">
          <OrderPizza
            pizzaData={pizzaData}
            setOrderForm={setOrderForm}
            orderForm={orderForm}
          />
        </Route>
        <Route exact path="/SuccessPage">
          <SuccessPage orderForm={orderForm} />
        </Route>
      </Switch>
      <footer className="footer-bottom">
        <section className="footer-data">
          <div className="footer-info">
            <h3>Teknolojik Yemekler</h3>
            <div>
              <img src="Assets/mile2-aseets/footer/icons/icon-1.png" />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div>
              <img src="Assets/mile2-aseets/footer/icons/icon-2.png" />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div>
              <img src="Assets/mile2-aseets/footer/icons/icon-3.png" />
              <p>+902161234567</p>
            </div>
          </div>
          <div className="footer-menu">
            <h4>Sıccacık Menuler</h4>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hacketlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </section>
        <div className="footer-social">
          <p>Instagram</p>
          <div>
            <img src="Assets/mile2-aseets/footer/insta/li-0.png" />
            <img src="Assets/mile2-aseets/footer/insta/li-1.png" />
            <img src="Assets/mile2-aseets/footer/insta/li-2.png" />
            <img src="Assets/mile2-aseets/footer/insta/li-3.png" />
            <img src="Assets/mile2-aseets/footer/insta/li-4.png" />
            <img src="Assets/mile2-aseets/footer/insta/li-5.png" />
          </div>
        </div>
      </footer>
      <div className="grey-line"></div>
      <div className="footer-copyright">
        <p>© 2023 Teknolojik Yemekler</p>
      </div>
    </div>
  );
}

export default App;
