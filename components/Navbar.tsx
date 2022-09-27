import Link from 'next/link'
import Img from './Img'

const Navbar = () => {
    return (
        <nav className="bg-purpleshade-500 relative flex gap-3 items-center justify-center h-full w-[10%] p-4 lg:rounded-l-2xl">
            <Img
                src="/VC.svg"
                alt="the logo"
                height={38}
                width={35}
                className="absolute top-5"
            />
            <Link href={'/'}>
                <a className='p-3 rounded bg-purpleshade-700 shadow-lg hover:shadow-xl'>
                    <Img
                        src='/home.svg'
                        alt='Home icon'
                        height={27}
                        width={27}

                    />
                </a>
            </Link>
        </nav>
    )
}

export default Navbar