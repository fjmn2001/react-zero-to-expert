import { useState } from "react"
import AddCategory from "./category/AddCategory"
import GifGrid from "./category/GifGrid"

interface Props {
  defaultCategories?: string[]
}

const GifExpertApp = ({ defaultCategories = ["One Punch"] }: Props) => {
  const [categories, setCategories] = useState(defaultCategories)

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
