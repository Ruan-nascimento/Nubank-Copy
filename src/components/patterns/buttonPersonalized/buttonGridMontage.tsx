import { mdiCash, mdiQrcode } from "@mdi/js"
import { Patterns } from ".."
import { Wrapper } from "./wrapper"
import { faChartLine, faCloudDownloadAlt, faExchangeAlt, faMobileAlt, faMoneyBill1Wave, faReceipt } from "@fortawesome/free-solid-svg-icons"

export const ButtonGridMontage = () => {
  return(
    <div className="no-scrollbar flex gap-4 overflow-auto min-h-32 mt-4">
      
      <Wrapper>
        <Patterns.button.button>
          <Patterns.button.iconMdi path={mdiQrcode} size={1.8}/>
        </Patterns.button.button>
          <Patterns.button.label text="Área Pix"/>
      </Wrapper>

      <Wrapper>
        <Patterns.button.button>
          <Patterns.button.iconFa icon={faReceipt} className="text-4xl"/>
        </Patterns.button.button>
          <Patterns.button.label text="Pagar"/>
      </Wrapper>

      <Wrapper>
        <Patterns.button.button>
          <Patterns.button.iconMdi path={mdiCash} size={1.8}/>
        </Patterns.button.button>
          <Patterns.button.label text="Pegar Emprestado"/>
      </Wrapper>

      <Wrapper>
        <Patterns.button.button>
          <Patterns.button.iconFa icon={faExchangeAlt} className="text-4xl"/>
        </Patterns.button.button>
          <Patterns.button.label text="Transferir"/>
      </Wrapper>

      <Wrapper>
        <Patterns.button.button>
          <Patterns.button.iconFa icon={faMobileAlt} className="text-4xl"/>
        </Patterns.button.button>
          <Patterns.button.label text="Recarga de Celular"/>
      </Wrapper>
      
      <Wrapper>
        <Patterns.button.button>
          <Patterns.button.iconFa icon={faCloudDownloadAlt} className="text-4xl"/>
        </Patterns.button.button>
          <Patterns.button.label text="Depositar"/>
      </Wrapper>

      <Wrapper>
        <Patterns.button.button>
          <Patterns.button.iconFa icon={faMoneyBill1Wave} className="text-4xl"/>
        </Patterns.button.button>
          <Patterns.button.label text="Caixinhas"/>
      </Wrapper>

      <Wrapper>
        <Patterns.button.button>
          <Patterns.button.iconFa icon={faChartLine} className="text-4xl"/>
        </Patterns.button.button>
          <Patterns.button.label text="Investir"/>
      </Wrapper>


      
    </div>
  )
}