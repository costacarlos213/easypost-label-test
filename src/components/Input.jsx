import React from 'react'
import styles from '../styles/components/input.module.css'

export default function Input({ 
  placeholder, 
  name, 
  width, 
  onChange,
  required
}) {
  return (
    <input 
      required={required}
      onChange={onChange}
      type="text" 
      placeholder={placeholder} 
      name={name} 
      className={styles.input} 
      style={{ width }} 
    />
  )
}