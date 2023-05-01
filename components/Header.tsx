import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 flex justify-between  sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <p className='  lg:text-2xl'>AYAWORAN</p>
        <div className='hidden md:block'>
          <h1 className="font-bold ">
            The <span className="text-violet-500">AI</span> Image
            Generator 
          </h1>
          <h2 className="text-xs">Powered by DALL·E 2 & Chat GPT</h2>
        </div>
      </div>

      <div className="flex divide-x text-gray-500 items-center text-xs md:text-base">
        
        <Link
          href="https://github.com/NiranMike/ayaworan"
          className="px-2 font-light"
        >
          Github Repo
        </Link>
      </div>
    </header>
  )
}

export default Header