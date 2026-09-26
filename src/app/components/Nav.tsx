import Link from 'next/link';
import Logo from "@/app/assets/logo.png"
import Image from 'next/image';

const Nav = () => {
    const links = <>
        <li><Link href="" className='text-[#CCFF00] bg-base-100'>Workouts</Link></li>                    
        <li><Link href="">My Plan</Link></li>
    </> 
    return (
        <div className="container mx-auto navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* <Image src="/src/app/assets/logo.png" height={100} width={100} alt="Logo" /> */}
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        { links }
                    </ul>
                </div>
                <div className='px-4'>
                    <Link className='flex gap-4 items-center' href={"/"}>                    
                        <Image src={Logo} height={30} width={30} alt="Logo" /> 
                        <span className='font-bold text-2xl text-white uppercase'>FitLog</span> 
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">                
                <ul className="menu menu-horizontal px-1">
                    { links }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nav;