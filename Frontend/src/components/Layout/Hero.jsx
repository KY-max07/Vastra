import { NavLink } from 'react-router-dom';
import heroImg from '../../assets/rabbit-hero.webp';

const Hero = () => {
  return(
    <section className='relative'>
        <img src={heroImg} alt="Vastra" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
        <div className='absolute inset-0 bg-black/0 flex items-center justify-center '>
            <div className='text-center text-black/60 flex flex-col items-center justify-center'>
                
                
                <h1 className='text-5xl font-canopee  backdrop-blur-xl bg-black/10 md:text-9xl font-extrabold tracking-widest  uppercase '>'Vacation</h1>
                
                <h1 className='text-5xl pl-3 font-canopee backdrop-blur-xl bg-black/10 md:text-9xl font-extrabold tracking-widest mb-2 mt-1 uppercase '>ready</h1>
               
                <p className=' md:hidden  font-primary text-white text-center md:text-lg font-bold tracking-wider mb-2'> Are you ready for Vaction!</p>
                <p className='hidden md:flex  font-primary text-white text-center md:text-lg font-bold tracking-wider mb-6'>Explore our vacation-ready outfits with fast worldwide shipping</p>
                <NavLink to='#' className="text-xs md:text-sm    bg-white text-gray-900 font-bold tracking-wider px-6 py-2 rounded font-secondary hover:bg-gray-300">Shop now</NavLink>
            </div>
        </div>
    </section>
  );
};

export default Hero;
