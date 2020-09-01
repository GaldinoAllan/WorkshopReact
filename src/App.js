import React from 'react';
import Button from './components/Button';

import './styles.css'

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Wokshop React Desenvolvimento Web I</h1>
        <div>
          <Button link="https://slt.ifsp.edu.br/portal" title="IFSP - Salto" />
          <Button link="https://suap.ifsp.edu.br" title="SUAP" />
          <Button link="https://slt.ifsp.edu.br/portal" title="Moodle" />
        </div>
      </div>
    </div>
  );
}

export default App;




