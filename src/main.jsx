import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//CarreraTecanicaList, tiene que coincidier con la función en CarreraTecnicaList,
//Ahora el path del from tiene que coincidir con el nombre del archivo que en este caso sería
//CarreraTecnicaList.jsx
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
