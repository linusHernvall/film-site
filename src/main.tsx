import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRoutesFromElements } from 'react-router'
import { Route, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Bookmarked from './Pages/Bookmarked/Bookmarked.tsx'
import Categories from './Pages/Categories.tsx'
import CategorySpecific from './Pages/CategorySpecific.tsx'
import FilmView from './Pages/FilmView.tsx'
import HomePage from './Pages/HomePage.tsx'
import { ThumbnailProvider } from './context/BookmarkedContext.tsx'
import './index.css'
import { theme } from './theme.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomePage />} />
      <Route path='filmview' element={<FilmView />} />
      <Route path='bookmarked' element={<Bookmarked />} />
      <Route path='categories' element={<Categories />} />
      <Route path='categories/:genre' element={<CategorySpecific />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThumbnailProvider>
        <RouterProvider router={router} />
        <App />
      </ThumbnailProvider>
    </ThemeProvider>
  </React.StrictMode>
)
