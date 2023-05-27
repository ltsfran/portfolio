import { fireEvent, render, screen } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import Image from './image'

describe('Image component', () => {
  test('Image => render with fallback source', () => {
    render(<Image src="test.jpg" alt="Test Image" />)

    const imageElement: HTMLImageElement = screen.getByAltText('Test Image')

    expect(imageElement).toBeInTheDocument()
    expect(imageElement.src).toContain('data:image/png;base64')
  })

  test('Image => render with provided source', () => {
    render(<Image src="test.jpg" alt="Test Image" />)

    const imageElement: HTMLImageElement = screen.getByAltText('Test Image')

    mockAllIsIntersecting(true)

    expect(imageElement.src).toContain('test.jpg')
    expect(imageElement.srcset).toBe('')
  })

  test('Image => render with provided source set', () => {
    render(<Image src="test.jpg" srcSet="test-large.jpg 2x, test-small.jpg 1x" alt="Test Image" />)

    const imageElement: HTMLImageElement = screen.getByAltText('Test Image')

    mockAllIsIntersecting(true)

    expect(imageElement.srcset).toContain('test-large.jpg 2x, test-small.jpg 1x')
  })

  test('Image => render with fallback source on loading error', async () => {
    render(<Image src="test.jpg" alt="Test Image" />)

    const imageElement: HTMLImageElement = screen.getByAltText('Test Image')

    mockAllIsIntersecting(true)

    fireEvent.error(imageElement)

    expect(imageElement.src).toContain('data:image/png;base64')
  })
})
