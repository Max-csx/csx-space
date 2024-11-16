type ListProps = {
    title: string;
    description: string;
    date: string;
    img: string;
    id: string;
};
import Link from 'next/link';
export default function ListItem({ list }: { list?: ListProps[] }) {
    return (
        <>
            {list.map(({ title, description, date, img, id }) => (
                <Link href={`/tool/${id}`} key={title}>
                    <article
                        className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25 cursor-pointer"
                        key={title}
                    >
                        <img alt="" src={img} className="h-56 w-full object-cover" />

                        <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                            <time
                                dateTime={date}
                                className="block text-xs text-gray-500 dark:text-gray-400"
                            >
                                {date}
                            </time>

                            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                                {title}
                            </h3>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                                {description}
                            </p>
                        </div>
                    </article>
                </Link>
            ))}
        </>
    );
}
