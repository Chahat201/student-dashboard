import CourseCard from "./components/CourseCard";
import { supabase } from "./lib/supabase";
import BentoGrid from "./components/BentoGrid";
import HeroTile from "./components/HeroTile";
import ActivityTile from "./components/ActivityTile";
import Sidebar from "./components/Sidebar";

              const container = {
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                staggerChildren: 0.12,
            },
          },
        };
        const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
        },
      };

export default async function Home() {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="p-10 text-white">
        <h1>Error loading courses</h1>
      </main>
    );
  }
return (
  <main className="min-h-screen bg-zinc-950 text-white p-6">

    <div className="flex gap-6 min-h-screen">

      {/* Sidebar (LEFT) */}
      <Sidebar />

         {/* Main Content (RIGHT) */}
  <div className="flex-1 pb-16 md:pb-0">
          
        {/* Hero Tile */}
        <HeroTile />

             {/* Bento Grid */}
        <BentoGrid>
          <ActivityTile />

          {data?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </BentoGrid>

      </div>

    </div>

  </main>
);
}