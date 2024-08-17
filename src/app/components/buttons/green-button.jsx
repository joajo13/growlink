import { Button } from "@nextui-org/react"

export const GreenButton = ({link, text, startIcon, endIcon, to, size, onClick, className}) => {
  return (
    <Button
        variant="solid"
        size={size}
        as={link ? "a" : "button"}
        href={to}
        startContent={startIcon}
        endContent={endIcon}
        onClick={onClick}
        className="bg-app-green text-app-white"
      >
        {text}
      </Button>
  )
}