import { Summary } from "../Summary"
import { TransictionsTable } from "../TransactionsTable"
import { Container } from "./style"
 
export function Dashboard(){
    return(
        <Container>
           <Summary/>
           <TransictionsTable/>
           
        </Container>
    )
}