import styles from './style.module.scss'
import { Button } from '../Button/Button'

export const Card = (card) => {
  const { title, id, onSelect, color, icon, isDone } = card
  const theme = color ? `card_${color}` : 'card'

  return (
    <div
      className={`mt-2 p-6 text-white rounded-xl flex justify-between items-center ${styles[theme]}`}
    >
      <h1>
        {id}. {title}
      </h1>
      <Button onClick={onSelect} icon={icon} isDone={isDone} />
    </div>
  )
}
