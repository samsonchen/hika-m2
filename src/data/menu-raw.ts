// 店家編輯菜單（依此格式更新品項即可）
// price 格式：single(金額) | sized(大,小) | market() | ask()

import type { MenuItem, Category, PriceEntry } from '../types/menu'

const single = (v: number): PriceEntry[] => [{ label: null, value: v }]
const market = (): PriceEntry[] => [{ label: null, value: 'market' }]
const sized = (big: number, small: number): PriceEntry[] => [
  { label: { zh: '大', en: 'Large', ja: '大', ko: '대' }, value: big },
  { label: { zh: '小', en: 'Small', ja: '小', ko: '소' }, value: small },
]
const ask = (): PriceEntry[] => [{ label: null, value: 'ask' }]

export const CATEGORIES: Category[] = [
  { id: 'seafood', emoji: '🐟', names: { zh: '海鮮類', en: 'Seafood',      ja: '海鮮料理',    ko: '해산물' } },
  { id: 'salt',    emoji: '🧂', names: { zh: '鹽焗類', en: 'Salt-Baked',   ja: '塩釜焼き',    ko: '소금구이' } },
  { id: 'soup',    emoji: '🍲', names: { zh: '湯品',   en: 'Soups',        ja: 'スープ',      ko: '국물요리' } },
  { id: 'veg',     emoji: '🥬', names: { zh: '蔬菜類', en: 'Vegetables',   ja: '野菜料理',    ko: '채소요리' } },
  { id: 'rice',    emoji: '🍱', names: { zh: '配飯菜', en: 'Rice Sides',   ja: 'ご飯のお供',  ko: '밥반찬' } },
  { id: 'fried',   emoji: '🍤', names: { zh: '炸物',   en: 'Fried',        ja: '揚げ物',      ko: '튀김' } },
  { id: 'drink',   emoji: '🥤', names: { zh: '飲/冰品', en: 'Drinks & Ice', ja: 'ドリンク・氷', ko: '음료/빙수' } },
  { id: 'staple',  emoji: '🍚', names: { zh: '主食',   en: 'Staples',      ja: '主食',        ko: '주식' } },
]

