const queryParams = () => {
  console.log()
  return new URL(String(window.document.location)).searchParams
}

export default queryParams
