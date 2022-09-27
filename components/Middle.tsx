interface MiddleProps {
    children: JSX.Element | JSX.Element[];
}

const Middle = ({ children }: Partial<MiddleProps>): JSX.Element => {
    return (
        <div className="w-[65%] h-full bg-white-800 relative">
            {children}
        </div>
    )
};

export default Middle;