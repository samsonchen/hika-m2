import { useRef } from 'react'
import { CATEGORIES } from '../data/menu-raw'
import type { Lang } from '../types/menu'

interface Props {
  activeCat: string
  setActiveCat: (id: string) => void
  lang: Lang
}

const GOLD     = '#D4A02A'
const INK      = '#1f2937'
const INK_SOFT = '#6b7280'
const PAPER    = '#ffffff'
const RULE     = '#e5e7eb'

export default function CategoryNav({ activeCat, setActiveCat, lang }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleClick = (id: string) => {
    setActiveCat(id)
    // scroll button into view within tab bar
    const btn = scrollRef.current?.querySelector(`[data-cat="${id}"]`) as HTMLElement | null
    btn?.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
  }

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: PAPER,
      borderBottom: `1px solid ${RULE}`,
    }}>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: 18,
          overflowX: 'auto',
          padding: '0 20px',
          scrollbarWidth: 'none',
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === activeCat
          return (
            <button
              key={cat.id}
              data-cat={cat.id}
              onClick={() => handleClick(cat.id)}
              style={{
                flex: '0 0 auto',
                border: 'none',
                cursor: 'pointer',
                padding: '14px 0 12px',
                background: 'transparent',
                color: isActive ? INK : INK_SOFT,
                fontSize: 14,
                fontWeight: isActive ? 700 : 500,
                whiteSpace: 'nowrap',
                borderBottom: isActive ? `3px solid ${GOLD}` : '3px solid transparent',
                marginBottom: -1,
                transition: 'color 160ms ease',
              }}
            >
              {cat.names[lang]}
            </button>
          )
        })}
      </div>
    </div>
  )
}
