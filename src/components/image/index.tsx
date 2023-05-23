import { useCallback, useEffect, useRef } from 'react'
import 'intersection-observer'

const defaultFallback = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+x8AAp8BznoPXvoAAAAASUVORK5CYII='

type DefaultImgProps = React.ImgHTMLAttributes<HTMLImageElement>

interface ImageProps extends DefaultImgProps {
  src: string
  srcSet?: string
  alt: string
  className?: string
  fallback?: string
}

const Image: React.FC<ImageProps> = ({
  src,
  srcSet,
  alt,
  fallback = defaultFallback,
  className,
  ...nextProps
}) => {
  const imgRef = useRef<HTMLImageElement>(null)

  const handleError = useCallback(() => {
    if (imgRef.current !== null) {
      imgRef.current.src = defaultFallback
    }
  }, [])

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const imageElement = entries[0]
      if (imageElement.isIntersecting && imgRef.current !== null) {
        imgRef.current.src = src
        imgRef.current.onerror = handleError
        if (srcSet !== undefined) {
          imgRef.current.srcset = srcSet
        }
        observer.unobserve(imageElement.target)
        observer.disconnect()
      }
    },
    [src, srcSet, handleError]
  )

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      handleIntersection(entries, observer)
    })

    if (imgRef.current !== null) {
      observer.observe(imgRef.current)
    }

    return () => { observer.disconnect() }
  }, [handleIntersection])

  return (
    <img
      ref={imgRef}
      src={fallback}
      alt={alt}
      title={alt}
      className={className}
      {...nextProps} />
  )
}

export default Image
