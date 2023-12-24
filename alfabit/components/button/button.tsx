import React from "react"

type ButtonProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

// const button = (props: ButtonProps) => {
const button = ({ children, className }: ButtonProps) => {
    return (
        // <button>{props.children}</button>
        <button
            className={`
            bg-[#2D5BFF]
            rounded-[8px] 
            px-[32px]
            py-[12px]
            minhas-estilizacoes
            text-white
        ${className}`}>
            {children}
        </button>
    )
}

export default button