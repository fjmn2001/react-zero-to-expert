// @ts-ignore
;(() => {
  const person = {
    firstName: "Francisco",
    lastName: "Marcano",
    age: 36,
    address: {
      country: "Venezuela",
    },
  }

  console.log(person)

  // const otherPerson = person =>  bad
  const otherPerson = { ...person }

  otherPerson.firstName = "José"

  console.log(otherPerson)
})()
