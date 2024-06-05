import React from 'react';
import TablaProductos from './components/TablaProductos';
import { PRODUCTOS } from './productos';
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>Ánima Café</h1>
      <TablaProductos productos={PRODUCTOS} />
    </div>
  );
}

export default App;
