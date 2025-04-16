export interface FoodItem {
    id: number
    name: string
    image: string
    backgroundColor: string
  }

  export interface BakingArtItem {
    image: string
    heading: string
    paragraph: string
    onClick?: ()=> void
  }