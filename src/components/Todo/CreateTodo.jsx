export default function createTodo(title, done, id) {
  return {
    title,
    done,
    editing: false,
    id
  };
}
