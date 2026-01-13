import Title from "../../components/Title"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre Mim</Title>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magnam
        aspernatur, voluptatibus ipsa voluptatem quae vitae quibusdam sit
        quidem, tempore dolorum facere incidunt earum a! Saepe consectetur aut
        libero autem!
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=PauloJnnr&show_icons=true&theme=dracula" />
        <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=PauloJnnr&layout=compact&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
