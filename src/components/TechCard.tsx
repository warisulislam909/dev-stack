import type { Technology } from './types'

const iconMap: Record<string, string> = { react:'⚛', vue:'V', svelte:'S', next:'N', node:'⬡', postgres:'🐘', redis:'▰', javascript:'JS', typescript:'TS', java:'☕', tailwind:'≋', docker:'◆' }

export default function TechCard({ tech, selected, onAdd }: { tech: Technology; selected: boolean; onAdd: () => void }) {
  return <article className={`tech-card ${selected ? 'is-selected' : ''}`}>
    <div className="card-top"><div className={`tech-icon icon-${tech.id}`}>{iconMap[tech.id]}</div>{tech.badge && <span className={`badge badge-${tech.badgeTone}`}>{tech.badge}</span>}</div>
    <h3>{tech.name}</h3><p>{tech.description}</p>
    <div className="meta-row"><span>{tech.category}</span><span>{tech.level}</span><span className="rating">★ <b>{tech.rating}</b></span></div>
    <button className="add-btn" onClick={onAdd}>{selected ? 'Added to Stack' : 'Add to Stack'}</button>
  </article>
}