export const ITEMS: MenuItem[] = [
  // ─── 海鮮類 ───
  {
    id: 'sea-001', cat: 'seafood', emoji: '🍣',
    names: { zh: '東岸綜合生魚片', en: 'East Coast Sashimi Platter', ja: '東海岸刺身盛り合わせ', ko: '동해안 모듬 회' },
    price: sized(650, 300), tags: ['R'],
  },
  {
    id: 'sea-002', cat: 'seafood', emoji: '🦐',
    names: { zh: '川燙蝦', en: 'Poached Shrimp', ja: '茹で海老', ko: '데친 새우' },
    price: [
      { label: { zh: '大 (15支)', en: 'Large (15)', ja: '大 (15尾)', ko: '대 (15마리)' }, value: 450 },
      { label: { zh: '小 (7支)',  en: 'Small (7)',  ja: '小 (7尾)',  ko: '소 (7마리)' },  value: 250 },
    ],
    tags: [],
  },
  {
    id: 'sea-003', cat: 'seafood', emoji: '🦑',
    names: { zh: '川燙透抽', en: 'Poached Squid', ja: '茹でイカ', ko: '데친 오징어' },
    price: single(380), tags: [],
  },
  {
    id: 'sea-004', cat: 'seafood', emoji: '🐟',
    names: { zh: '塔香旗魚腹', en: 'Basil Marlin Belly', ja: 'バジル風カジキ腹身', ko: '바질 청새치 뱃살' },
    price: single(380), tags: [],
  },
  {
    id: 'sea-005', cat: 'seafood', emoji: '🥗',
    names: { zh: '魚蛋沙拉', en: 'Fish Roe Salad', ja: '魚卵サラダ', ko: '생선알 샐러드' },
    price: single(300), tags: [],
  },
  {
    id: 'sea-006', cat: 'seafood', emoji: '🐚',
    names: { zh: '塔香蛤蜊', en: 'Basil Clams', ja: 'バジル風アサリ', ko: '바질 조개' },
    price: single(280), tags: [],
  },
  {
    id: 'sea-007', cat: 'seafood', emoji: '🐠',
    names: { zh: '醬爆／宮保 魚肚', en: 'Soy-Glazed / Kung Pao Fish Belly', ja: '醤油炒め／宮保魚腹', ko: '간장 / 궁보 생선 뱃살' },
    price: single(280), tags: ['1'],
  },
  {
    id: 'sea-008', cat: 'seafood', emoji: '🐡',
    names: { zh: '鮮魚料理', en: 'Whole Fresh Fish', ja: '鮮魚料理', ko: '생선 요리' },
    price: market(), tags: ['R'],
  },

  // ─── 鹽焗類 ───
  {
    id: 'salt-001', cat: 'salt', emoji: '🦑',
    names: { zh: '鹽焗透抽', en: 'Salt-Baked Squid', ja: '塩釜イカ', ko: '소금구이 오징어' },
    price: single(450), tags: ['R'],
  },
  {
    id: 'salt-002', cat: 'salt', emoji: '🦐',
    names: { zh: '鹽焗白蝦', en: 'Salt-Baked White Shrimp', ja: '塩釜白海老', ko: '소금구이 흰새우' },
    price: single(450), tags: [],
  },

  // ─── 湯品 ───
  {
    id: 'soup-001', cat: 'soup', emoji: '🍲',
    names: { zh: '東岸綜合鮮魚湯', en: 'East Coast Mixed Fish Soup', ja: '東海岸海鮮スープ', ko: '동해안 모듬 생선탕' },
    price: sized(380, 280), tags: ['R'],
  },

  // ─── 蔬菜類 ───
  {
    id: 'veg-001', cat: 'veg', emoji: '🥗',
    names: { zh: '野菜拼盤 (冷)', en: 'Wild Greens Platter (Cold)', ja: '山菜盛り合わせ (冷)', ko: '산나물 모둠 (차가움)' },
    price: single(280), tags: ['V'],
  },
  {
    id: 'veg-002', cat: 'veg', emoji: '🎋',
    names: { zh: '涼筍沙拉 (冷)', en: 'Cold Bamboo Shoot Salad', ja: '冷たい筍サラダ', ko: '차가운 죽순 샐러드' },
    price: single(150), tags: ['V'],
  },
  {
    id: 'veg-003', cat: 'veg', emoji: '🥬',
    names: { zh: '季節時蔬', en: 'Seasonal Greens', ja: '季節野菜', ko: '계절 채소' },
    price: market(), tags: ['V'],
  },

  // ─── 配飯菜 ───
  {
    id: 'rice-001', cat: 'rice', emoji: '🥩',
    names: { zh: '野筍五花肉', en: 'Bamboo Shoots & Pork Belly', ja: '筍と豚バラ', ko: '죽순 삼겹살' },
    price: single(260), tags: ['P'],
  },
  {
    id: 'rice-002', cat: 'rice', emoji: '🥓',
    names: { zh: '嗨咖鹹豬肉', en: 'Hika Salt-Cured Pork', ja: 'ハイカー塩漬け豚', ko: '하이카 소금 절임 돼지고기' },
    price: single(220), tags: ['R', 'P'],
  },
  {
    id: 'rice-003', cat: 'rice', emoji: '🍖',
    names: { zh: '醬燒山豬肉', en: 'Soy-Braised Wild Boar', ja: '醤油煮込み猪肉', ko: '간장 멧돼지 조림' },
    price: single(280), tags: ['P'],
  },

  // ─── 炸物 ───
  {
    id: 'fried-001', cat: 'fried', emoji: '🦪',
    names: { zh: '蚵仔酥', en: 'Crispy Fried Oysters', ja: '牡蠣の唐揚げ', ko: '바삭한 굴튀김' },
    price: single(300), tags: [],
  },
  {
    id: 'fried-002', cat: 'fried', emoji: '🍤',
    names: { zh: '手工花枝蝦排', en: 'Handmade Squid & Shrimp Cake', ja: '手作りイカ海老カツ', ko: '수제 오징어 새우 커틀릿' },
    price: single(350), tags: ['R'],
  },
  {
    id: 'fried-003', cat: 'fried', emoji: '🦑',
    names: { zh: '椒鹽小卷', en: 'Salt & Pepper Baby Squid', ja: '塩胡椒イイダコ', ko: '소금 후추 꼴뚜기' },
    price: single(380), tags: [],
  },

  // ─── 飲/冰品 ───
  {
    id: 'drink-001', cat: 'drink', emoji: '🥤',
    names: { zh: '飲料', en: 'Beverages', ja: 'ドリンク', ko: '음료' },
    price: ask(), tags: [],
  },
  {
    id: 'drink-002', cat: 'drink', emoji: '🍧',
    names: { zh: '冰品', en: 'Ice Desserts', ja: '氷菓', ko: '빙수' },
    price: ask(), tags: [],
  },

  // ─── 主食 ───
  {
    id: 'staple-001', cat: 'staple', emoji: '🍚',
    names: { zh: '白飯 (花東米)', en: 'Steamed Rice (Hualien-Taitung)', ja: '白ご飯 (花東米)', ko: '흰쌀밥 (화둥미)' },
    price: [{ label: { zh: '1 碗', en: '1 bowl', ja: '1 杯', ko: '1 그릇' }, value: 20 }],
    tags: [],
  },
]
