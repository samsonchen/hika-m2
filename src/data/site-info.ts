import type { SiteInfo } from '../types/menu'

export const SITE_INFO: SiteInfo = {
  name: {
    zh: '嗨咖驛站',
    en: 'Hika Station',
    ja: 'ハイカー駅',
    ko: '하이카 역참',
  },
  tagline: {
    zh: '東岸海鮮料理',
    en: 'East Coast Seafood',
    ja: '東海岸シーフード',
    ko: '동해안 해산물 요리',
  },
  address: {
    zh: '花蓮縣豐濱鄉豐濱村永豐 14 號',
    en: 'No. 14, Yongfeng, Fengbin Village, Hualien',
    ja: '花蓮県豊浜郷豊浜村永豊 14 号',
    ko: '화롄현 펑빈향 펑빈촌 융펑 14호',
  },
  phone: '03-8791988',
  heroImage: 'images/hika.jpg',
  hours: {
    zh: '11:00 — 20:00 · 週三公休',
    en: '11:00 — 20:00 · Closed Wed',
    ja: '11:00 — 20:00 · 水曜定休',
    ko: '11:00 — 20:00 · 수요일 휴무',
  },
}

export const LANGS = [
  { code: 'zh' as const, label: '中文' },
  { code: 'en' as const, label: 'EN' },
  { code: 'ja' as const, label: '日本語' },
  { code: 'ko' as const, label: '한국어' },
]

export const UI_STRINGS = {
  zh: { menu: '菜單', market: '時價', ask: '請洽店家', address: '地址', phone: '電話', hours: '營業', legend: '標記說明', footer: '感謝您的光臨' },
  en: { menu: 'Menu', market: 'Market Price', ask: 'Ask staff', address: 'Address', phone: 'Phone', hours: 'Open', legend: 'Legend', footer: 'Thank you for visiting' },
  ja: { menu: 'メニュー', market: '時価', ask: 'スタッフへ', address: '住所', phone: '電話', hours: '営業', legend: 'マーク説明', footer: 'ご来店ありがとうございます' },
  ko: { menu: '메뉴', market: '시가', ask: '직원 문의', address: '주소', phone: '전화', hours: '영업', legend: '아이콘 안내', footer: '방문해 주셔서 감사합니다' },
}
