import styled from 'styled-components'
import { convertHex } from '../common/convertHex';

const cellSize = '3rem'
const gapSize = '0px'

const Table = styled.div`
    display: grid;
    row-gap: 1.5rem;
`;

const TableSection = styled.div`
    display: grid;
    grid-auto-rows: ${cellSize};
    row-gap: ${gapSize};
`;

const TableSectionTasks = styled(TableSection)`
    padding-bottom: calc(${cellSize} / 2);
`;

const TableRow = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gtc};
    grid-auto-rows: ${cellSize};
    column-gap: ${gapSize};
`;

const TableHeaderCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid ${props => props.color};
    &[class~="today"] {
      position: relative;
  }
    &[id~="${props => props.id}"][class~="today"]::after {
      content:'';
      position: absolute;
      top: calc( -1 * calc(${cellSize} * ${props => props.headersCount}));
      left: 0;
      width: ${cellSize};
      height: calc(88vh + 2 * ${cellSize});
      background-color: rgba(100%, 9%, 26.7%, 0.5);
  }
`;

const TableCell = styled.div`
    &:hover {
        background-color: #1a8a98;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid ${props => props.color}; 
`;

const TableTask = styled.div`
  background-color: ${props => props.color};
  cursor: pointer;
  &:hover {
    background-color:  ${props => convertHex(props.color)};
  }
  transition: all 0.2s ease;
`;

export {
  cellSize,
  gapSize,
  Table,
  TableSection,
  TableSectionTasks,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableTask
}