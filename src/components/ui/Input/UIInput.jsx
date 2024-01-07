import './style.module.scss'

export const UIInput = (inputProps) => {
  const { todo, onChange, onKeyDown } = inputProps

  return (
    <input
      onKeyDown={onKeyDown}
      value={todo}
      onChange={onChange}
      className="p-2 rounded-xl w-full"
      type="text"
      placeholder="Add todos"
    />
  )
}
