import Vue from "vue";
import {
  Container,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Main,
  Form,
  FormItem,
  Input,
  Col,
  Button,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Card,
  MessageBox,
} from "element-ui";
import { Message } from "element-ui";
Vue.use(Container);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Main);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Col);
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Card);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
