import { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@mail.com", role: "User", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@mail.com", role: "User", status: "Active" },
  { id: 3, name: "Carol Davis", email: "carol@mail.com", role: "User", status: "Suspended" },
  { id: 4, name: "Dan Wilson", email: "dan@mail.com", role: "User", status: "Active" },
  { id: 5, name: "Eva Brown", email: "eva@mail.com", role: "User", status: "Active" },
];

const UserManagement = () => {
  const [users] = useState(mockUsers);

  return (
    <div className="py-16 bg-polka min-h-[80vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-mono mb-2">User Management</h1>
        <p className="text-muted-foreground font-semibold mb-10">Manage platform users</p>

        <div className="bg-background neo-border-thick neo-shadow-lg overflow-hidden dark:card-border-blue">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-[3px] border-border bg-muted">
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Name</th>
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Email</th>
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b-[3px] border-border last:border-b-0">
                    <td className="p-4 font-bold">{u.name}</td>
                    <td className="p-4 font-semibold text-muted-foreground text-sm">{u.email}</td>
                    <td className="p-4">
                      <Badge className={`neo-border font-bold ${u.status === "Active" ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"}`}>
                        {u.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        {[Eye, Edit, Trash2].map((Icon, i) => (
                          <button
                            key={i}
                            className={`w-8 h-8 neo-border neo-shadow neo-hover flex items-center justify-center ${
                              i === 2 ? "bg-destructive" : "bg-background"
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${i === 2 ? "text-destructive-foreground" : ""}`} />
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
