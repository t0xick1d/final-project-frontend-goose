import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    ItemWrapp,
    StyledLabel,
    StyledInput,
    ValidationIcon,
    Error,
    Success,
    LogInBtn,
} from './LoginFormStyled';
import LogIn from '../../images/icons/logIn.png';
import ErrorImg from '../../images/icons/error.png';
import SuccessImg from '../../images/icons/Done.png';
import { logIn } from 'redux-store/AuthOperations/AuthOperations';
import { useDispatch } from 'react-redux';

let schema = yup.object().shape({
    email: yup
        .string()
        .transform(value => (value ? value.trim() : ''))
        .min(6)
        .max(25)
        .email()
        .matches(
            /^([a-z0-9_.-]+)@([a-z09_.-]+).([a-z]{2,6})$/,
            'Invalid email address'
        )
        .required(),
    password: yup.string().min(6).max(15).required(),
});

const LoginForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            dispatch(logIn(values));
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
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

            <LogInBtn type="submit">
                Log In
                <img style={{ marginLeft: 11 }} src={LogIn} alt="logIn" />
            </LogInBtn>
        </form>
    );
};

export default LoginForm;
