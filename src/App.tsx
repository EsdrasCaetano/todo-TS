import { useState } from 'react'

import { Header } from './components/Header';
import { TasksList } from './components/TasksList';

import styles from './App.module.css';

import './global.css'

function App() {

  return (
    <>
      <Header />

      <TasksList />
    </>
  )
}

export default App
