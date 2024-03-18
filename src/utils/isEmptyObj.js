export const isEmptyObj = (errors) => {
  for (const error in errors) {
    if (error) return false
  }
  return true
}