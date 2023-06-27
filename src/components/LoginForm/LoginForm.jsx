import { useFormik } from 'formik';
import * as yup from 'yup';
import { ItemWrapp, StyledLabel, StyledInput, ErrorIcon, Error, LogInBtn } from './LoginFormStyled';
import LogIn from '../../images/icons/logIn.png'
import ErrorImg from '../../images/icons/error.png';
import { logIn } from 'redux-store/AuthOperations/AuthOperations';
import { useDispatch } from 'react-redux';

let schema = yup.object().shape({
    email: yup.string().min(6).max(30).email().required(),
    password: yup.string().required()
});

const LoginForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            dispatch(logIn(values))
            resetForm()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
            <ItemWrapp>
                <StyledLabel color={formik.errors.email} htmlFor="email">Email</StyledLabel>
                <StyledInput
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder='Enter email'
                    color={formik.errors.email}
                />
                {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}

                {formik.errors.email ? <ErrorIcon src={ErrorImg} alt="error" /> : null}
            </ItemWrapp>

            <ItemWrapp>
                <StyledLabel color={formik.errors.password} htmlFor="password">Password</StyledLabel>
                <StyledInput
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Enter password'
                    color={formik.errors.password}
                    style={{ marginBottom: 32 }}
                />
                {formik.errors.password ? <Error>{formik.errors.password}</Error> : null}

                {formik.errors.password ? <ErrorIcon src={ErrorImg} alt="error" /> : null}
            </ItemWrapp>

            <LogInBtn type="submit">Log In
                <img style={{ marginLeft: 11 }} src={LogIn} alt='logIn' />
            </LogInBtn>
        </form>
    )
}

export default LoginForm