export const toUpperCase = (todo) => {
  if (todo[0] === todo[0].toUpperCase()) {
    return todo
  } else {
    return todo[0].toUpperCase() + todo.slice(1, todo.length)
  }
}
