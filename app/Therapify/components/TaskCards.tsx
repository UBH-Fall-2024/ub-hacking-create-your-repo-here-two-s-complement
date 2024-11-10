import { View, Text } from 'react-native'
import React from 'react'
import TaskCard from './TaskCard'

const Tasks: string[] = [
    "Meditate for 5 mins",
    "Go for a walk"
]

const TaskCards = () => {
  return (
    <View>
      {Tasks.map((task, index) => (
        <TaskCard key={index} task={task}/>
      ))}
    </View>
  )
}

export default TaskCards;