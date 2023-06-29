import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import SignUpImg from '../../images/icons/sugnUpImg.png'
import { Background, Container, Title, LogInBtn, MainImg } from './RegisterPageStyled';

export default function SingUp() {
    return (
        <Background>
            <Container>

                <Title>Sign Up</Title>

                <RegisterForm />

            </Container>

            <MainImg src={SignUpImg} alt="Goose" />
            <LogInBtn to='/login'>Log In</LogInBtn>
        </Background>
    )
}
