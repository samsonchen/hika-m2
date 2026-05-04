import type { TagDef } from '../types/menu'

export const TAG_DEFS: TagDef[] = [
  {
    id: 'R',
    icon: '⭐',
    label: { zh: '本店推薦', en: 'Recommended', ja: 'おすすめ', ko: '추천' },
    isRecommend: true,
  },
  {
    id: '1',
    icon: '🌶️',
    label: { zh: '小辣', en: 'Mild Spicy', ja: '少し辛い', ko: '약간 매운' },
  },
  {
    id: '2',
    icon: '🌶️🌶️',
    label: { zh: '中辣', en: 'Medium Spicy', ja: '中辛', ko: '보통 매운' },
  },
  {
    id: '3',
    icon: '🔥',
    label: { zh: '大辣', en: 'Very Spicy', ja: '激辛', ko: '매우 매운' },
  },
  {
    id: 'P',
    icon: '🐷',
    label: { zh: '含豬肉', en: 'Contains Pork', ja: '豚肉入り', ko: '돼지고기 포함' },
  },
  {
    id: 'B',
    icon: '🐂',
    label: { zh: '含牛肉', en: 'Contains Beef', ja: '牛肉入り', ko: '소고기 포함' },
  },
  {
    id: 'V',
    icon: '🥬',
    label: { zh: '素食', en: 'Vegetarian', ja: 'ベジタリアン', ko: '채식' },
  },
]

export const TAG_MAP = Object.fromEntries(TAG_DEFS.map((t) => [t.id, t]))
