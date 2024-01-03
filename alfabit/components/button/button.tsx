import React from "react"

export type ButtonProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

// const button = (props: ButtonProps) => {
// Colocando o className para que algúem possa injetar qualquer classe
const Button = ({ children, className }: ButtonProps) => {
    return (
        // <button>{props.children}</button>

        // MANEIRAS DE DECLARAR AS CLASSES
        // bg-[#2D5BFF] = Valores arbitrários. Valores que não estão definidos como tokens/configurações padrão do tailwind
        // bg-[#2D5BFF] = bg-primary
        // theme-violet

        // Quando se tem a cor padrão, a opacidade é aplicada
        // bg-blue-500
        // bg-opacity-50

        // Tem várias formas de consertar.
        //Verificar o tailwind.config e ver que dá pra transformar a classe em função
        <>
            <button
                className={`
            minhas-estilizacoes
            bg-primaryOpacity
            bg-opacity-50
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

export default Button