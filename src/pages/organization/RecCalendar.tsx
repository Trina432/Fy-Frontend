import { ChevronLeft, ChevronRight } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const slots = [
  { day: 1, time: "10:00 AM", candidate: "Alice Johnson" },
  { day: 2, time: "2:00 PM", candidate: "Bob Smith" },
  { day: 3, time: "11:00 AM", candidate: "Carol Davis" },
  { day: 4, time: "3:00 PM", candidate: "Dan Wilson" },
  { day: 5, time: "9:00 AM", candidate: "Eva Brown" },
];

const RecCalendar = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold font-mono">Calendar</h1>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 neo-border neo-shadow neo-hover flex items-center justify-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="px-4 py-2 neo-border font-bold">April 2026</span>
            <button className="w-10 h-10 neo-border neo-shadow neo-hover flex items-center justify-center">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="neo-border-thick neo-shadow-lg overflow-hidden">
          {/* Day headers */}
          <div className="grid grid-cols-7 border-b-[3px] border-border bg-muted">
            {days.map((d) => (
              <div key={d} className="p-3 text-center font-bold text-xs uppercase border-r-[3px] border-border last:border-r-0">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          {[0, 1, 2, 3].map((week) => (
            <div key={week} className="grid grid-cols-7 border-b-[3px] border-border last:border-b-0">
              {days.map((_, dayIdx) => {
                const dayNum = week * 7 + dayIdx + 1;
                const slot = slots.find((s) => s.day === dayIdx + 1 && week === 0);
                return (
                  <div
                    key={dayIdx}
                    className="p-2 min-h-[100px] border-r-[3px] border-border last:border-r-0"
                  >
                    {dayNum <= 30 && (
                      <>
                        <p className="font-bold text-sm mb-1">{dayNum}</p>
                        {slot && (
                          <div className="bg-neo-purple text-neo-purple-foreground neo-border p-1.5 text-xs font-bold">
                            <p>{slot.time}</p>
                            <p className="truncate">{slot.candidate}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecCalendar;
