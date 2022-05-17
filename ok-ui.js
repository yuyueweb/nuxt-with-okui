import Vue from 'vue'
import okUI from '@okay/okui';
import locale from '@okay/okui/lib/locale/lang/zh-cn'

export default () => {
  Vue.use(okUI, { locale })
}
