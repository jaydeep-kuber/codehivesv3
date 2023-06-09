// import Head from 'next/head';
// import BottomGlitter from '@/components/StyledText/BottomGlitter';
// import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { menter,Director, Core,Team2k22 } from '../../../lib/data/TeamData';

function Teams() {
  return (
      <section className="mt-16 mb-12 container-70  bg-[#f6b112]">
        <div className="my-16 w-full text-center">
          {/* <BottomGlitter text="Our Team" /> */}
        
          <h1 className={Styles.postHead}>Our Team</h1>
      

        </div>
        <h2 className={Styles.postHead}>Mentor</h2>
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

       
        <h2 className={Styles.postHead}>Mentor</h2>
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
        
        <h2 className={Styles.postHead}>Core Team</h2>
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
          
        <h2 className={Styles.postHead}> Team 2K23</h2>
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

      </section>
  );
}

export default Teams;
