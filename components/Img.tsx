import Image from 'next/image'
import { ImgProps } from '../utils/interfaces'


const Img = (options: ImgProps) => {
    return (
        <div className={options.className} id="img" style={{ height: options.height, width: options.width }}>
            <Image {...(options as Omit<ImgProps, 'onClick' | 'className'>)} alt={options.alt} />
        </div >
    )
}

export default Img