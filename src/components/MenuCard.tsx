import type { MenuItem, Lang } from '../types/menu'
import { UI_STRINGS } from '../data/site-info'
import TagBadge from './TagBadge'

interface Props {
  item: MenuItem
  lang: Lang
  onClick: (item: MenuItem) => void
}

const GOLD      = '#D4A02A'
const GOLD_SOFT = '#FBE9B8'
const INK       = '#1f2937'
const RULE      = '#e5e7eb'
const RULE_SOFT = '#f1f1ee'

function fmtPrice(value: MenuItem['price'][0]['value'], lang: Lang): string {
  if (value === 'market') return UI_STRINGS[lang].market
  if (value === 'ask')    return UI_STRINGS[lang].ask
  return `NT$${value}`
}

function buildPriceText(price: MenuItem['price'], lang: Lang): string {
  return price
    .map((p) =>
      p.label
        ? `${p.label[lang]} · ${fmtPrice(p.value, lang)}`
        : fmtPrice(p.value, lang)
    )
    .join('  ')
}

export default function MenuCard({ item, lang, onClick }: Props) {
  const isSpecial =
    item.price.length === 1 &&
    (item.price[0].value === 'market' || item.price[0].value === 'ask')

  const priceText = buildPriceText(item.price, lang)

  return (
    <button
      onClick={() => onClick(item)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        margin: '0 0 0 0',
        padding: 12,
        background: 'transparent',
        border: 'none',
        borderBottom: `1px solid ${RULE_SOFT}`,
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      {/* Emoji box */}
      <div style={{
        flex: '0 0 64px',
        width: 64,
        height: 64,
        borderRadius: 10,
        border: `1px solid ${RULE}`,
        background: `linear-gradient(135deg, ${GOLD_SOFT} 0%, ${RULE_SOFT} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        lineHeight: 1,
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {item.image ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }}
          />
        ) : (
          <span style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.05))' }}>
            {item.emoji}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 15,
          fontWeight: 700,
          color: INK,
          letterSpacing: '0.01em',
          lineHeight: 1.3,
        }}>
          {item.names[lang]}
        </div>

        {item.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 6 }}>
            {item.tags.map((t) => <TagBadge key={t} code={t} lang={lang} />)}
          </div>
        )}

        <div style={{
          marginTop: item.tags.length > 0 ? 6 : 4,
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 500,
          color: isSpecial ? GOLD : GOLD,
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '0.01em',
        }}>
          {priceText}
        </div>
      </div>
    </button>
  )
}
