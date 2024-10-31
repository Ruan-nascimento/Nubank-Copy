import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { AccountOptions } from "./components/accountOptions"
import { Header } from "./components/header"
import { Patterns } from "./components/patterns"

function App() {

  return (
    <section className="flex flex-col items-center justify-center h-screen w-screen">
      <Header/>
      <Patterns.wrapper className="flex flex-col gap-3">
        <AccountOptions amount={39500}/>
        <Patterns.button.grid/>

        <Patterns.button.button
        className="rounded-lg max-w-full w-8pc m-auto mt-4 flex justify-start px-8 gap-6 min-h-6 h-16"
        >
          <Patterns.button.iconFa icon={faCreditCard}/>
          <Patterns.button.label text="Meus Cartões" className="max-w-full"/>
        </Patterns.button.button>

      </Patterns.wrapper>
    </section>
  )
}

export default App
