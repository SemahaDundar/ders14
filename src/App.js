import { useState } from "react";
import Baglanti from "./Baglanti";
import Card from "./Card";
import "./style.css";
import TemaContext from "./context/TemaContext";

function App() {
  const [tema, temaGuncelle] = useState("siyah");
  const renkDegistir = (renkAdi) => {
    temaGuncelle(renkAdi); //!!!tekrar render oluyor
  };

  return (
    <>
      <header>
        <div>LOGO</div>
        <nav>
          <Baglanti url="#">Baglantı 1</Baglanti>
          <Baglanti url="#">Baglantı 2</Baglanti>
          <Baglanti url="#">Baglantı 3</Baglanti>
          <Baglanti url="#">Baglantı 4</Baglanti>
        </nav>
      </header>

      <TemaContext.Provider value={tema}>
        <section>
          <h2>Yeni Ürünler</h2>
          <div className="urun-liste">
            <Card gorsel="https://lipsum.app/id/34/200x150" urunAdi="Ürün 1" />
            <Card gorsel="https://lipsum.app/id/54/200x150" urunAdi="Ürün 2" />
            <Card gorsel="https://lipsum.app/id/37/200x150" urunAdi="Ürün 3" />
            <Card gorsel="https://lipsum.app/id/30/200x150" urunAdi="Ürün 4" />
          </div>
        </section>
     
      <footer>
        <p>Tüm Hakları Saklıdır</p>
      </footer>

      <div className="tema-butonlar">
        <button
          onClick={() => {
            renkDegistir("sari");
          }}
        >
          Sarı
        </button>
        <button
          onClick={() => {
            renkDegistir(
              "yesil"  ); }}>                                                  
        
          Yeşil
        </button>

        <button
          onClick={() => {
            renkDegistir("siyah");
          }}
        >
          Siyah
        </button>
      </div>
      </TemaContext.Provider>
    </>
  );
}

export default App;
