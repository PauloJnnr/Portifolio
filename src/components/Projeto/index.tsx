import { Card, LinkBotao } from "./styles"
import Paragrafo from "../Paragrafo"
import { Titulo } from "../Title/styles"

const Projeto = () => (
  <Card>
    <Titulo>Projetos</Titulo>
    <Paragrafo tipo="secundario">
      Lista de tarefas com filtro utilizado o framework VueJS
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
