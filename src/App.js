import React from 'react';
import ButtonComponent from './Button/ButtonComponent';

function App() {
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
          <div className="v-col">
            <ButtonComponent title="Perfil Personal" image="mdi-account-box-outline" />
          </div>
          <div className="v-col">
            <ButtonComponent title="Registro de Programas" image="mdi-text-box-plus-outline" />
          </div>
          <div className="v-col">
            <ButtonComponent title="Docentes" image="mdi-account-search-outline" />
          </div>
        </div>
        <div className="v-row">
          <div className="v-col">
            <ButtonComponent title="Postulantes" image="mdi-account-question-outline" />
          </div>
          <div className="v-col">
            <ButtonComponent title="Programas" image="mdi-text-box-outline" />
          </div>
          <div className="v-col">
            <ButtonComponent title="Certificaciones Docentes" image="mdi-certificate-outline" />
          </div>
        </div>
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
              {/* Agrega más enlaces de redes sociales según sea necesario */}
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
