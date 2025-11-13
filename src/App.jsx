import './App.css'
import './Pages/MainPage'

import { I18nProvider } from "./Components/i18nContext";
import { Analytics } from '@vercel/analytics/react'
import Vinos from './Pages/Vinos'
import Header2 from './Pages/Header';
import MainPage from './Pages/MainPage';
import Descripcion from './Pages/Descripcion';
import Contacte from './Pages/Contacto';
// import Espacios from './Pages/Espacios';



function App() {

  return (
    <>
    <I18nProvider>
        <Header2/>
        <MainPage/>
        <Descripcion/>
        <Vinos/>
        {/* <Espacios/> */}
        <Contacte />
        <Analytics />
    </I18nProvider>

    </>
  )
}

export default App
