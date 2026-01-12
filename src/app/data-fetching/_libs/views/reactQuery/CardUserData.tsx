import { User } from "../../../../../type/user.types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

const CardUserData = ({ users }: { users: User[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {users.map((user) => (
        <Card key={user.email} className="user-card">
          <CardHeader className="space-y-1">
            <p className="font-medium truncate">{user.email}</p>
            <Badge variant={user.role === "admin" ? "default" : "secondary"}>
              {user.role}
            </Badge>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Joined {dayjs(user.createdAt).format("DD MMM YYYY")}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardUserData;
