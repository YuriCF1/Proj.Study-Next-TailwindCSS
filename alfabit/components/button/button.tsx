import React from "react"

type ButtonProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

// const button = (props: ButtonProps) => {
// Colocando o className para que algúem possa injetar qualquer classe
const button = ({ children, className }: ButtonProps) => {
    return (
        // <button>{props.children}</button>
        <>
            <button
                className={`
            minhas-estilizacoes
            bg-[#2D5BFF]
            rounded-[8px] 
            px-[32px]
            py-[12px]
            text-white
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

export default button