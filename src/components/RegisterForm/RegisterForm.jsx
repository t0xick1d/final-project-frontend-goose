import { useFormik } from 'formik';
import * as yup from 'yup';
import { ItemWrapp, StyledLabel, Error, ErrorIcon, StyledInput, SignUpBtn } from './RegisterFormStyled';
import SignUp from '../../images/icons/logIn.png';
import ErrorImg from '../../images/icons/error.png';
import { register } from 'redux-store/AuthOperations/AuthOperations';
import { useDispatch } from 'react-redux';

let schema = yup.object().shape({
    name: yup.string().min(2, 'Name must be more then 1 symbol').max(30, 'To long').required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required()
});

const RegisterForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            dispatch(register(values))

            localStorage.setItem(
                'verify',
                JSON.stringify({ email: values.email, password: values.password })
            );

            resetForm()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
            <ItemWrapp>
                <StyledLabel color={formik.errors.name} htmlFor="Name">Name</StyledLabel>
                <StyledInput
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder='Enter your name'
                    color={formik.errors.name}
                />
                {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
                {formik.errors.name ? <ErrorIcon src={ErrorImg} alt="error" /> : null}
            </ItemWrapp>

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

            <SignUpBtn type="submit">Sign Up
                <img style={{ marginLeft: 11 }} src={SignUp} alt="Sign up" />
            </SignUpBtn>
        </form>
    )
}

export default RegisterForm