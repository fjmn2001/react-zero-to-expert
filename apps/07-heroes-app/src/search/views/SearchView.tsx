import { FormEvent, useMemo } from "react"
import useForm from "../../shared/hooks/useForm"
import getHeroesByName from "../../heroes/selectors/getHeroesByName"
import HeroCard from "../../heroes/components/HeroCard"
import { useNavigate } from "react-router-dom"
import queryParams from "../../shared/utils/queryParams"

interface FormValues {
  search: string
}

const SearchView = () => {
  const navigate = useNavigate()
  const params = queryParams()
  const query = params.get("q") ?? ""

  const heroesFiltered = useMemo(() => getHeroesByName(query), [query])
  const [formValues, handleInputChange] = useForm<FormValues>({
    search: query,
  })

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    navigate(`?q=${formValues.search}`)
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
          {query === "" && (
            <div className={"alert alert-info"}>Search a hero</div>
          )}

          {query !== "" && heroesFiltered.length === 0 && (
            <div className={"alert alert-danger"}>
              There are not results for {query}
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SearchView
