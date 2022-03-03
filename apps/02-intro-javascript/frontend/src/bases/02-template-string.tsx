// @ts-ignore
;(() => {
  const firstName = "Francisco"
  const lastName = "Marcano"
  const fullName = `${firstName} ${lastName}`

  console.log(fullName)

  const greeting = (name: string) => `Hi ${name}`

  console.log(greeting(firstName))
})()
