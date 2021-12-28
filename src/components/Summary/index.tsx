import IncomeImg  from "../../assets/income.svg"
import OutcomeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/Total.svg"

import { Container } from './styles'

export function Summary(){
return(
    <Container>
        <div>
            <header>Entradas
                <img src={IncomeImg} alt="Entradas" />
            </header>
            <strong>R$1000,00</strong>
        </div>
        <div>
            <header >Saídas
                <img src={OutcomeImg} alt="Saídas" />
            </header>
            <strong> - R$300,00</strong>
        </div>
        <div className="highlight-background">
            <header>Total
                <img src={TotalImg} alt="Total" />
            </header>
            <strong>R$700,00</strong>
        </div>
    </Container>
)
}