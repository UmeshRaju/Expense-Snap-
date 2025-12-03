import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import App from '../App'
import { ExpenseProvider } from '../context/ExpenseContext'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  it('renders header text', () => {
    render(
      <ExpenseProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ExpenseProvider>
    )
    expect(screen.getByText(/ExpenseSnap/i)).toBeInTheDocument()
  })
})
