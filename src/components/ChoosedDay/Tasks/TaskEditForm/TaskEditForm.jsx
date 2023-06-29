// import React from 'react';
// import { Formik, Form } from 'formik';

// import Icons from '../../images/sprite.svg'

// import {
//   ButtonBox,
//   ButtonEdit,
//   ContainerForm,
//   FieldText,
//   FormField,
//   TimeBox,
//   FieldTime,
//   PriorityBox,
//   RadioLabel,
//   FieldRadioButton,
//   CloseModal,
//   ButtonCloseModal,
//   RadioLow,
//   RadioMedium,
//   RadioHigh,
//   PencilIcon,
// } from '../TasksForm/TasksForm.styled';
// import { useDispatch } from 'react-redux';
// //import { selectTasks } from 'redux-store/tasks/tasksSelectors';
// import { addTask } from 'redux-store/tasks/tasksOperations';

// export default function TaskEditForm({ onClose }) {
//   // const tasks = useSelector(selectTasks);
//   const dispatch = useDispatch();

//   const handleSubmit = values => {
//     console.log(values);
//     dispatch(addTask(values));
//     onClose();
//   };
//   return (
//     <ContainerForm>
//       <ButtonCloseModal onClick={() => onClose()}>
//         <CloseModal>
//           <use href={`${Icons}#icon-x-close`}></use>
//         </CloseModal>
//       </ButtonCloseModal>
//       <Formik
//         initialValues={{
//           title: '',
//           timeStart: '09:00',
//           timeEnd: '14:00',
//         }}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <FormField htmlFor="title">Title</FormField>
//           <FieldText id="title" name="title" placeholder="Enter text" />

//           <TimeBox>
//             <li>
//               <FormField htmlFor="timeStart">Start</FormField>
//               <FieldTime name="timeStart" type="time" />
//             </li>
//             <li>
//               <FormField htmlFor="timeEnd">End</FormField>
//               <FieldTime name="timeEnd" type="time" id="myTimeInput" />
//             </li>
//           </TimeBox>
//           <PriorityBox role="group" aria-labelledby="my-radio-group">
//             <label>
//               <FieldRadioButton
//                 type="radio"
//                 name="picked"
//                 value="Low"
//                 checked
//               />
//               <RadioLow></RadioLow>
//               <RadioLabel>Low</RadioLabel>
//             </label>
//             <label>
//               <FieldRadioButton type="radio" name="picked" value="Medium" />
//               <RadioMedium></RadioMedium>
//               <RadioLabel>Medium</RadioLabel>
//             </label>
//             <label>
//               <FieldRadioButton type="radio" name="picked" value="High" />
//               <RadioHigh></RadioHigh>
//               <RadioLabel>High</RadioLabel>
//             </label>
//           </PriorityBox>
//           <ButtonBox>
//             <ButtonEdit type="submit">
//               <PencilIcon>
//                 <use href={`${Icons}#icon-pencil-white`}></use>
//               </PencilIcon>
//             Edit
//             </ButtonEdit>
//           </ButtonBox>
//         </Form>
//       </Formik>
//     </ContainerForm>
//   );
// }
