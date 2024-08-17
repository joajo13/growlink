import { GrGrow } from "react-icons/gr";

export default function WeekPage ({ params }) {
    const { weekNumber } = params;

    return (
        <div>
            <section className="px-4 py-2 md:px-8">
                <div className="flex items-center py-2">
                    <GrGrow className="text-app-green mr-1" size={22} />
                    <h1 className="text-app-green font-semibold text-xl">Week {weekNumber}</h1>
                </div>
            </section>
        </div>
    );
};

