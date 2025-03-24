import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { userContext } from './contexts/userContexts'

import Home from './components/home/Home'
import Header from './components/header/Header'
import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import GameEdit from './components/game-edit/GameEdit'
import Logout from './components/logout/Logout'
import usePersistedState from './hooks/usePersistedState'

export default function App() {
	const [authData, setAuthData] = usePersistedState('auth',{});

	const userLoginHandler = (resultData) => {
		setAuthData(resultData);
	}

	const userLogoutHandler = () => {
		setAuthData({})
	}

  return (
	<userContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
	<div id="box">
		<Header />

		<main id="main-content">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/games' element={<GameCatalog />}/>
				<Route path='/games/create' element={<GameCreate />}/>
				<Route path='/games/:gameId/details' element={<GameDetails />}/>
				<Route path='/games/:gameId/edit' element={<GameEdit />}/>
				<Route path='/login' element={<Login />}/>
				<Route path='/register' element={<Register />}/>
				<Route path='/logout' element={<Logout />}/>
			</Routes>
        </main>
	</div>
	</userContext.Provider>
  )
}