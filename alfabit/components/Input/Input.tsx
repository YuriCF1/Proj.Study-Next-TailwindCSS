import React from 'react'

export type inputProps = {
    label?: string;
    multiline?: boolean; //Se for textarea ou não
}
    & (
        React.InputHTMLAttributes<HTMLInputElement> |
        React.TextareaHTMLAttributes<HTMLTextAreaElement>
    )

const input = ({...props }: inputProps) => {
    if (props.multiline) {
        return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} /> //Fazendo casting para definir o tipo que será recebido
    }
    return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />
}

export default input;