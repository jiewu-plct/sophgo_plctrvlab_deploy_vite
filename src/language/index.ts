import { createI18n } from 'vue-i18n'
import zh_CN from './zh_CN.ts'
import en_US from './en_US.ts'
import ru_RU from './ru_RU.ts'
import ja_JP from './ja_JP.ts'
import ko_KR from './ko_KR.ts'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem('lang') || 'zh_CN',
    fallbackLocale: 'en_US',
    messages: {
      zh_CN,
      en_US,
      ru_RU,
      ja_JP,
      ko_KR
    }
})

export default i18n;