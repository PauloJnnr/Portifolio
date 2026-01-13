import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Title from "../../components/Title"
import { Descricao, BotaoTema, SideBarContainer } from "./styles"

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>Paulo Júnior</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        PauloJnnr
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Fullstack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
