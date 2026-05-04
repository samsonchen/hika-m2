import { useRef, useState } from 'react'
import type { MenuItem } from './types/menu'
import { useLanguage } from './hooks/useLanguage'
import { CATEGORIES, ITEMS } from './data/menu-raw'
import { TAG_DEFS } from './data/tags'
import Header from './components/Header'
import LanguageSwitcher from './components/LanguageSwitcher'
import CategoryNav from './components/CategoryNav'
import MenuSection from './components/MenuSection'
import ItemDetailModal from './components/ItemDetailModal'

const GOLD      = '#D4A02A'
const INK       = '#1f2937'
const INK_SOFT  = '#6b7280'
const RULE_SOFT = '#f1f1ee'

function LegendBlock({ lang }: { lang: ReturnType<typeof useLanguage>['lang'] }) {
  return (
    <div style={{
      margin: '20px 16px 0',
      padding: '16px 20px',
      background: '#f9fafb',
      borderRadius: 12,
      border: `1px solid ${RULE_SOFT}`,
    }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 10 }}>
        標記說明
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
        {TAG_DEFS.map((tag) => (
          <div key={tag.id} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 12 }}>{tag.icon}</span>
            <span style={{ fontSize: 12, color: INK_SOFT }}>{tag.label[lang]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Footer({ lang }: { lang: ReturnType<typeof useLanguage>['lang'] }) {
  const MSG = {
    zh: '感謝您的光臨',
    en: 'Thank you for visiting',
    ja: 'ご来店ありがとうございます',
    ko: '방문해 주셔서 감사합니다',
  }
  return (
    <div style={{
      padding: '28px 20px 40px',
      textAlign: 'center',
      borderTop: `1px solid ${RULE_SOFT}`,
      marginTop: 24,
    }}>
      <div style={{ fontSize: 28, color: GOLD, fontWeight: 700 }}>嗨</div>
      <div style={{ fontSize: 13, color: INK_SOFT, marginTop: 6 }}>{MSG[lang]}</div>
    </div>
  )
}

export default function App() {
  const { lang, setLang } = useLanguage()
  const [activeCat, setActiveCat] = useState(CATEGORIES[0].id)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const scrollerRef = useRef<HTMLDivElement>(null)

  const handleSetCat = (id: string) => {
    setActiveCat(id)
    const el = sectionRefs.current[id]
    if (el && scrollerRef.current) {
      const top = el.offsetTop - 56
      scrollerRef.current.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div
      ref={scrollerRef}
      data-scroller
      style={{
        maxWidth: 480,
        margin: '0 auto',
        minHeight: '100dvh',
        background: '#ffffff',
        position: 'relative',
        overflowY: 'auto',
      }}
    >
      <Header lang={lang} />
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <CategoryNav activeCat={activeCat} setActiveCat={handleSetCat} lang={lang} />

      {CATEGORIES.map((cat) => {
        const items = ITEMS.filter((item) => item.cat === cat.id)
        if (!items.length) return null
        return (
          <MenuSection
            key={cat.id}
            cat={cat}
            items={items}
            lang={lang}
            sectionRef={(el) => { sectionRefs.current[cat.id] = el }}
            onItemClick={setSelectedItem}
          />
        )
      })}

      <LegendBlock lang={lang} />
      <Footer lang={lang} />

      <ItemDetailModal
        item={selectedItem}
        lang={lang}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  )
}
