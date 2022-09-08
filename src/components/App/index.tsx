import React from 'react'
import { Display } from '../Display'
import { Dashboard } from '../Dashboard'
import Styles from './style.module.scss'

const App: React.FC = () => {
  return (
    <div className={Styles.app}>
      <Display />
      <Dashboard />
    </div>
  )
}

export default App
