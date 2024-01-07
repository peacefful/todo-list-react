import './style.module.scss'

export const Input = (input) => {
  return <input {...input} className="p-2 rounded-xl w-full" type="text" placeholder="Add todos" />
}
