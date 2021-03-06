import {ReactNode} from 'react';
import AnalyticsPage from './../../content/analytics/components/analytics-page';
import RegistrationPage from './../../../registration-field';
import RepositoryPage from './../../content/repositories/components/repository-table';

export const menuItems: MenuItemDef[] = [
    {
        key: 'login',
        label: 'Sign in',
        component: <div>Login</div>,
    },
    {
        key: 'registration',
        label: 'Sign up',
        component: <RegistrationPage/>,
    },
    {
        key: 'repository',
        label: 'Repositories',
        component: <RepositoryPage />,
    },
    {
        key: 'analytics',
        label: 'Analytics',
        component: <AnalyticsPage />,
    },
    {
        key: 'transaction',
        label: 'Transactions',
        component: <div>Transactions</div>,
    },
    {
        key: 'scheme',
        label: 'Scheme',
        component: <div>Scheme</div>,
    },
    {
        key: 'calendar',
        label: 'Calendar',
        component: <div>Calendar</div>,
    },
    {
        key: 'notes',
        label: 'Notes',
        component: <div>Notes</div>,
    },
];

export type MenuItemDef =  {
    key: string;
    label: string;
    component: ReactNode;
    isOpen?: boolean;
}