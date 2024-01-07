import styles from './style.module.scss'

export const Button = (button) => {
  const { color, title, icon, onClick, isDone = false } = button
  const theme = color ? `button_${color}` : null

  return (
    <button onClick={onClick} className={`${styles[theme]}`} onKeyDown={onClick}>
      {title ? (
        title
      ) : (
        <img
          className={
            isDone === false
              ? 'hover:opacity-75 active:opacity-100 hover:rotate-90 transition ease-in delay-45'
              : 'cursor-default'
          }
          src={icon}
        />
      )}
    </button>
  )
}
