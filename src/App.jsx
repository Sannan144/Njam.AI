import './App.css'
import FAQ from './FAQ/FAQ'
import Landing from './Landing/Landing'
import Marquee from './Marquee/Marquee'
import Nav from './Nav/Nav'
import SecondPage from './SecondSection/SecongPage'
import Testimonial from './Testimonial/Testimonial'
import ThirdPage from './ThirdPage/ThirdPage'
import Footer from './Footer/Footer'
import ScrollText from './ScrollText/ScrollText'

const App = () => {
  return (
    <div className='w-full overflow-hidden max-w-[1600px] m-auto min-h-screen bg-[#111] px-[5vw] py-3'>
      <Nav/>
      <Landing/>
      <Marquee/>
      <SecondPage/>
      <ThirdPage/>
      <FAQ/>
      <ScrollText/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App