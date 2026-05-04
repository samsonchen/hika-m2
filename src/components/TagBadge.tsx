import { TAG_MAP } from '../data/tags'
import type { Lang } from '../types/menu'

interface Props {
  code: string
  lang: Lang
}

const GOLD_TEXT = '#9C7314'
const GOLD_BG   = '#FFF6DD'

export default function TagBadge({ code, lang }: Props) {
  const tag = TAG_MAP[code]
  if (!tag) return null

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 10.5,
      padding: '2px 8px',
      borderRadius: 4,
      background: tag.isRecommend ? GOLD_BG : '#f3f4f6',
      color: tag.isRecommend ? GOLD_TEXT : '#6b7280',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ fontSize: 9 }}>{tag.icon}</span>
      <span>{tag.label[lang]}</span>
    </span>
  )
}
