interface Iprops {
    label: string,
    color: string,
    onClick(): void
}

const Button = ({label, color, onClick}: Iprops) => {
  return (
    <button style={{backgroundColor: `${color}`}} onClick={onClick}>
        {label}
        </button>
  )
}

export default Button