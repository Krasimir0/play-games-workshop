import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Header from './components/header/Header'

export default function App() {

  return (
	<div id="box">
		<Header />

		<main id="main-content">
			<Home />
        </main>

	</div>
  )
}