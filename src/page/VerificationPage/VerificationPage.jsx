import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Background, Container, Title, Text, AppLink } from './VerificationPageStyled'
import { useDispatch } from 'react-redux'
import { logIn } from 'redux-store/AuthOperations/AuthOperations'


const VerificationPage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const login = localStorage.getItem('verify')

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await axios.get(`auth/verify/${params.token}`);
                dispatch(logIn(JSON.parse(login)))
            } catch (error) {
                return error
            }
        };

        verifyToken()

        localStorage.setItem('verify', JSON.stringify({ email: '', password: '' }))
    }, [dispatch, params.token, login])

    return (
        <Background>
            <Container>
                <Title>Congratulations!</Title>
                <Text>You have successfully registered on our website!</Text>
                <AppLink to='/calendar'>Starting to use our app</AppLink>
            </Container>
        </Background>
    )

}
export default VerificationPage