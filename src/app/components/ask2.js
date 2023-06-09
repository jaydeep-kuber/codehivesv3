export default function Ask2() {
    return (
        
        <div className=" flex flex-col items-center w-w-1/2 h-full box-border bg-[#f6b112] ">
        <p className="  border-[#ffffffff]max-lg:text-4xl max-sm:text-2xl max-xl:text-5xl max-2xl:text-6xl leading-relaxed text-8xl   font-poppins  font-[800]  tracking-[4.8px] bg-clip-text text-transparent bg-gradient-to-r from-black to-black">
          Ask The Hives
        </p>
<br />

	<form className="container mx-auto my-4 px-4 lg:px-20 flex justify-center">

		
       	<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10   justify-center">
                <label className="text-black" >Name</label><br />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none  focus:shadow-outline"
            type="text" placeholder="First Name*" /><br />

                <label className="text-black" >Email</label><br />
			
			
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
			<br />	    <label className="text-black">Contact Number</label><br />
			
                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-full focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
            <br />
        
				
			    <label className="text-black">Say Something ....</label><br />
			
            		<textarea placeholder="Message*" className="w-40 h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline "></textarea>
				<br />
                </div>
        	</form>
            	<div className=" w-full lg:w-1/4 flex justify-center">
					<button className="uppercase text-sm font-bold tracking-wide bg-black text-gray-100 p-3 rounded-lg w-1/2 sha
                      focus:outline-none focus:shadow-outline shadow-xl">
            Send Message
          </button>
				</div>
			</div>

		

    )
    }
