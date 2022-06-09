import { FormEvent, useState } from "react"
import useForm from "../../shared/hooks/useForm"
import getHeroesByName from "../../heroes/selectors/getHeroesByName"
import HeroCard from "../../heroes/components/HeroCard"
import { Hero } from "../../heroes/types"

interface FormValues {
  search: string
}

const SearchView = () => {
  const [heroes, setHeroes] = useState<Array<Hero>>([])
  const [formValues, handleInputChange] = useForm<FormValues>({
    search: "",
  })

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    setHeroes(getHeroesByName(formValues.search))
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className={"row"}>
        <div className={"col-5"}>
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder={"Search a hero"}
              className={"form-control"}
              name={"search"}
              autoComplete={"off"}
              onChange={handleInputChange}
              value={formValues.search}
            />
            <button
              type={"submit"}
              className={"btn btn-outline-primary mt-1 w-100"}
            >
              Search
            </button>
          </form>
        </div>
        <div className={"col-7"}>
          <h4>Results</h4>
          <hr />
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SearchView
