import React from 'react'
import { Routes, Route } from 'react-router'
import { FoodForm } from './views/FoodForm'
import { HomePage } from './views/HomePage'

export function RootCmp() {

  return (
    <div className='app-container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<FoodForm />} />
      </Routes>
    </div>
  )
}


