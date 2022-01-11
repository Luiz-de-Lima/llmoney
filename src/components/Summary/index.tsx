import React, { useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions'

import IncomeImg from "../../assets/income.svg"
import OutcomeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/Total.svg"

import { Container } from './styles'

export function Summary() {
    const { transactions } =useTransactions()


    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount

        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount

        }
        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>

            <div>
                <header>Entradas
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header >Saídas
                    <img src={OutcomeImg} alt="Saídas" />
                </header>
                <strong> - {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}</strong>
            </div>
            <div className="highlight-background">
                <header>Total
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}

