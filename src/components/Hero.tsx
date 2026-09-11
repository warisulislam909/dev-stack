import { toast } from 'react-toastify'
import heroStackImage from '../assets/hero-stack.png'
export default function Hero() {
 const scrollToTech=()=>document.getElementById('technologies')?.scrollIntoView({behavior:'smooth'})
 return <section className="hero page-shell"><div className="hero-copy"><h1>Build Your Ideal.<br/><span>Development Stack</span></h1><p>Explore frontend, backend, database, and tooling options,<br className="desktop-only"/> compare them side by side, and put together the stack that fits your<br className="desktop-only"/> next project.</p><div className="hero-actions"><button className="primary-btn" onClick={scrollToTech}>Explore Technologies</button><button className="secondary-btn" onClick={()=>toast.info('Pick technologies below to build your stack.')}>Learn More</button></div></div><div className="stack-visual"><img src={heroStackImage} alt="Development technology stack" className="hero-stack-image"/></div></section>
}
