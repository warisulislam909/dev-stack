import { toast } from 'react-toastify'
import technologyData from '../data/technologies.json'
import TechCard from './TechCard'
import StackPanel from './StackPanel'
import type { Technology } from './types'
import { useMemo, useState } from 'react'
export default function TechnologyGrid(){
 const [selected,setSelected]=useState<string[]>(['svelte','redis'])
 const selectedTech=useMemo(()=>selected.map(id=>technologyData.find(t=>t.id===id)).filter(Boolean) as Technology[],[selected])
 const add=(tech:Technology)=>{if(selected.includes(tech.id)){toast.info(`${tech.name} is already in your stack.`);return}setSelected(s=>[...s,tech.id]);toast.success(`${tech.name} added to your stack!`)}
 const remove=(id:string)=>{const tech=technologyData.find(t=>t.id===id);setSelected(s=>s.filter(x=>x!==id));if(tech)toast(`${tech.name} removed from your stack.`)}
 const removeAll=()=>{if(!selected.length){toast.info('Your stack is already empty.');return}setSelected([]);toast.success('All technologies removed.')}
 return <section id="technologies" className="technology-section page-shell"><div className="section-heading"><h2>Explore the <span>Technologies</span></h2><p>Pick one technology per category to build your ideal stack.</p></div><div className="tech-layout"><div className="tech-grid">{technologyData.map(tech=><TechCard key={tech.id} tech={tech} selected={selected.includes(tech.id)} onAdd={()=>add(tech)}/>)}</div><StackPanel selectedTech={selectedTech} onRemove={remove} onRemoveAll={removeAll}/></div></section>
}
