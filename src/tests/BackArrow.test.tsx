// import { render, screen } from '@testing-library/react'
// import { userEvent } from '@testing-library/user-event'
// import { MemoryRouter, Route, Routes } from 'react-router-dom'
// import { expect, test } from 'vitest'
// import App from '../App'
// import Categories from '../Pages/Categories'
// import CategorySpecific from '../Pages/CategorySpecific'
// // import BackArrow from '../components/BackArrow/BackArrow'
// // import { ArrowIcon } from '../components/BackArrow/style'

// test.only('BackArrow navigates to the previous page when clicked', async () => {
//   // Render the BackArrow component inside MemoryRouter
//   render(
//     <MemoryRouter initialEntries={['/categories/Drama', '/categories']}>
//       <Routes>
//         <Route path='/' element={<App />} />
//         <Route path='categories' element={<Categories />} />
//         <Route path='categories/:genre' element={<CategorySpecific />} />
//       </Routes>
//     </MemoryRouter>
//   )

//   // Find the BackArrow container using a more specific selector
//   const backArrow = screen.getByTestId('ArrowBackIcon')

//   // Check if the container is not null before clicking
//   userEvent.click(backArrow)

//   const crimeElement = await screen.findByText('crime')

//   expect(crimeElement).toBeInTheDocument()
// })
