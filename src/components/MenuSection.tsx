import type { Category, MenuItem, Lang } from '../types/menu'
import MenuCard from './MenuCard'

interface Props {
  cat: Category
  items: MenuItem[]
  lang: Lang
  sectionRef: (el: HTMLDivElement | null) => void
  onItemClick: (item: MenuItem) => void
}

const GOLD      = '#D4A02A'
const INK       = '#1f2937'
const INK_LIGHT = '#9ca3af'
const RULE_SOFT = '#f1f1ee'

export default function MenuSection({ cat, items, lang, sectionRef, onItemClick }: Props) {
  return (
    <div ref={sectionRef}>
      {/* Section header */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        padding: '20px 20px 12px',
      }}>
        <span style={{ fontSize: 16, color: GOLD, transform: 'translateY(2px)', display: 'inline-block' }}>★</span>
        <span style={{
          fontSize: 17,
          fontWeight: 700,
          color: INK,
          letterSpacing: '0.02em',
        }}>
          {cat.names[lang]}
        </span>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: INK_LIGHT,
          fontWeight: 500,
          marginLeft: 4,
        }}>
          {items.length}
        </span>
      </div>

      {/* Items */}
      <div style={{
        margin: '0 16px',
        background: '#ffffff',
        border: `1px solid ${RULE_SOFT}`,
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(15,23,42,0.03)',
      }}>
        {items.map((item) => (
          <MenuCard key={item.id} item={item} lang={lang} onClick={onItemClick} />
        ))}
      </div>
    </div>
  )
}
