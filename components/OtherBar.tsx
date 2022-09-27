interface OtherBarProps {
    children: JSX.Element | JSX.Element[]
}


const OtherBar = ({ children }: Partial<OtherBarProps>): JSX.Element => {
    return (
        <div className="w-[25%] bg-white-900 lg:rounded-r-2xl relative">
            {children}
        </div>
    )
};

export default OtherBar;