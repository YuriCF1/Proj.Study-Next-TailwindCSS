import React from 'react'

export type InputProps = {
    label?: string;
    multiline?: boolean; //Se for textarea ou não
}
    & (
        React.InputHTMLAttributes<HTMLInputElement> |
        React.TextareaHTMLAttributes<HTMLTextAreaElement>
    )

const InputOrTextArea = ({ ...props }: InputProps) => {
    if (props.multiline) {
        return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} /> //Fazendo casting para definir o tipo que será recebido
    }
    return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />

}

const input = ({ label, className, ...rest }: InputProps) => {
    return <div className='relative'>
        {label && <label className='relative'>{label}</label>}
        <InputOrTextArea
            className={`
            bg-dark
            text-gray-primary
            disabled:bg-disabled disabled:border-2 disabled:border-disabled
        ${className}
        `}
            {...rest}
        />
    </div>
}

export default input;