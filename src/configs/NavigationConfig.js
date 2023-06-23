import { 
  DashboardOutlined, 
  MailOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
  
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'

const componentsNavTree = [
  {
    key: 'dashboards',
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: 'Основные',
    icon: DashboardOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: 'dashboards-default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: 'Дашборд',
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'dashboards-catalog',
        path: `${APP_PREFIX_PATH}/dashboards/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'dashboards-catalog-goods',
            path: `${APP_PREFIX_PATH}/dashboards/catalog/goods`,
            title: 'Товары',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'dashboards-catalog-category',
            path: `${APP_PREFIX_PATH}/dashboards/catalog/category`,
            title: 'Категории',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'dashboards-catalog-collection',
            path: `${APP_PREFIX_PATH}/dashboards/catalog/collection`,
            title: 'Коллекции',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'dashboards-catalog-combo',
            path: `${APP_PREFIX_PATH}/dashboards/catalog/combo`,
            title: 'Комбо',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'dachboards-orders',
        path: `${APP_PREFIX_PATH}/dashboards/orders`,
        title: 'Заказы',
        icon: ShoppingOutlined,
        breadcrumb: true,
        submenu: [
        ]
      },
      {
        key: 'dachboards-clients',
        path: `${APP_PREFIX_PATH}/dashboards/clients`,
        title: 'Клиенты',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'dachboards-clients-line',
            path: `${APP_PREFIX_PATH}/dashboards/clients/line`,
            title: 'Список клиентов',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'dachboards-clients-groups',
            path: `${APP_PREFIX_PATH}/dashboards/clients/groups`,
            title: 'Группы клиентов',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'dashboards-banners',
        path: `${APP_PREFIX_PATH}/dashboards/banners`,
        title: 'Баннеры',
        icon: PictureOutlined,
        breadcrumb: true,
        submenu: [
        ]
      },
      {
        key: 'dashboards-promocode',
        path: `${APP_PREFIX_PATH}/dashboards/promocode`,
        title: 'Промокоды',
        icon: GiftOutlined,
        breadcrumb: true,
        submenu: [
        ]
      },
      {
        key: 'dashboards-offline',
        path: `${APP_PREFIX_PATH}/dashboards/offline`,
        title: 'Оффлайн точки',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'dashboards-offline-adres',
            path: `${APP_PREFIX_PATH}/dashboards/offline/adres`,
            title: 'Адреса',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'dashboards-offline-gps',
            path: `${APP_PREFIX_PATH}/dashboards/offline/gps`,
            title: 'Геозоны',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'dashboards-people',
        path: `${APP_PREFIX_PATH}/dashboards/people`,
        title: 'Сотрудники',
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: [
        ]
      },
      {
        key: 'dashboards-spam',
        path: `${APP_PREFIX_PATH}/dashboards/spam`,
        title: 'Рассылки',
        icon: MailOutlined,
        breadcrumb: true,
        submenu: [
        ]
      }
    ]
  }
]

const docsNavTree = [{
  key: 'setting',
  path: `${APP_PREFIX_PATH}/setting`,
  title: 'Настройки',
  icon: BookOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'setting-main',
      path: `${APP_PREFIX_PATH}/setting/main`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'setting-mobile',
      path: `${APP_PREFIX_PATH}/setting/mobile`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'setting-changelog',
      path: `${APP_PREFIX_PATH}/setting/changelog`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...componentsNavTree,
  ...docsNavTree
]

export default navigationConfig;
