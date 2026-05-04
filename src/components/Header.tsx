import { SITE_INFO } from '../data/site-info'
import type { Lang } from '../types/menu'

interface Props {
  lang: Lang
}

const GOLD     = '#D4A02A'
const INK_SOFT = '#6b7280'

export default function Header({ lang }: Props) {
  return (
    <>
      {/* Hero image */}
      <div style={{
        width: '100%',
        height: 180,
        backgroundImage: SITE_INFO.heroImage
          ? `url(${SITE_INFO.heroImage})`
          : undefined,
        backgroundColor: '#e5e7eb',
        backgroundSize: 'cover',
        backgroundPosition: 'center 55%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: SITE_INFO.heroImage ? 0 : 64,
      }}>
        {!SITE_INFO.heroImage && SITE_INFO.heroEmoji}
      </div>

      {/* Store info block */}
      <div style={{ padding: '20px 20px 16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 10,
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontSize: 28,
            fontWeight: 700,
            color: GOLD,
            letterSpacing: '0.02em',
            lineHeight: 1.1,
          }}>
            {SITE_INFO.name[lang]}
          </span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 22,
            fontWeight: 600,
            color: GOLD,
            letterSpacing: '0.01em',
          }}>
            Hika
          </span>
        </div>

        <div style={{
          marginTop: 6,
          fontSize: 12.5,
          color: INK_SOFT,
          lineHeight: 1.6,
        }}>
          <div>{SITE_INFO.address[lang]}</div>
          <div>
            <a
              href={`tel:${SITE_INFO.phone}`}
              style={{ color: INK_SOFT, textDecoration: 'none' }}
            >
              TEL {SITE_INFO.phone}
            </a>
            {' · '}
            {SITE_INFO.hours[lang]}
          </div>
        </div>
      </div>
    </>
  )
}
