export function updateStatus(todo, done) {
  return Object.assign({}, todo, { done });
}

export function updateTitle(todo, title) {
  return Object.assign({}, todo, { title });
}
