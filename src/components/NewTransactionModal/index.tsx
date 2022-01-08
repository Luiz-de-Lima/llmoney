import Modal from 'react-modal';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'

import closeImg from '../../assets/close.svg';

import { Container,TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <button type="button"
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder='Título' />
                <input placeholder='valor' type="number" />
                
                <TransactionTypeContainer>
                    <button 
                    type='button'>
                        <img src={IncomeImg} alt="Entrada" />
                        <span>entrada</span>
                    </button>

                    <button 
                    type='button'>
                        <img src={OutcomeImg} alt="Saida" />
                        <span>entrada</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
