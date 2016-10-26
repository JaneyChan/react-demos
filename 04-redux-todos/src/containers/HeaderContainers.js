import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let HeaderContainers = ({ dispatch }) => {
  let textInput

  return (
    <div>
      <form onSubmit={e => {
        // preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
        e.preventDefault()
        if (!textInput.value.trim()) {
          return
        }
        dispatch(addTodo(textInput.value))
        textInput.value = ''
      }}>
        <input ref={node => {
          textInput = node
        }}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  ) 
}

HeaderContainers = connect()(HeaderContainers)

export default HeaderContainers
