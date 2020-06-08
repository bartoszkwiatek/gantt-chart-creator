import React from 'react'
import styled from 'styled-components'

const TableMainTask = styled.div`
background-color: #230e85;
`;

const CalendarMainTask = (props) => {
  return (
    < TableMainTask className="task" id={props.id} style={{ 'gridColumn': `span ${props.duration}` }} />
  )

}
export { CalendarMainTask }