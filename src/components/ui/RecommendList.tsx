interface RecommendedCategory {
  id: number;
  title: string;
  subtitle: string;
}

interface RecommendListProps {
  items: RecommendedCategory[];
}

export default function RecommendList({ items }: RecommendListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-15">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-dark-700 text-center text-white w-[231px] h-36 flex flex-col justify-center items-center px-6"
        >
          <div className="text-primary-300 font-en text-2xl uppercase tracking-wider leading-tight">
            {item.title}
          </div>
          <div className="w-12 h-0.5 bg-white my-2 opacity-30" />
          <div className="text-white font-jp text-lg opacity-80">{item.subtitle}</div>
        </div>
      ))}
    </div>
  );
}
