import { useEffect } from 'react'
import type { MenuItem, Lang } from '../types/menu'
import { UI_STRINGS } from '../data/site-info'
import { useScrollLock } from '../hooks/useScrollLock'
import TagBadge from './TagBadge'

interface Props {
  item: MenuItem | null
  lang: Lang
  onClose: () => void
}

const GOLD      = '#D4A02A'
const GOLD_SOFT = '#FBE9B8'
const INK       = '#1f2937'
const INK_SOFT  = '#6b7280'
const RULE_SOFT = '#f1f1ee'

function fmtPrice(value: MenuItem['price'][0]['value'], lang: Lang): string {
  if (value === 'market') return UI_STRINGS[lang].market
  if (value === 'ask')    return UI_STRINGS[lang].ask
  return `NT$${value}`
}

export default function ItemDetailModal({ item, lang, onClose }: Props) {
  useScrollLock(item !== null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!item) return null

  return (
    /* Overlay */
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      {/* Sheet */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 480,
          background: '#ffffff',
          borderRadius: '20px 20px 0 0',
          padding: '0 0 env(safe-area-inset-bottom, 24px)',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
      >
        {/* Drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 8px' }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: '#e5e7eb' }} />
        </div>

        {/* Emoji / image */}
        <div style={{
          width: '100%',
          height: 180,
          background: `linear-gradient(135deg, ${GOLD_SOFT} 0%, ${RULE_SOFT} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: item.image ? 0 : 72,
          overflow: 'hidden',
        }}>
          {item.image ? (
            <img
              src={item.image}
              alt={item.names[lang]}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            item.emoji
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '20px 24px 32px' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: INK, lineHeight: 1.3 }}>
            {item.names[lang]}
          </div>

          {/* Tags */}
          {item.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
              {item.tags.map((t) => <TagBadge key={t} code={t} lang={lang} />)}
            </div>
          )}

          {/* Prices */}
          <div style={{ marginTop: 16 }}>
            {item.price.map((p, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: i < item.price.length - 1 ? `1px solid ${RULE_SOFT}` : 'none',
                }}
              >
                <span style={{ fontSize: 14, color: INK_SOFT }}>
                  {p.label ? p.label[lang] : ''}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: GOLD,
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {fmtPrice(p.value, lang)}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          {item.description && (
            <p style={{
              marginTop: 16,
              fontSize: 14,
              color: INK_SOFT,
              lineHeight: 1.7,
            }}>
              {item.description[lang]}
            </p>
          )}

          {/* Note */}
          {item.note && (
            <p style={{
              marginTop: 12,
              fontSize: 12.5,
              color: '#9ca3af',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}>
              ※ {item.note[lang]}
            </p>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              marginTop: 24,
              width: '100%',
              padding: '14px 0',
              borderRadius: 12,
              border: 'none',
              background: GOLD,
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.02em',
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
