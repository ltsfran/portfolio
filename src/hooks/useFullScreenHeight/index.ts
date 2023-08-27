import { useEffect } from 'react'

const useFullScreenHeight = (): void => {
  const handleResize = (): void => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  })

  useEffect(() => {
    window.addEventListener('orientationchange', handleResize)
    return () => { window.removeEventListener('orientationchange', handleResize) }
  })
}

export default useFullScreenHeight
