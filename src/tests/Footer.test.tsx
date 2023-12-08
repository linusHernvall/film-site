import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import App from '../App'

describe('Footer', () => {
  test('should render info in footer', () => {
    render(
      <MemoryRouter>
        <App />
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
        <App />
      </MemoryRouter>
    )
    const twitterIcon = screen.getByTestId('TwitterIcon')
    expect(twitterIcon).toBeInTheDocument()
  })
})
