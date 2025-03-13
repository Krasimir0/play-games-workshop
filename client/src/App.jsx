import { useState } from 'react'
import { Routes, Route } from 'react-router'

import Home from './components/home/Home'
import Header from './components/header/Header'
import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'

export default function App() {

  return (
	<div id="box">
		<Header />

		<main id="main-content">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/games' element={<GameCatalog />}/>
				<Route path='/games/create' element={<GameCreate />}/>
				<Route path='/games/:gameId/details' element={<GameDetails />}/>
				<Route path='/login' element={<Login />}/>
				<Route path='/register' element={<Register />}/>
			</Routes>
        </main>

	</div>
  )
}