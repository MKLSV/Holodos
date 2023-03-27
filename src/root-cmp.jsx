import React from 'react'
import { Routes, Route } from 'react-router'
import { FoodForm } from './views/FoodForm'
import { FoodMenu } from './views/FoodMenu'
import { HomePage } from './views/HomePage'
import { MenuDetails } from './views/MenuDetails'

export function RootCmp() {

  return (
    <div className='app-container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<FoodForm />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="/:id" element={<MenuDetails />} />
      </Routes>
    </div>
  )
}


