import clsx from "clsx"

type ButtonProps = {
  children: React.ReactNode
  className?: string
  outline?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: ButtonProps) {
  const { children, className, outline, ...rest } = props

  const classNames = clsx(
    {
      btn: true,
      "btn-outline": outline,
      "btn-default": !outline,
    },
    className
  )

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}
