import { useEffect } from "react";
import { Container } from "./styles";

export function TransictionsTable() {

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json()
                .then(data => console.log(data)))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="title">Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.000</td>
                        <td>Casa</td>
                        <td>10/10/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desencolvimeto</td>
                        <td>20/10/2021  </td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$12.000</td>
                        <td>Desencolvimeto</td>
                        <td>20/10/2021  </td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
        ;
}