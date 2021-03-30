import logo from './logo.svg';
import './App.css';

import {I18nProvider, LOCALES} from './i18n';
import translate from './i18n/translate';
import { useState } from 'react';

function App() {
  const [locale, setLocale] = useState(LOCALES.GERMAN)

  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <header className="App-header">
          {translate("hello")}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {translate('edit', {path: <code>src/App.js</code>})}
            <hr/>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
          <button onClick={() => setLocale(LOCALES.GERMAN)}>GERMAN</button>
          <button onClick={() => setLocale(LOCALES.FRENCH)}>FRENCH</button>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
