import { useState } from 'react'

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import styles from './App.module.css';

import './global.css'

function App() {

  return (
    <>
      <Header />

      <Tasks />
    </>
  )
}

export default App
