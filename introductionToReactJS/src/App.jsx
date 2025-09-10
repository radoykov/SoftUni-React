import { Header } from './components/Header';
import { Top } from './components/Top'
import { Features } from './components/Features/MainFeatures'
import { About } from './components/About'
import { Services } from './components/Services/MainServices'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App = () => (
    <>
        <Header />
        <Top />
        <Features />
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
);