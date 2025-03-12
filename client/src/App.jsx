import { useState } from 'react'
import { Routes, Route } from 'react-router'

import Home from './components/home/Home'
import Header from './components/header/Header'
import './App.css'

export default function App() {

  return (
	<div id="box">
		<Header />

		<main id="main-content">
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
        </main>

	</div>
  )
}