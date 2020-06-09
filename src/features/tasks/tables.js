import styled from 'styled-components'

const cellSize = '3rem'
const gapSize = '0px'

const Table = styled.div`
    display: grid;
    row-gap: 1.5rem;
    
    .today {
        background-color: #ff1744;
    }
`;

const TableSection = styled.div`
    display: grid;
    grid-auto-rows: ${cellSize};
    row-gap: ${gapSize};
`;

const TableSectionTasks = styled(TableSection)`
    height: 500px;
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
    // box-shadow: 
    // 1px 0 0 0 ${props => props.color}, 
    // 0 1px 0 0 ${props => props.color}, 
    // 1px 1px 0 0 ${props => props.color},   
    // 1px 0 0 0 ${props => props.color} inset, 
    // 0 1px 0 0 ${props => props.color}
    // inset;

    border: 1px solid ${props => props.color};
    // box-shadow:0 0 0 ${gapSize} rgba(255,255,255,0);
`;

const TableCell = styled(TableHeaderCell)`
    &:hover {
        background-color: #1a8a98;
    }
`;

export {
  cellSize,
  gapSize,
  Table,
  TableSection,
  TableSectionTasks,
  TableRow,
  TableHeaderCell,
  TableCell
}