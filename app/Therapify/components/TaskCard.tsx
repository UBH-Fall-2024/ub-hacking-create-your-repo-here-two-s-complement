import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TaskCard = ({task} : { task: string}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}
        className={`bg-white rounded-xl min-h-[62px] my-2 justify-center items-center`}
    >
      <Text className='font-bold text-1xl'>{task}</Text>
    </TouchableOpacity>
  )
}

export default TaskCard