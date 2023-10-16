import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/home.jsx'
import Suaconta from './pages/suaconta.jsx'
import App from './App'
import Comousar from './pages/comousar'
import Mapa from './pages/mapa'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import EsqueceuSenha from './pages/esqueceusenha'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/perfil",
        element: <Suaconta />
      },
      {
        path: "/comousar",
        element: <Comousar />
      },
      {
        path: "/mapa",
        element: <Mapa />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/esqueceusenha",
        element: <EsqueceuSenha />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
