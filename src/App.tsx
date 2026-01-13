import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Projetos from "./containers/Projetos"
import SideBar from "./containers/SideBar"
import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./Styles"
import TemaLight from "./themes/light"
import TemaDark from "./themes/dark"

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
