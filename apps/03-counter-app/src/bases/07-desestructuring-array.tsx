// @ts-ignore
;(() => {
  const persons = ["Goku", "Vegeta", "Trunks"]

  console.log(persons[0])

  const [, , personThree] = persons

  console.log(personThree)

  const getArray = () => {
    return ["ABD", 123]
  }

  const [letter, number] = getArray()
  console.log(letter, number)

  // task
  const useState = (value: string) => {
    return [value, () => console.log("Hi there")] as const
  }
  const [name, setName] = useState("Goku")
  console.log(name)
  setName()
})()
