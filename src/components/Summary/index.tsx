import { Container } from "./styles"
import IncomeImg  from "../../assets/income.svg"
import OutcomeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/Total.svg"

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
            <header className="highlight-background">Saídas
                <img src={OutcomeImg} alt="Saídas" />
            </header>
            <strong> - R$300,00</strong>
        </div>
        <div>
            <header>Total
                <img src={TotalImg} alt="Total" />
            </header>
            <strong>R$700,00</strong>
        </div>
    </Container>
)
}