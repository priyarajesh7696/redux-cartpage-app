import React from 'react'
import AppRoutes from './utils/AppRoutes'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
export const API_URL = 'https://6599b048652b843dea531376.mockapi.io/API/card'
function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
  </>
}

export default App