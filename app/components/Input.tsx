import clsx from "clsx"

type InputProps = {
  className?: string
  placeholder?: string 
  required?: boolean
  type?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input(props: InputProps) {
  const { className, placeholder, required, type = "text", ...rest } = props

  const classNames = clsx(
    {
      input: true,
    },
    className
  )

  return (
    <>
      <label htmlFor="" className="label">
        {placeholder}
        {required && <span className="input-required">*</span>}

        <div>
          <input
            type={type}
            placeholder={placeholder}
            className={classNames}
            required={required}
            {...rest}
          />
        </div>
      </label>
    </>
  )
}
