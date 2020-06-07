import styled from 'styled-components'
import { addDays, customGetDate, dateDifference, datesBetween, countOccurrences } from './dateHelper';
import { useSelector } from 'react-redux';
import { selectCalendar } from './tasksSlice';

const cellSize = '3rem'
const gapSize = '0.3rem'

const Table = styled.div`
margin: 1rem;
width: calc(95vw - 3rem);
overflow-x:scroll;
padding: 1rem;
display: grid;
row-gap: 1.5rem;


.today {
    background-color: red
}
`;

const TableSection = styled.div`
display: grid;
grid-auto-rows: ${cellSize};
row-gap: ${gapSize};
`;

const TableHeaderCell = styled.div`
display: block;
box-sizing: border-box;
box-shadow:0 0 0 ${gapSize} palegreen;
`;

const TableCell = styled.div`
display: block;
box-sizing: border-box;
box-shadow:0 0 0 ${gapSize} palegreen;

&:hover {
    background-color: turquoise;
}
`;

export {
    cellSize,
    gapSize,
    Table,
    TableSection,
    TableHeaderCell,
    TableCell
}