import {ReactNode} from 'react';
import AnalyticsPage from './../../content/analytics/components/analytics-page';

export const menuItems: MenuItemDef[] = [
    {
        key: 'login',
        label: 'Login',
        component: <div>Login</div>
    },
    {
        key: 'analytics',
        label: 'Analytics',
        component: <AnalyticsPage />
    },
    {
        key: 'transaction',
        label: 'Transactions',
        component: <div>Transactions</div>
    },
    {
        key: 'scheme',
        label: 'Scheme',
        component: <div>Scheme</div>
    },
    {
        key: 'calendar',
        label: 'Calendar',
        component: <div>Calendar</div>
    },
    {
        key: 'notes',
        label: 'Notes',
        component: <div>Notes</div>
    },
];

export type MenuItemDef =  {
    key: string;
    label: string;
    component: ReactNode;
    isOpen?: boolean;
}