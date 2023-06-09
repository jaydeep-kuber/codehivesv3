export default function Hero() {
    return (
      <div className=" flex flex-col justify-center items-center w-full h-full pl-5 pr-20 py-30 box-border  bg-[#f6b112]">
        <div className=" flex flex-row justify-between items-center h-[100%] box-border">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4rm1mrho7s4-3%3A39?alt=media&token=4c4d9df8-0744-49fe-b08d-5c588c162961"
            alt="Not Found"
            className="w-full h-full max-md:w-[50%] max-md:h-[50%] max-xs:w-[20%] max-xs:w-[20%] max-xl:w-[100%] max-sm:w-[25%] max-sm:h-[15%] max-lg:w-[35%] max-xl:h-[15%] max-lg:h-[15%] min-2xl:w-[100%]"
          />
          <p className="leading-relaxed  border-[#000000ff]  max-md:text-4xl max-sm:text-3xl max-lg:text-5xl max-xl:text-6xl  2xl:text-8xl  font-poppins  font-[800] bg-clip-text text-transparent bg-gradient-to-r from-black to-black">
            Welcome To Code Hives
          </p>
          
        </div>
      </div>
    )
}