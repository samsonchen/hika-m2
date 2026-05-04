export type Lang = 'zh' | 'en' | 'ja' | 'ko'

export type PriceValue = number | 'market' | 'ask'

export interface PriceEntry {
  label: Record<Lang, string> | null
  value: PriceValue
}

export interface TagDef {
  id: string
  icon: string
  label: Record<Lang, string>
  isRecommend?: boolean
}

export interface MenuItem {
  id: string
  cat: string
  emoji: string
  names: Record<Lang, string>
  price: PriceEntry[]
  tags: string[]
  image?: string | null
  description?: Record<Lang, string>
  note?: Record<Lang, string>
}

export interface Category {
  id: string
  emoji: string
  names: Record<Lang, string>
}

export interface SiteInfo {
  name: Record<Lang, string>
  tagline: Record<Lang, string>
  address: Record<Lang, string>
  phone: string
  heroImage?: string
  heroEmoji?: string
  hours: Record<Lang, string>
}

export interface UiStrings {
  menu: string
  market: string
  ask: string
  address: string
  phone: string
  hours: string
  legend: string
  footer: string
}
