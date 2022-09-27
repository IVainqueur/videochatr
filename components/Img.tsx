import Image from 'next/image'

interface ImgProps {
    src: string;
    alt: string;
    height?: number | string;
    width?: number | string;
    className?: string;
}

const Img = (options: ImgProps) => {
    return (
        <div className={options.className} id="img" style={{ height: options.height, width: options.width }}>
            <Image {...options} alt={options.alt} />
        </div >
    )
}

export default Img