import { BodyRecordChart } from "@/components/charts/BodyRecordChart";
import { recordData } from "@/data/recordData";
import { bodyChartData } from "@/data/bodyChartData";
import ExerciseList from "@/components/ui/ExerciseList";
import { exerciseData } from "@/data/exerciseData";
import DiaryList from "@/components/ui/DiaryList";
import { diaryData } from "@/data/diaryData";


export default function RecordPage() {
  const SquareCard = ({ title, subtitle, img }: { title: string; subtitle?: string; img: string }) => (
    <div className="shrink-0">
      <div className="p-4 bg-primary-300">
        <div className="relative overflow-hidden">
          <img src={img} alt={title} className="w-full aspect-square object-cover grayscale" />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-primary-300 font-en tracking-wide">{title}</h3>
            {subtitle && (
              <span className="mt-4 bg-primary-400 text-white text-sm px-9 py-1">{subtitle}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1000px] mx-auto bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10">
        {recordData.map((t) => (
          <SquareCard key={t.title} title={t.title} subtitle={t.subtitle} img={t.img} />
        ))}
      </div>

      <div className="mt-10">
        <BodyRecordChart data={bodyChartData} date="2021.05.21" />
      </div>

      <div className="mt-10">
        <ExerciseList items={exerciseData} date="2021.05.21" />
      </div>

      <div className="mt-10">
        <DiaryList items={diaryData} />
      </div>

      <div className="flex justify-center my-10">
        <button className="[background:var(--button-primary-gradient)] hover:opacity-90 text-light font-jp text-xl px-16 py-4 rounded">
          コラムをもっと見る
        </button>
      </div>
    </div>


  );
}

