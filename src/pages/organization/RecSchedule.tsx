import { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";

const candidates = ["Alice Johnson", "Bob Smith", "Carol Davis", "Dan Wilson", "Eva Brown"];

const RecSchedule = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="py-16 bg-polka min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-lg">
        <h1 className="text-4xl font-bold font-mono mb-2">Schedule Interview</h1>
        <p className="text-muted-foreground font-semibold mb-10">Pick a candidate and time slot</p>

        <div className="bg-background neo-border-thick neo-shadow-lg p-8 space-y-6">
          {/* Candidate */}
          <div>
            <label className="block font-bold text-sm mb-2 uppercase tracking-wider">
              <User className="w-4 h-4 inline mr-1" /> Candidate
            </label>
            <select
              value={selectedCandidate}
              onChange={(e) => setSelectedCandidate(e.target.value)}
              className="w-full px-4 py-3 neo-border bg-background font-semibold"
            >
              <option value="">Select candidate...</option>
              {candidates.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block font-bold text-sm mb-2 uppercase tracking-wider">
              <Calendar className="w-4 h-4 inline mr-1" /> Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 neo-border bg-background font-semibold"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block font-bold text-sm mb-2 uppercase tracking-wider">
              <Clock className="w-4 h-4 inline mr-1" /> Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 neo-border bg-background font-semibold"
            />
          </div>

          <button className="w-full py-3 bg-neo-purple text-neo-purple-foreground neo-border neo-shadow font-bold text-lg uppercase neo-hover">
            Schedule Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecSchedule;
