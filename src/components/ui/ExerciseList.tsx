export interface ExerciseItem {
    id?: string | number;
    title: string;
    kcal?: string | number;
    duration?: string;
}

interface ExerciseListProps {
    title?: string;
    date?: string;
    items: ExerciseItem[];
}

export default function ExerciseList({ date, items }: ExerciseListProps) {
    return (
        <div className="bg-dark-500 text-light p-6">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <span className="text-[15px] whitespace-nowrap">MY<br />EXERCISE</span>
                    <span className="ml-4 text-[22px]">{date}</span>
                </div>
            </div>

            <div className={`overflow-y-auto pr-4 h-72 custom-scrollbar`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {items.map((item) => (
                        <div key={item.id ?? `${item.title}-${item.kcal}`} className="flex items-center justify-between border-b border-gray-400">
                            <div className="text-left">
                                <div className="text-[15px] font-jp leading-tight">{item.title}</div>
                                {item.kcal !== undefined && (
                                    <div className="text-[15px] text-primary-300 mt-1">{item.kcal}kcal</div>
                                )}
                            </div>

                            <div className="text-right ml-4">
                                <div className="text-primary-300 font-en">{item.duration}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
