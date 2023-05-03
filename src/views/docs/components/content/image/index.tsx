import { useCallback, useState } from 'react'
import * as S from './styles'
export type TImageProps = {
  src: string
  title?: string
  description?: string
  max_height?: string
}

export const Image: React.FC<TImageProps> = ({ src, title, description, max_height }: TImageProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  return (
    <S.Container>
      {(title || description) && (
        <S.Header>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </S.Header>
      )}
      <S.ImageContainer max_height={max_height}>
        <S.Image src={src} onClick={() => openImageViewer(0)} key={0} alt={title ?? ''} width={50} height={50} unoptimized />
      </S.ImageContainer>
    </S.Container>
  )
}
