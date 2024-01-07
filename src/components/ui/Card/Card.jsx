import { UIButton } from '../Button/UIButton'
import styles from './style.module.scss'

export const Card = (todoProps) => {
  const { title, id, onSelect, color, icon, isDone } = todoProps

  const theme = color ? `card_${color}` : 'card'

  return (
    <div
      className={`mt-2 p-6 text-white rounded-xl flex justify-between items-center ${styles[theme]}`}
    >
      <h1>
        {id + 1}. {title}
      </h1>
      <UIButton onClick={onSelect} icon={icon} isDone={isDone}></UIButton>
    </div>
  )
}
