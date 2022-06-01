export const getUser = () => ({
  id: "uuid",
  username: "crazyuser",
})

export const getActiveUser = (username: string) => ({
  id: "uuid",
  username,
})
