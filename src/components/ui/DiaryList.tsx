export interface DiaryItem {
    id: string | number;
    date: string;
    time: string;
    content: string;
}

interface DiaryListProps {
    title?: string;
    items: DiaryItem[];
}

export default function DiaryList({ title = "MY DIARY", items }: DiaryListProps) {
    return (
        <div className="text-dark-500">
            <h2 className="text-2xl font-en mb-2">{title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border-2 border-gray-500 p-4 text-gray-700 aspect-square justify-between"
                    >
                        <div className="text-lg font-medium">
                            {item.date} <br />
                            <span className="text-base">{item.time}</span>
                        </div>
                        <p className="mt-2 font-jp text-sm leading-relaxed line-clamp-6">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
