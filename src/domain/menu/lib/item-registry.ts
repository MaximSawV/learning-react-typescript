export const menuItems: MenuItemDef[] = [
    {
        key: 1,
        label: 'Item 1',
    },
    {
        key: 2,
        label: 'Hat children',
        children: [
            {
                key: 1,
                label: 'Kind 1'
            },
            {
                key: 2,
                label: 'Kind 2'
            },
            {
                key: 3,
                label: 'Kind 3'
            },
        ]
    },
    {
        key: 3,
        label: 'Itemasdasdasdsdgdfgv 1',
    },
    {
        key: 4,
        label: 'Itemfghfghfghf 1',
        color: '#627cff',
    },
    {
        key: 5,
        label: 'Itefghfghfghm 1',
    },
    {
        key: 6,
        label: 'ghfghfgh 1',
    },
];

export type MenuItemDef =  {
    key: number;
    label: string;
    children?: MenuItemDef[];
    isOpen?: boolean;
    color?: string;
}