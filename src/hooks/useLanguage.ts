import { useState } from 'react'
import type { Lang } from '../types/menu'

const STORAGE_KEY = 'hika-lang'

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'zh' || stored === 'en' || stored === 'ja' || stored === 'ko') {
      return stored
    }
  } catch {
    // ignore
  }
  return 'zh'
}

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // ignore
    }
  }

  return { lang, setLang }
}
