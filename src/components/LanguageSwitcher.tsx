import { LANGS } from '../data/site-info'
import type { Lang } from '../types/menu'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
}

const GOLD = '#D4A02A'

export default function LanguageSwitcher({ lang, setLang }: Props) {
  return (
    <div style={{ padding: '0 20px 14px', display: 'flex', gap: 8 }}>
      {LANGS.map((L) => {
        const active = lang === L.code
        return (
          <button
            key={L.code}
            onClick={() => setLang(L.code)}
            aria-pressed={active}
            style={{
              border: 'none',
              cursor: 'pointer',
              padding: '6px 16px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: active ? 600 : 500,
              background: active ? GOLD : 'transparent',
              color: active ? '#fff' : '#6b7280',
              transition: 'all 160ms ease',
            }}
          >
            {L.label}
          </button>
        )
      })}
    </div>
  )
}
