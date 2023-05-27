import { renderHook, act } from '@testing-library/react'
import { useFullScreenHeight } from './'

describe('useFullScreenHeight hook', () => {
  const style = {
    ...document.documentElement.style,
    setProperty: jest.fn()
  }

  Object.defineProperty(document.documentElement, 'style', {
    get: () => style
  })

  beforeEach(() => {
    style.setProperty.mockClear()
  })

  it('useFullScreenHeight => should set --vh style property on initial render and resize', () => {
    const { unmount } = renderHook(() => { useFullScreenHeight() })

    act(() => {
      Object.defineProperty(window, 'innerHeight', { value: 800, writable: true })
      global.dispatchEvent(new Event('resize'))
    })

    expect(style.setProperty).toHaveBeenCalledWith('--vh', '8px')

    unmount()
  })

  it('useFullScreenHeight => should set --vh style property on orientation change', () => {
    const { unmount } = renderHook(() => { useFullScreenHeight() })

    act(() => {
      Object.defineProperty(window, 'innerHeight', { value: 900, writable: true })
      global.dispatchEvent(new Event('orientationchange'))
    })

    expect(style.setProperty).toHaveBeenCalledWith('--vh', '9px')

    unmount()
  })
})
