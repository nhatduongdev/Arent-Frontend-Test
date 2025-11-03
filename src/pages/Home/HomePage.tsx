import { BodyRecordChart } from "@/components/charts/BodyRecordChart";
import { categories, records } from "@/data/homeData";
import d01 from '@/assets/images/home/d01.jpg';
import { useState } from "react";
import ProgressCircle from "@/components/ui/ProgressCircle";
import HexagonButton from "@/components/ui/HexagonButton";
import ImageGrid from "@/components/ui/ImageGrid";
import { bodyChartData } from "@/data/bodyChartData";


export default function HomePage() {
    const [progress, setProgress] = useState(75);
    return (
        <div className="min-h-screen bg-white">
            <section className="grid grid-cols-1 md:grid-cols-12">
                <div className="relative md:col-span-5">
                    <img
                        src={d01}
                        alt="Today's Meal"
                        className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ProgressCircle
                            progress={progress}
                            date="05/21"
                            className="w-40 sm:w-44 md:w-52"
                        />
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="md:h-96">
                        <BodyRecordChart
                            data={bodyChartData}
                            showFilters={false}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 py-6 sm:py-8 lg:py-10">
                {categories.map(({ label, icon }) => (
                    <HexagonButton
                        key={label}
                        label={label}
                        icon={icon}
                    />
                ))}
            </section>

            <ImageGrid items={records} />

            <div className="flex justify-center my-10">
                <button className="[background:var(--button-primary-gradient)] hover:opacity-90 text-light font-jp text-xl px-16 py-4 rounded">
                    記録をもっと見る
                </button>
            </div>

        </div>
    );
}
