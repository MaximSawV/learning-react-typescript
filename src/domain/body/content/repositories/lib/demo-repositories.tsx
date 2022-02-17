import {ReactNode} from 'react';

export const demoRepositories: RepositoryDef[] = [
    {
        key: "first",
        label: "name of repository",
        wealth: 1000,
    },

    {
        key: "second",
        label: "name of repository",
        wealth: 300,
    },

    {
        key: "third",
        label: "name of repository",
        wealth: 3214265,
    },

    {
        key: "fourth",
        label: "name of repository",
        wealth: 7,
    },

    {
        key: "fifth",
        label: "name of repository",
        wealth: 1000.1,
    },

];

export type RepositoryDef =  {
    key: string;
    label: string;
    wealth: number;

}