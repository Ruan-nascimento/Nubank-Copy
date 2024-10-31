import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { AccountOptions } from "./components/accountOptions"
import { Header } from "./components/header"
import { Patterns } from "./components/patterns"
import { useState } from "react"
import { CreditCardPanel } from "./components/creditCardPanel"
import { DiscoverPanel } from "./components/discoverMore/discoverPanel"
import { NavFixedBar } from "./components/navFixedBar"

function App() {

  const [show, setShow] = useState(false)

  return (
    <section className="flex flex-col items-center justify-center h-dvh w-dvh relative">
      <Header show={show} setShow={setShow}/>
      
      <Patterns.wrapper className="flex flex-col gap-3">
        
        <AccountOptions amount={69.52} show={show}/>

        <Patterns.button.grid/>

        <Patterns.button.button
        className="rounded-lg max-w-full w-full m-auto mb-4 flex justify-start px-8 gap-6 min-h-16 h-16"
        >
          <Patterns.button.iconFa icon={faCreditCard}/>
          <Patterns.button.label text="Meus Cartões" className="max-w-full"/>
        </Patterns.button.button>

        <CreditCardPanel creditPayment={227.98} dueDate={4}/>

        <DiscoverPanel/>

        <NavFixedBar/>

      </Patterns.wrapper>


    </section>
  )
}

export default App
