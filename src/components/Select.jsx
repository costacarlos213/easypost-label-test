import React from 'react'
import styles from '../styles/components/select.module.css'

export default function Select({ 
  children, 
  name, 
  defaultValue, 
  onChange 
}) {
  return (
    <select 
      name={name} 
      className={styles.select} 
      defaultValue={defaultValue} 
      onChange={onChange}
    >
      {children}
    </select>
  )
}