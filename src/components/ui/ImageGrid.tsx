
interface ImageGridItem {
    id : number;
    date: string;
    label?: string;
    img: string;
    title?: string;
    description?: string;
    tags?: string[];
    time?: string;
}

interface ImageGridProps {
    items: ImageGridItem[];
    gridClass?: string;
}

export default function ImageGrid({ items, gridClass = "" }: ImageGridProps) {
    return (
        <section className={`max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-2 ${gridClass}`}> 
            {items.map((item) => (
                <div key={item.id} className="relative flex flex-col">
                    <div className="relative">
                        <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-52 aspect-square object-cover"
                        />
                        {(() => {
                            const hasDate = Boolean(item.date);
                            const hasLabel = Boolean(item.label);
                            const hasTime = Boolean(item.time);

                            const leading = hasDate && hasLabel
                                ? `${item.date}.${item.label}`
                                : hasDate
                                    ? (item.date as string)
                                    : hasLabel
                                        ? (item.label as string)
                                        : null;

                            return (
                                <span className="absolute bottom-0 left-0 bg-primary-300 text-light text-base px-3 py-1 font-en z-10">
                                    <div className="flex items-center gap-3 min-w-[120px]">
                                        <div className="whitespace-nowrap">{leading}</div>
                                        {hasTime && <div className="ml-auto whitespace-nowrap">{item.time}</div>}
                                    </div>
                                </span>
                            );
                        })()}
                    </div>
                    {(item.title || item.description || item.tags) && (
                        <div className="mt-2">
                            {item.title && (
                                <h3 className="text-lg font-jp mb-1">{item.title}</h3>
                            )}
                            {item.description && (
                                <p className="text-sm text-gray-400 mb-1">{item.description}</p>
                            )}
                            {item.tags && (
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="text-primary-400 text-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}