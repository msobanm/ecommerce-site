export type ButtonProps = {
  className?: string
  title: string | React.ReactNode
  onClick: () => void
}

export type CarouselItemProps = {
  name: string
  image: string
  onClick: () => void
}

export type ReviewCardProps = {
  author: string
  content: string
  rating: number
}

export type ShopItemProps = {
  path: string
  index: number
}
