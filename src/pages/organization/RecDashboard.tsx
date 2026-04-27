import { BarChart3, Users, Clock } from "lucide-react";

const RecDashboard = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-2">Rec Panel</h1>
        <p className="text-muted-foreground font-semibold mb-8 md:mb-10 lg:mb-12">Interview overview & scheduling</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
          {[
            { icon: BarChart3, label: "Interviews Today", val: "6", bg: "bg-neo-blue" },
            { icon: Users, label: "Pending Reviews", val: "14", bg: "bg-neo-yellow" },
            { icon: Clock, label: "Avg Duration", val: "25m", bg: "bg-neo-purple" },
          ].map((s, i) => (
            <div key={i} className={`neo-border-thick neo-shadow-lg p-6 neo-hover ${
              s.bg === 'bg-neo-blue' ? 'dark:card-border-blue' :
              s.bg === 'bg-neo-yellow' ? 'dark:card-border-yellow' :
              'dark:card-border-purple'
            }`}>
              <div className={`w-12 h-12 ${s.bg} neo-border flex items-center justify-center mb-4`}>
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-3xl font-bold font-mono">{s.val}</p>
              <p className="text-sm font-semibold text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6">
          <a href="/organization/rec/calendar" className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-primary text-primary-foreground neo-border neo-shadow font-bold uppercase neo-hover text-center">
            View Calendar
          </a>
          <a href="/organization/rec/schedule" className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-neo-purple text-neo-purple-foreground neo-border neo-shadow font-bold uppercase neo-hover text-center">
            Schedule Interview
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecDashboard;
