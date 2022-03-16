import { useState } from "react"

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ])

  const handleAdd = () => {
    setCategories((categories) => ["Other", ...categories])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <hr />

      <button onClick={handleAdd}>Add</button>

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
