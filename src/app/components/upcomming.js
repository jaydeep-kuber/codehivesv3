import Image from "next/image";

export default function Upcomming() {
    return (
        <div className=" flex flex-col items-center w-full h-full box-border shadow-lg rounded-2xl basis-2/3 relative bg-[#f6b112] ">
       

        <div className="md:w-full md:h-[40.5rem] w-full h-[40rem] p-4 rounded-2xl shadow-lg  flex flex-col ease-linear duration-300 md:flex-row-reverse">
        
         
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          <Image
            src='/gallery/gli_1.jpg'
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className=" rounded-2xl"
          />
        </div>

      

        <div className=" pt-0 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          <div className="flex flex-col items-center m-2">
          <label  >Name</label>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
            type="text" placeholder="First Name*" /><br />
         
         <label  >Name</label>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
            type="text" placeholder="First Name*" /><br />
          <label  >Name</label>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
            type="text" placeholder="First Name*" /><br />
          <label  >Name</label>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
            type="text" placeholder="First Name*" /><br />
         
         
          </div>
        
      
        </div>

    
      </div>
    
      </div>


    )
    }
