// "use client";

// import { Home, BookOpen, Settings } from "lucide-react";

// export default function Sidebar() {
//   return (
// <aside className="hidden md:flex flex-col w-24 h-screen hover:w-56 transition-all duration-300 bg-zinc-900/60 rounded-3xl p-4 gap-4 overflow-hidden">   
//        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800 transition group">
//         <Home className="w-6 h-6 text-zinc-300 shrink-0" />
//         <span className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition">
//           Dashboard
//         </span>
//       </div>

//       <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800 transition group">
//         <BookOpen className="w-6 h-6 text-zinc-300 shrink-0" />
//         <span className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition">
//           Courses
//         </span>
//       </div>

//       <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800 transition group">
//         <Settings className="w-6 h-6 text-zinc-300 shrink-0" />
//         <span className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition">
//           Settings
//         </span>
//       </div>

//     </aside>
//   );
// }


"use client";

import { Home, BookOpen, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-row md:flex-col fixed md:static bottom-0 left-0 w-full md:w-24 h-14 md:h-screen hover:w-56 transition-all duration-300 bg-zinc-900/60 rounded-3xl p-4 gap-4 overflow-hidden justify-around md:justify-start">
      
      <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800 transition group">
        <Home className="w-6 h-6 text-zinc-300 shrink-0" />
        <span className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition">
          Dashboard
        </span>
      </div>

      <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800 transition group">
        <BookOpen className="w-6 h-6 text-zinc-300 shrink-0" />
        <span className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition">
          Courses
        </span>
      </div>

      <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800 transition group">
        <Settings className="w-6 h-6 text-zinc-300 shrink-0" />
        <span className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition">
          Settings
        </span>
      </div>

    </aside>
  );
}