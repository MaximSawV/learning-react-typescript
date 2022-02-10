export const menuItems: MenuItemDef[] = [
    {
        key: 1,
        label: 'Login',
    },
    {
        key: 1,
        label: 'Analytics',
    },
    {
        key: 3,
        label: 'Transactions',
    },
    {
        key: 4,
        label: 'Scheme',
    },
    {
        key: 5,
        label: 'Calendar',
    },
    {
        key: 6,
        label: 'Notes',
    },
];

export type MenuItemDef =  {
    key: number;
    label: string;
    isOpen?: boolean;
}