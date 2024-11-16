import { SoftwareIcon, StudyIcon, HomeIcon } from '@/app/icons';

type MenuItem = {
    label: string;
    icon: React.ReactNode;
    href: string;
    key: string;
};

export const menuList: MenuItem[] = [
    {
        label: '首页',
        icon: <HomeIcon className="w-6 h-6" viewBox="0 0 24 24" />,
        href: '/',
        key: 'home',
    },
    {
        label: '日常工具',
        icon: <SoftwareIcon className="w-6 h-6" viewBox="0 0 24 24" />,
        href: '/tool',
        key: 'tool',
    },
    {
        label: '学习',
        icon: <StudyIcon className="w-6 h-6" viewBox="0 0 24 24" />,
        href: '/study',
        key: 'study',
    },
];

export const toolList = [
    {
        title: '工具1',
        description: '工具1描述',
        date: '2024-01-01',
        img: 'https://via.placeholder.com/150',
    },
    {
        title: '工具2',
        description: '工具2描述',
        date: '2024-01-01',
        img: 'https://via.placeholder.com/150',
    },
    {
        title: '工具3',
        description: '工具3描述',
        date: '2024-01-01',
        img: 'https://via.placeholder.com/150',
    },
    {
        title: '工具4',
        description: '工具4描述',
        date: '2024-01-01',
        img: 'https://via.placeholder.com/150',
    },
    {
        title: '工具5',
        description: '工具5描述',
        date: '2024-01-01',
        img: 'https://via.placeholder.com/150',
    },
];
