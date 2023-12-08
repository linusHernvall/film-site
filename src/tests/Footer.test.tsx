import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import Footer from '../components/footer/Footer'

describe('Footer', () => {
  test('should render info in footer', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    const footerElement = screen.getByText('Kontakta oss')
    expect(footerElement).toBeInTheDocument()

    const footerElement2 = screen.getByText('Jobba hos oss')
    expect(footerElement2).toBeInTheDocument()
  })

  test('should render twitter-icon', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    const twitterIcon = screen.getByTestId('TwitterIcon')
    expect(twitterIcon).toBeInTheDocument()
  })
})
