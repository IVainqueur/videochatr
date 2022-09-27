interface OtherBarProps {
    children: JSX.Element | JSX.Element[]
}


const OtherBar = ({ children }: Partial<OtherBarProps>): JSX.Element => {
    return (
        <div className="w-[25%] bg-white-900 lg:rounded-r-2xl relative py-5 px-6">
            {children}
        </div>
    )
};

export default OtherBar;