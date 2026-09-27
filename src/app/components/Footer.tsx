 import { FaDumbbell } from 'react-icons/fa6';

const Footer = () => {
    return (
    <footer className='mt-auto border-t border-base-300 bg-base-200'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row'>
            <div className='flex gap-4 item-center'>                
                <span className='text-[#C2F800] text-2xl'><FaDumbbell /></span>
                
                <span className='text-base-content uppercase font-bold text-2xl'>FitLog</span> 
            </div>
            <div className='text-base-content/60'>@2026 FitLog - Workout Library. Train hard, log honest.</div>
        </div>
    </footer>
    );
};

export default Footer;