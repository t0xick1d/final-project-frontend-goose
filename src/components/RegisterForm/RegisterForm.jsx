import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    ItemWrapp,
    StyledLabel,
    Error,
    Success,
    ValidationIcon,
    StyledInput,
    SignUpBtn,
} from './RegisterFormStyled';
import SignUp from '../../images/icons/logIn.png';
import ErrorImg from '../../images/icons/error.png';
import SuccessImg from '../../images/icons/Done.png';
import { register } from 'redux-store/AuthOperations/AuthOperations';
import { useDispatch } from 'react-redux';

let schema = yup.object().shape({
    name: yup
        .string()
        .transform(value => (value ? value.trim() : ''))
        .min(2, 'Name must be more then 1 symbol')
        .max(30, 'To long')
        .matches(/^[a-zA-Z0-9 ]{2,30}$/, 'Invalid name')
        .required(),
    email: yup
        .string()
        .transform(value => (value ? value.trim() : ''))
        .email()
        .matches(
            /^([a-z0-9_.-]+)@([a-z09_.-]+).([a-z]{2,6})$/,
            'Invalid email address'
        )
        .required(),
    password: yup.string().min(6).max(15).required(),
});

const RegisterForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            dispatch(register(values));

            localStorage.setItem(
                'verify',
                JSON.stringify({ email: values.email, password: values.password })
            );

            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <ItemWrapp>
                <StyledLabel
                    color={{ error: formik.errors.name, touched: formik.touched.name }}
                    htmlFor="Name"
                >
                    Name
                </StyledLabel>
                <StyledInput
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Enter your name"
                    color={{ error: formik.errors.name, touched: formik.touched.name }}
                />

                {formik.errors.name ? (
                    <Error>{formik.errors.name}</Error>
                ) : !formik.errors.name && formik.touched.name ? (
                    <Success>Field is not empty</Success>
                ) : null}

                {formik.errors.name ? (
                    <ValidationIcon src={ErrorImg} alt="error" />
                ) : !formik.errors.name && formik.touched.name ? (
                    <ValidationIcon src={SuccessImg} alt="Success" />
                ) : null}

            </ItemWrapp>

            <ItemWrapp>
                <StyledLabel
                    color={{ error: formik.errors.email, touched: formik.touched.email }}
                    htmlFor="email"
                >
                    Email
                </StyledLabel>
                <StyledInput
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Enter email"
                    color={{ error: formik.errors.email, touched: formik.touched.email }}
                />

                {formik.errors.email ? (
                    <Error>{formik.errors.email}</Error>
                ) : !formik.errors.email && formik.touched.email ? (
                    <Success>Field is not empty</Success>
                ) : null}

                {formik.errors.email ? (
                    <ValidationIcon src={ErrorImg} alt="error" />
                ) : !formik.errors.email && formik.touched.email ? (
                    <ValidationIcon src={SuccessImg} alt="Success" />
                ) : null}

            </ItemWrapp>

            <ItemWrapp>
                <StyledLabel
                    color={{
                        error: formik.errors.password,
                        touched: formik.touched.password,
                    }}
                    htmlFor="password"
                >
                    Password
                </StyledLabel>
                <StyledInput
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Enter password"
                    color={{
                        error: formik.errors.password,
                        touched: formik.touched.password,
                    }}
                    style={{ marginBottom: 32 }}
                />

                {formik.errors.password && formik.touched.password ? (
                    <Error>{formik.errors.password}</Error>
                ) : !formik.errors.password && formik.touched.password ? (
                    <Success>Field is not empty</Success>
                ) : null}

                {formik.errors.password ? (
                    <ValidationIcon src={ErrorImg} alt="error" />
                ) : !formik.errors.password && formik.touched.password ? (
                    <ValidationIcon src={SuccessImg} alt="Success" />
                ) : null}

            </ItemWrapp>

            <SignUpBtn type="submit">
                Sign Up
                <img style={{ marginLeft: 11 }} src={SignUp} alt="Sign up" />
            </SignUpBtn>
        </form>
    );
};

export default RegisterForm;
