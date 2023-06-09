import Image from "next/image";

export default function Upcomming() {
    return (
        <div className=" flex flex-col items-center w-full h-full box-border shadow-lg rounded-2xl basis-1/2 relative bg-[#f6b112] ">
       
       <p className="  border-[#ffffffff]max-lg:text-4xl max-sm:text-2xl max-xl:text-5xl max-2xl:text-6xl leading-relaxed text-8xl  text-black  font-poppins  font-[800]  tracking-[4.8px]">
            Upcomming Event
          </p>

        <div className="md:w-full md:h-[40.5rem] w-full h-[40rem] p-4 rounded-2xl shadow-lg  flex flex-col ease-linear duration-300 md:flex-row-reverse">
        
         
      

        <div className=" pt-5 pr-2 pl-2 flex flex-row justify-around flex-wrap">
        <form action="https://script.google.com/macros/s/AKfycbwQ-1YceM31L4i2rQw_0ZKC7sfYySnN8UVQpkDLU4o/dev" method="post">
         <div className="flex flex-col items-center m-2">
          <label  >Name</label>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
            type="text" name="name" placeholder="First Name*" /><br />
         
         <label  >Surname</label>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
            type="text" name='surname' placeholder="First Name*" /><br />
          <label  >Department</label>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
           name ='department'  type="text" placeholder="First Name*" /><br />
          <label  >Mobile Number</label>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
            type="number" name="number" placeholder="First Name*" /><br />
         	<button className="uppercase text-sm font-bold tracking-wide bg-black text-gray-100 p-3 rounded-lg w-full  justify-center
                      focus:outline-none focus:shadow-outline shadow-xl">
            Send Message
          </button>
         
          </div>
       </form>
      
        </div>

        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          <Image
            src='/gallery/gli_1.jpg'
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className=" rounded-2xl"
          />
        </div>

    
      </div>
    
      </div>


    )
    }
