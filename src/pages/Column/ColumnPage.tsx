import ImageGrid from "@/components/ui/ImageGrid";
import RecommendList from "@/components/ui/RecommendList";
import { recommendedCategories } from "@/data/columnData";
import { recordPanel } from "@/data/recordData";


export default function ColumnPage() {
  return (
    <div className="min-h-screen bg-white">
      <RecommendList items={recommendedCategories} />
      <ImageGrid items={recordPanel} gridClass="mt-20 gap-y-6 gap-x-2" />

      <div className="flex justify-center my-10">
        <button className="[background:var(--button-primary-gradient)] hover:opacity-90 text-light font-jp text-xl px-16 py-4 rounded">
          コラムをもっと見る
        </button>
      </div>
    </div>
  );
}
