import { useState } from 'react'
import Modal from 'react-modal'
import LogoImg from '../../assets/Logo.svg'
import { Container } from './styles'
import { Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal:()=>void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
              
            </Content>

        </Container>
    )
}