import AskTheHives from './components/ask2'
import About from './components/About'
import Faqs2 from './components/faq2'
import Footer from './components/Footer'
import Hero from './components/hero'
import Navbar from './components/navbar';
// import Navbar from './components/navbar/Navbar'
import Upcomming from './components/upcomming'

export default function Home() {
  return (
    <>
   <Navbar />
    {/* <Navbar /> */}
     <Hero />
     <About />
    
    <Upcomming />
     {/*
    
     <OurTeam /> */}
 <Faqs2 />
 <AskTheHives />
<Footer />
  </>
  )
}
