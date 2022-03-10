// @ts-ignore
;(() => {
  const array = [1, 2, 3, 4]
  // array.push(1)

  const otherArray = [...array, 5]

  const transformedArray = otherArray.map((number) => number * 2)

  console.log(array, otherArray, transformedArray)
})()
