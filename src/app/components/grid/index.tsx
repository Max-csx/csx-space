import { PropsWithChildren } from 'react';

type GridProps = {
    title: string;
    description: string;
    date: string;
    img: string;
};

export default function Grid({ children }: PropsWithChildren) {
    return <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">{children}</div>;
}
