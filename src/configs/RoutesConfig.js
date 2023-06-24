import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
    {
        key: 'dashboards.catalog',
        path: `${APP_PREFIX_PATH}/dashboards/catalog`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog')),
    },
    {
        key: 'dashboards.catalog.goods',
        path: `${APP_PREFIX_PATH}/dashboards/catalog/goods`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog/goods')),
    },
    {
        key: 'dashboards.catalog.category',
        path: `${APP_PREFIX_PATH}/dashboards/catalog/category`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog/category')),
    },
    {
        key: 'dashboards.catalog.collection',
        path: `${APP_PREFIX_PATH}/dashboards/catalog/collection`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog/collection')),
    },
    {
        key: 'dashboards.catalog.combo',
        path: `${APP_PREFIX_PATH}/dashboards/catalog/combo`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog/combo')),
    },
    {
        key: 'dashboards.orders',
        path: `${APP_PREFIX_PATH}/dashboards/orders`,
        component: React.lazy(() => import('views/app-views/dashboards/orders')),
    },
    {
        key: 'dashboards.orders.clients',
        path: `${APP_PREFIX_PATH}/dashboards/clients`,
        component: React.lazy(() => import('views/app-views/dashboards/clients')),
    },
    {
        key: 'dashboards.orders.line',
        path: `${APP_PREFIX_PATH}/dashboards/clients/line`,
        component: React.lazy(() => import('views/app-views/dashboards/clients/line')),
    },
    {
        key: 'dashboards.orders.line.edit',
        path: `${APP_PREFIX_PATH}/dashboards/clients/line/edit-user/*`,
        component: React.lazy(() => import('views/app-views/dashboards/clients/line/edit-user')),
    },
    {
        key: 'dashboards.orders.groups',
        path: `${APP_PREFIX_PATH}/dashboards/clients/groups`,
        component: React.lazy(() => import('views/app-views/dashboards/clients/groups')),
    },
    {
        key: 'dashboards.banners',
        path: `${APP_PREFIX_PATH}/dashboards/banners`,
        component: React.lazy(() => import('views/app-views/dashboards/banners')),
    },
    {
        key: 'dashboards.promocode',
        path: `${APP_PREFIX_PATH}/dashboards/promocode`,
        component: React.lazy(() => import('views/app-views/dashboards/promocode')),
    },
    {
        key: 'dashboards.offline',
        path: `${APP_PREFIX_PATH}/dashboards/offline`,
        component: React.lazy(() => import('views/app-views/dashboards/offline')),
    },
    {
        key: 'dashboards.offline.adres',
        path: `${APP_PREFIX_PATH}/dashboards/offline/adres`,
        component: React.lazy(() => import('views/app-views/dashboards/offline/adres')),
    },
    {
        key: 'dashboards.offline.gps',
        path: `${APP_PREFIX_PATH}/dashboards/offline/gps`,
        component: React.lazy(() => import('views/app-views/dashboards/offline/gps')),
    },
    {
        key: 'dashboards.people',
        path: `${APP_PREFIX_PATH}/dashboards/people/`,
        component: React.lazy(() => import('views/app-views/dashboards/people/')),
    },
    {
        key: 'dashboards.spam',
        path: `${APP_PREFIX_PATH}/dashboards/spam/`,
        component: React.lazy(() => import('views/app-views/dashboards/spam/')),
    },
    {
        key: 'setting',
        path: `${APP_PREFIX_PATH}/setting/`,
        component: React.lazy(() => import('views/app-views/setting/')),
    },
    {
        key: 'setting.main',
        path: `${APP_PREFIX_PATH}/setting/main/`,
        component: React.lazy(() => import('views/app-views/setting/main')),
    },
    {
        key: 'setting.mobile',
        path: `${APP_PREFIX_PATH}/setting/mobile/`,
        component: React.lazy(() => import('views/app-views/setting/mobile')),
    },
    {
        key: 'setting.changelog',
        path: `${APP_PREFIX_PATH}/setting/changelog/`,
        component: React.lazy(() => import('views/app-views/setting/changelog')),
    },
    
]