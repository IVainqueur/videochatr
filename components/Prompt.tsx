import React, { ElementType, InputHTMLAttributes } from "react";

interface PromptProps {
    question: string;
    placeholder?: string;
    update: Function;
}

interface InputElement extends Element {
    value: string;
}

const Prompt = ({
    question,
    placeholder = 'Type Here...',
    update
}: PromptProps): JSX.Element => {
    const inputHandler = (e: React.KeyboardEvent<InputElement>) => {
        if (e.key === "Enter") update(e.currentTarget.value)
    }
    return (
        <div className="in-center-ish flex flex-col gap-3 max-w-xs m-auto">
            <span>{question}</span>
            <div className="bar-bottom text-white-100">
                <input
                    type={'text'}
                    placeholder={placeholder}
                    onKeyDown={inputHandler}
                    className="relative w-full bg-transparent py-2 px-4 outline-none text-white-500"
                />
            </div>
        </div>
    )
}

export default Prompt