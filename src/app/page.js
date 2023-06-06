import AskTheHives from './components/ask2'
import About from './components/About'
import Faqs2 from './components/faq2'
import Footer from './components/Footer'
import Hero from './components/hero'
import Navbar from './components/navbar';
// import Navbar from './components/navbar/Navbar'
import OurTeam from './ourteam'

export default function Home() {
  return (
    <>
   <Navbar />
    {/* <Navbar /> */}
     <Hero />
     <About />
      <AskTheHives />
     {/*
    
     <OurTeam /> */}
 <Faqs2 />
<Footer />
  </>
  )
}
