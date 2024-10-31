import { DiscoverMore } from "."

export const DiscoverPanel = () => {
  return(
    <section className="flex w-full flex-col">

      <h2 className="font-bold text-xl ml-4 mt-4">Descubra Mais</h2>

      <div className="flex w-full max-w-full min-h-126 no-scrollbar overflow-auto gap-4 py-8">
        <DiscoverMore
        buttonText="Conhecer"
        description="Em breve, a experiência Nu também em planos de Celular"
        title="Descubra o NuCel"
        seed={123}
        />

        <DiscoverMore
        buttonText="Conhecer"
        description="Transforme pequenos valores em grandes oportunidades. Comece a investir com segurança e rentabilidade, sem complicação"
        title="Investimento Simples"
        seed={153}
        />

        <DiscoverMore
        buttonText="Faça o Seu"
        description="Controle seus gastos com facilidade e personalize o limite de acordo com seu perfil. Benefícios exclusivos e cashback em todas as compras!"
        title="Cartão de Crédito Personalizado"
        seed={163}
        />

        <DiscoverMore
        buttonText="Conhecer"
        description="Precisando de um empurrão financeiro? Solicite seu empréstimo com aprovação rápida e taxas acessíveis. Dinheiro na conta em minutos."
        title="Empréstimo Rápido"
        seed={124}
        />

        <DiscoverMore
        buttonText="Conhecer"
        description="Defina metas e acompanhe o progresso do seu plano de economia. Com nossa ajuda, poupar fica mais fácil e motivador!"
        title="Economia Planejada"
        seed={133}
        />
      </div>

    </section>
  )
}