import React from "react"

export type ButtonProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

// const button = (props: ButtonProps) => {
// Colocando o className para que algúem possa injetar qualquer classe
// ...rest = resto das propriedades
const Button = ({ children, className, disabled, ...rest }: ButtonProps) => {
    const generalStyles = 'rounded-md px-6 py-2 font-xl'
    const Btn = (classes: string) => {
        return <button
            className={`${generalStyles} ${classes} ${className}`}
            disabled={disabled}
            {...rest}>
            {children}
        </button>
    }
    return Btn(disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white')
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

    // Vairáveis de tipografia 
    // py-[12px] = px-2xs = 12px (variável colocada no config, dá o valor nas sugestões clicando Ctrl Espaço. Por conta do comentário)
    // rounded-[8px] = rounded-md


    // <button
    //     className={`
    // minhas-estilizacoes
    // bg-primary
    // text-white
    // text-xs
    // bg-opacity-50 
    // rounded-md 
    // px-6 
    // py-2
    // ${className}`}
    //     disabled={disabled}
    //     {...rest}>
    //     {children}
    // </button>

    /* Outros exemplos importantes */
    /* <div className="bg-[#2D5BFF] rounded-t-[10px]">Borda superior arredondada com 10 pixels</div>
        <div className="bg-[#2D5BFF] rounded-r-[10px]">Borda direita arredondada com 10 pixels</div>
        <div className="bg-[#2D5BFF] rounded-b-[10px]">Borda inferior arredondada com 10 pixels</div>
        <div className="bg-[#2D5BFF] rounded-l-[10px]">Borda esquerda arredondada com 10 pixels</div>
        <div className="bg-[#2D5BFF] rounded-br-[10px] m-5 px-4 py-2">Borda inferior direita arredondada com 10 pixels</div> */
}

export default Button