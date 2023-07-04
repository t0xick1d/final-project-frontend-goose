import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';
import { getUser } from '../../redux-store/Slices/AuthSlice';
import {
  fetchCurrentUser,
  updateUser,
} from 'redux-store/AuthOperations/AuthOperations';
import {
  ContainerImg,
  Wrapper,
  Input,
  DatePick,
  Btn,
  BlockInput,
  Forms,
  InputFile,
  ImgBtn,
  ImgAvatar,
  LabelBtn,
  LabelImg,
  User,
  SvgAvatar,
  VectorPng,
  Message,
} from './UserForm.styled';
import plus from '../../images/icons/plus.png';
import Icon from '../../images/sprite.svg';

const validationFormikSchema = object({
  name: string().max(40, 'too long!').required(),
  birthday: date(),
  email: string()
    .matches(/^([a-z0-9_.-]+)@([a-z09_.-]+).([a-z]{2,6})$/, 'enter valid email')
    .required(),
  skype: string().max(30),
  phone: string().matches(/^\+[\d-]+$/, 'number should start from +'),
});

const UserForm = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [newBirthday, setNewBirthday] = useState('');
  const [isUpdateForm, setIsUpdateForm] = useState(null);

  const { user } = useSelector(getUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdateForm) {
      dispatch(fetchCurrentUser());
      setIsUpdateForm(null);
    }
  }, [dispatch, isUpdateForm]);

  const initialValues = {
    name: user ? user.name : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
    skype: user ? user.skype : '',
    birthday: newBirthday
      ? newBirthday
      : user.birthday
      ? new Date(user.birthday)
      : new Date(),
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.skype) {
      formData.append('skype', values.skype);
    }
    formData.append('birthday', values.birthday);

    if (avatarURL) {
      formData.append('avatar', avatarURL);
    }
    try {
      await dispatch(updateUser(formData));
    } catch (err) {
      console.log(err);
    }

    setIsUpdateForm(true);
    resetForm();
  };

  return (
    <Wrapper>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationFormikSchema}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <Forms autoComplete="off" onSubmit={handleSubmit}>
            <ContainerImg>
              {avatarURL ? (
                <ImgAvatar src={URL.createObjectURL(avatarURL)} alt="avatar" />
              ) : user?.avatarURL ? (
                <ImgAvatar src={user.avatarURL} alt="avatar" />
              ) : (
                <SvgAvatar>
                  <use href={Icon + '#icon-ph-user'}></use>
                </SvgAvatar>
              )}

              <LabelImg htmlFor="avatar">
                <ImgBtn src={plus} alt="user" />

                <InputFile
                  id="avatar"
                  type="file"
                  onChange={event => setAvatarURL(event.target.files[0])}
                  accept="image/png, image/gif, image/jpeg"
                  name="avatar"
                ></InputFile>

                <ErrorMessage name="avatar">
                  {msg => {
                    <Message>{msg}</Message>;
                  }}
                </ErrorMessage>
              </LabelImg>
            </ContainerImg>
            <h2>{user?.name} </h2>
            <User>User</User>
            <BlockInput>
              <LabelBtn htmlFor="name">
                <p>User Name</p>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                ></Input>
                <ErrorMessage name="name">
                  {msg => <Message>{msg}</Message>}
                </ErrorMessage>
              </LabelBtn>

              <LabelBtn htmlFor="phone">
                <p>Phone</p>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={values.phone ? values.phone : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+380"
                ></Input>
                <ErrorMessage name="phone">
                  {msg => <Message>{msg}</Message>}
                </ErrorMessage>
              </LabelBtn>

              <LabelBtn htmlFor="birthday">
                <p>Birthday</p>
                <DatePick
                  type="date"
                  name="birthday"
                  id="birthday"
                  input={true}
                  maxDate={new Date()}
                  selected={values.birthday}
                  onChange={data => {
                    setNewBirthday(data);
                  }}
                  placeholder="Birthday"
                  dateFormat="dd/MM/yyyy"
                />

                <VectorPng>
                  <use href={Icon + '#icon-chevron-right'}></use>
                </VectorPng>

                <ErrorMessage name="birthday">
                  {msg => <Message>{msg}</Message>}
                </ErrorMessage>
              </LabelBtn>

              <LabelBtn htmlFor="skype">
                <p>Skype</p>
                <Input
                  type="text"
                  name="skype"
                  id="skype"
                  placeholder="Skype"
                  value={values.skype ? values.skype : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="skype">
                  {msg => <Message>{msg}</Message>}
                </ErrorMessage>
              </LabelBtn>

              <LabelBtn htmlFor="email">
                <p>Email</p>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <ErrorMessage name="email">
                  {msg => <Message>{msg}</Message>}
                </ErrorMessage>
              </LabelBtn>
            </BlockInput>
            <Btn type="submit">Save changes</Btn>
          </Forms>
        )}
      </Formik>
    </Wrapper>
  );
};
export default UserForm;
