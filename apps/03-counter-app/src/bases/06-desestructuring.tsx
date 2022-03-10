// @ts-ignore
;(() => {
  const person = {
    name: "Francisco",
    age: 45,
    password: "Ironman",
  }
  const { name: otherName, age, password } = person

  console.log(otherName)
  console.log(age)
  console.log(password)

  const getPerson = ({
    name,
    range = "Captain",
  }: {
    name: string
    range?: string
  }) => {
    return {
      name,
      range,
    }
  }

  const { name, range } = getPerson(person)
  console.log(name, range)
})()
