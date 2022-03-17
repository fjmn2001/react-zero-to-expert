import { useState } from "react"
import AddCategory from "./category/AddCategory"
import GifGrid from "./category/GifGrid"

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"])

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
