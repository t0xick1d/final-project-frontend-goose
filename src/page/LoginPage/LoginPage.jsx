import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import LogInImg from '../../images/icons/logInImg.png'
import { Background, Container, Title, MainImg, SignUpBtn } from './LoginPageStyled';

export default function LoginPage() {
    return (
        <Background>
            <Container>

                <Title>Log In</Title>

                <LoginForm />

            </Container>

            <MainImg src={LogInImg} alt="Goose" />
            <SignUpBtn to='/register'>Sign up</SignUpBtn>
        </Background>
    )
}
