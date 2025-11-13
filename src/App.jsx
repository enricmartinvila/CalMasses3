import './App.css'
import './Pages/MainPage'
import MainPage from './Pages/MainPage'
import Descripcion from './Pages/Descripcion'
import Espacios from './Pages/Espacios'
import Contacto from './Pages/Contacto'
import Header from './Pages/Header'
import { I18nProvider } from "./Components/i18nContext";
import { Analytics } from '@vercel/analytics/react'
import Vinos from './Pages/Vinos'


function App() {

  return (
    <>
    <I18nProvider>
        <Header/>
        <MainPage/>
        <Descripcion/>
        <Vinos/>
        {/* <Espacios/> */}
        <Contacto/>
        <Analytics />
    </I18nProvider>

    </>
  )
}

export default App
