type DefaultImgProps = React.ImgHTMLAttributes<HTMLImageElement>

export interface ImageProps extends DefaultImgProps {
  src: string
  srcSet?: string
  alt: string
  className?: string
  fallback?: string
}
