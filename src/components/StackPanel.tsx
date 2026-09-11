import type { Technology } from './types'
const iconMap: Record<string, string> = { react:'⚛', vue:'V', svelte:'S', next:'N', node:'⬡', postgres:'🐘', redis:'▰', javascript:'JS', typescript:'TS', java:'☕', tailwind:'≋', docker:'◆' }
export default function StackPanel({ selectedTech, onRemove, onRemoveAll }: { selectedTech: Technology[]; onRemove: (id:string)=>void; onRemoveAll:()=>void }) {
  return <aside className="stack-panel"><h3>Your Stack</h3><p>{selectedTech.length} Technology Selected</p><div className="selected-list">
    {selectedTech.map(tech => <div className="selected-item" key={tech.id}><span className={`mini-icon icon-${tech.id}`}>{iconMap[tech.id]}</span><div><b>{tech.name}</b><small>{tech.category}</small></div><button aria-label={`Remove ${tech.name}`} onClick={()=>onRemove(tech.id)}>×</button></div>)}
    {!selectedTech.length && <div className="empty-stack">Choose technologies<br/>to see them here.</div>}
  </div><button className="remove-all" onClick={onRemoveAll}>Remove All</button></aside>
}
