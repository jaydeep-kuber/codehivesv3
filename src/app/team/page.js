// import Head from 'next/head';
// import BottomGlitter from '@/components/StyledText/BottomGlitter';
// import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { menter,Director, Core,Team2k22 } from '../../../lib/data/TeamData';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

function Teams() {
  return (

    <>
<Navbar />
      <section className="mt-16 mb-12 container-70 shadow-transparent	 bg-[#f6b112]">
        <div className="my-16 w-full text-center">
          {/* <BottomGlitter text="Our Team" /> */}
        
          <h1 className={Styles.postHead}>Our Team</h1>
      

        </div>


        
        <div
        className="w-2/3 h-1/2  flex flex-col  rounded-full  shadow-lg shadow-indigo-500/40	    ">

        <h2 className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">Mentor</h2>
        <br />
        <br />
        
        <div className={Styles.cardContainer}>
          {menter.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                link={item.url}
              />
            );
          })}
        </div>
</div>
       
        <div
        className="w-full h-full rounded-lg flex flex-col  bg-[#f6b112]  ">
        
        <h2 className=' text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold'>Director</h2>
        
       <br /> 
       <br />
      
        <div className={Styles.cardContainer}>
          {Director.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                link={item.url}
              />

            );
          })}
        </div>
        </div>




        <div
        className="w-full h-full rounded-lg flex flex-col shadow-lg  bg-[#f6b112]  ">
        
        <h2 className=' text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold'>Core Team</h2>
        
       <br /> 
       <br />
      
        <div className={Styles.cardContainer}>
          {Core.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.pos}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                link={item.url}
              />

            );
          })}
          </div>
           </div>
      
        
        <div
        className="w-full h-full rounded-lg flex flex-col  bg-[#f6b112]  ">
        
        <h2 className=' text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold'>Team 2k23</h2>
        
       <br /> 
       <br />
      
        <div className={Styles.cardContainer}>
          {Team2k22.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.pos}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                link={item.url}
              />

            );
          })}
        </div>
</div>
      </section>
<Footer />
      </>
  );
}

export default Teams;
