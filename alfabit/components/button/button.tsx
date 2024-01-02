import React from "react"

export type ButtonProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

// const button = (props: ButtonProps) => {
// Colocando o className para que algúem possa injetar qualquer classe
const Button = ({ children, className }: ButtonProps) => {
    return (
        // <button>{props.children}</button>
        // bg-[#2D5BFF] = Valores arbitrários. Valores que não estão definidos como tokens/configurações padrão do tailwind
        // bg-[#2D5BFF] = bg-primary
        <>
            <button
                className={`
            minhas-estilizacoes
            bg-primary
            rounded-[8px] 
            px-[32px]
            py-[12px]
            text-white
            theme-violet
            ${className}`}>
                {children}
            </button>
            {/* Outros exemplos importantes */}
            {/* <div className="bg-[#2D5BFF] rounded-t-[10px]">Borda superior arredondada com 10 pixels</div>
            <div className="bg-[#2D5BFF] rounded-r-[10px]">Borda direita arredondada com 10 pixels</div>
            <div className="bg-[#2D5BFF] rounded-b-[10px]">Borda inferior arredondada com 10 pixels</div>
            <div className="bg-[#2D5BFF] rounded-l-[10px]">Borda esquerda arredondada com 10 pixels</div>
            <div className="bg-[#2D5BFF] rounded-br-[10px] m-5 px-4 py-2">Borda inferior direita arredondada com 10 pixels</div> */}
        </>
    )
}

export default Button