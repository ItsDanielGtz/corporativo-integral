interface Props {
  className?: string
}

function Spanish({className}: Props) {
  return (
    <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
    <text x="17" y="30" fontFamily="Arial" fontSize="15" fill="currentColor">ES</text>
  </svg>
  )
}

export default Spanish