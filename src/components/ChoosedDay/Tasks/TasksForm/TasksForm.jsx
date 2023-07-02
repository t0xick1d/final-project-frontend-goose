import React from 'react';
import { Formik, Form } from 'formik';

import Icons from '../../../../images/sprite.svg';

import {
  ButtonAdd,
  ButtonBox,
  ButtonCancel,
  ContainerForm,
  FieldText,
  FormField,
  TimeBox,
  FieldTime,
  PriorityBox,
  RadioLabel,
  FieldRadioButton,
  CloseModal,
  ButtonCloseModal,
  RadioLow,
  RadioMedium,
  RadioHigh,
  PlusIcon,
} from './TasksForm.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux-store/tasks/tasksOperations';
import { useParams } from 'react-router-dom';

export default function TasksForm({ onClose, category }) {
  const dispatch = useDispatch();
  const { currentDate } = useParams();

  const handleSubmit = values => {
    console.log(values);

    dispatch(addTask(values));
    onClose();
  };
  return (
    <ContainerForm>
      <ButtonCloseModal onClick={() => onClose()}>
        <CloseModal>
          <use href={`${Icons}#icon-x-close`}></use>
        </CloseModal>
      </ButtonCloseModal>
      <Formik
        initialValues={{
          title: '',
          start: '09:00',
          end: '14:00',
          priority: 'low',
          date: `${currentDate}`,
          category: `${category}`,
        }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FormField htmlFor="title">Title</FormField>
            <FieldText id="title" name="title" placeholder="Enter text" />

            <TimeBox>
              <li>
                <FormField htmlFor="start">Start</FormField>
                <FieldTime name="start" type="time" />
              </li>
              <li>
                <FormField htmlFor="end">End</FormField>
                <FieldTime name="end" type="time" id="myTimeInput" />
              </li>
            </TimeBox>
            <PriorityBox
              role="group"
              aria-labelledby="my-radio-group"
              name="priority"
              value={values.priority}
              onChange={e => setFieldValue('priority', e.target.value)}
            >
              <label>
                <FieldRadioButton
                  type="radio"
                  name="priority"
                  value="low"
                  checked
                />
                <RadioLow></RadioLow>
                <RadioLabel>Low</RadioLabel>
              </label>
              <label>
                <FieldRadioButton type="radio" name="priority" value="medium" />
                <RadioMedium></RadioMedium>
                <RadioLabel>Medium</RadioLabel>
              </label>
              <label>
                <FieldRadioButton type="radio" name="priority" value="high" />
                <RadioHigh></RadioHigh>
                <RadioLabel>High</RadioLabel>
              </label>
            </PriorityBox>
            <ButtonBox>
              <ButtonAdd type="submit">
                <PlusIcon>
                  <use href={`${Icons}#icon-plus-white`}></use>
                </PlusIcon>
                Add
              </ButtonAdd>
              <ButtonCancel type="button" onClick={() => onClose()}>
                Cancel
              </ButtonCancel>
            </ButtonBox>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
}
