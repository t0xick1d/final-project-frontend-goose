import styled from 'styled-components';


export const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-gap: 1px;
`;

export const CellWrapper = styled.div`
	min-height: 94px;
	min-width: 120px;
`;

export const DayWrapper = styled.button`
	height: 31px;
	width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
cursor: pointer;
;`


export const CurrentDDay = styled.button`
	height: 31px;
	width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
cursor: pointer;
;`

export const RowInCell = styled.div`
	display: flex;
	flex-direction: column;
	
`;







// export const CurrentDay = styled('div')`
//   height: 100%;
//   width: 100%;
//   background: #f00;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const ShowDayWrapper = styled('div')`
// 	display: flex;
// 	justify-content: flex-end;
// `;

// export const EventListWrapper = styled('ul')`
//   margin: 0;
//   padding: 0;
//   list-style: none;
// `;

// export const EventListItemWrapper = styled('li')`
// 	padding-left: 2px;
// 	padding-right: 2px;
// 	margin-bottom: 2px;
// 	display: flex;
// `;

// export const EventItemWrapper = styled('button')`
// 	position: relative;
// 	flex-grow: 1;
// 	text-overflow: ellipsis;
// 	overflow: hidden;
// 	white-space: nowrap;
// 	width: 114px;
// 	border: unset;
// 	color: #DDDDDD;
// 	cursor: pointer;
// 	margin: 0;
// 	padding: 0;
// 	text-align: left;
// 	background-color: #5d5f63;
// 	border: 1px solid #5d5f63;
// 	border-radius: 2px;
// `;
