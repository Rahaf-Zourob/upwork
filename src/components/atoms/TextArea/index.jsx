import React from 'react'
import { StyleTextArea } from './style'

export default function TextArea({id,name,placeholder,register,value,handleChange,maxLen}) {
  return (
    <StyleTextArea
    placeholder={placeholder}
    name={name}
    id={id}
    value={value}
    onChange={handleChange}
    maxLength={maxLen}
    {...(register && register(id))}
    />
  )
}
