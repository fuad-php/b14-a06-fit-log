 import { FaDumbbell } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='footer flex justify-between items-center bg-base-100 mt-10 p-6'>
            <div className='flex gap-4 item-center'>                
                <span className='text-[#C2F800] text-2xl'><FaDumbbell /></span>
                
                <span className='text-base-content uppercase font-bold text-2xl'>FitLog</span> 
            </div>
            <div className='text-base-content'>@2026 FitLog - Workout Library. Train hard, log honest.</div>
        </div>
    );
};

export default Footer;