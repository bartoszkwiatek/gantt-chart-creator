
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from './tasksSlice';

import { List } from "@material-ui/core"
import { SidebarTasksNestedList } from './SidebarTasksNestedList'

const SidebarTasksList = () => {
  const data = useSelector(selectTasks)

  return (
    <List style={{ padding: 0 }}>
      {data.map((mainTask, index) => {

        return (
          < SidebarTasksNestedList key={index} data={mainTask} />
        )
      })}
    </List>
  )
}


export { SidebarTasksList }