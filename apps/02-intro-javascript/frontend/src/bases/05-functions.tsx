// @ts-ignore
;(() => {
  const greeting = (name: string) => `Hi ${name}`

  console.log(greeting("Francisco"))

  const getUser = () => ({
    id: "uuid",
    username: "crazyuser",
  })

  const user = getUser()
  console.log(user)

  const getActiveUser = (username: string) => ({
    id: "uuid",
    username,
  })

  const otherUser = getActiveUser("crazyuser")
  console.log(otherUser)
})()
