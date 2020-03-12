import Vue from 'vue'
import { Swipe, SwipeItem, Toast,Field,Switch,Cell,DatetimePicker,Picker,Button,Lazyload,Actionsheet,Popup,Checklist,Header,Badge} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Field.name, Field)
Vue.component(Switch.name, Switch)
Vue.component(Cell.name, Cell)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Picker.name, Picker)
Vue.component(Button.name, Button)
Vue.use(Lazyload)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Popup.name, Popup)
Vue.component(Checklist.name, Checklist)

Vue.component(Header.name, Header)
Vue.component(Badge.name, Badge)