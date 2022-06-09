import { FormEvent } from "react"
import useForm from "../../shared/hooks/useForm"

interface FormValues {
  search: string
}

const SearchView = () => {
  const [formValues, handleInputChange] = useForm<FormValues>({
    search: "",
  })

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    console.log("formValues", formValues)
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
      </div>
    </>
  )
}

export default SearchView
