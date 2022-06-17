import React from 'react'
import { useParams } from 'react-router-dom'

export default function TaskDetail({task}) {
    let { id } = useParams()

  return (
    <div>TaskDetail <h4>task.name</h4> id:{task.id}</div>
  )
}
