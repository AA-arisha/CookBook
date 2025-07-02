
import HeroImage from '../images/hero-section-image.png'
const Hero = ()=>{
    return(
        <>
            <section className='h-60 w-full relative' >
                <div className="hero-text absolute top-[30%] left-[20%] right-[20%]">
                    <h1 className='text-2xl md:text-4xl xl:text-5xl font-bold text-size[30%]' >Optimise Your Meal</h1>
                    <p className='text-xs mt-5 md:text-2xs xl:text-3xs font-bold text-gray-500' >Select Meal to Add in Week. You will be able to edit. Modify and change the Meal Weeks.</p>
                </div>
                <img src={HeroImage} className='center no-repeat object-cover opacity-25 w-full h-full' alt="" srcset="" />
                
            </section>
            
        </>
    )
}
export default Hero;