import Image from "next/image"
import Bulb from "../public/brocken-light-bulb.jpg"

const Error = () => {
  return (
    <div className="grid place-items-center h-[100vh] bg-gradient-to-tr from-indigo-900 to-indigo-200">
      <div className="mx-2 sm:mx-3 md:mx-6 lg:mx-0 relative">
        <Image 
          src={Bulb}
          alt="brocken-light-bulb"
          width={800}
          height={400}
          className="object-cover"
        />
        <div className="absolute top-3 right-5 w-1/2 text-right md:right-10 sm:w-1/3">
          <h1 className=" text-5xl mb-2 sm:text-8xl md:text-9xl font-bold">
            <span className="bg-gradient-to-tr from-indigo-100 to-indigo-900 text-transparent bg-clip-text">404</span>
          </h1>
          <div className="text-sm sm:text-base md:text-lg font-bold">
            <h5>
              <span className="bg-gradient-to-tr from-indigo-100 to-indigo-500 text-transparent bg-clip-text">Looks like you are lost</span>
            </h5>
            <p className="text-xs sm:text-sm md:text-base font-bold">
              <span className="bg-gradient-to-tr from-indigo-100 to-indigo-400 text-transparent bg-clip-text">The page <br /> you are looking for not found!</span>
            </p>
          </div>
          
        </div>
        <button type="button" className="absolute bottom-1 left-1 sm:left-3 sm:bottom-3 text-xs h-8 pl-2 uppercase flex items-center gap-2" >
            <span className="hover:pr-1 bg-gradient-to-tr from-indigo-100 to-indigo-400 text-transparent bg-clip-text">back to home</span>
            <svg className=" -rotate-90 w-4 h-4 text-indigo-300 hover:translate-x-2" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
      </div>
    </div>
  )
}
export default Error