import React, { useState } from 'react';
import ButtonComponent from './Button/ButtonComponent';
import '@mdi/font/css/materialdesignicons.min.css'; 
import './App.css'; 

function App() {
  const [buttons, setButtons] = useState([
    { title: "Perfil Personal", image: "mdi-account-box-outline" },
    { title: "Registro de Programas", image: "mdi-text-box-plus-outline" },
    { title: "Docentes", image: "mdi-account-search-outline" },
  ]);

  const addButton = () => {
    const newButton = { title: "Postulantes", image: "mdi-account-question-outline" };
    setButtons([...buttons, newButton]);
  };

  return (
    <main className="v-main">
      <header
        className="v-toolbar v-toolbar--density-default v-theme--light v-locale--is-ltr v-app-bar"
        style={{
          backgroundColor: 'rgb(22, 45, 74)',
          color: 'rgb(255, 255, 255)',
          top: 0,
          zIndex: 1006,
          position: 'fixed',
          left: 0,
          width: '100%',
        }}
      >
        <div className="v-toolbar__content" style={{ height: '64px' }}>
          <div className="v-toolbar-title font-italic">
            <div className="v-toolbar-title__placeholder">Sistema Académico ESAM</div>
          </div>
        </div>
      </header>
      <h1>Menú principal</h1>
      <div className="v-container v-locale--is-ltr">
        <div className="v-row">
          {buttons.map((button, index) => (
            <div className="v-col" key={index}>
              <ButtonComponent title={button.title} image={button.image} />
            </div>
          ))}
        </div>
        <button onClick={addButton} style={{ margin: '20px', padding: '10px 20px' }}>
          Agregar más "Postulantes"
        </button>
      </div>
      <footer className="v-footer v-theme--light custom-footer" style={{ bottom: 0 }}>
        <div className="v-container v-container--fluid v-locale--is-ltr">
          <div className="v-row">
            <div className="v-col-md-6 v-col-12 text-center text-md-left">
              <div className="v-spacer"></div>
              <a
                className="v-btn v-btn--elevated v-btn--icon v-theme--light bg-white v-btn--density-default v-btn--size-default v-btn--variant-elevated"
                href="https://www.facebook.com/esamcochabambasucursal"
              >
                <span className="v-btn__content">
                  <i className="mdi-facebook mdi v-icon notranslate v-theme--light" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <div className="v-col-md-6 v-col-12 text-center text-md-right">
              <div className="v-spacer"></div>
              <span>© 2024 ESAM COCHABAMBA SUCURSAL</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
