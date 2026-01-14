import { useState } from "react";
import { ViewType } from "../../../../../type/general.types";
import { useGetUser } from "../../../../../service/apiHooks/useUserApi";

import TableUserData from "./TableUserData";
import CardUserData from "./CardUserData";
import SwitchUserView from "./SwitchUserView";

export default function UserManagement() {
  const [view, setView] = useState<ViewType>("table");

  const { data } = useGetUser();

  const users = data?.data ?? [];

  return (
    <div className="page space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Users</h1>
        <SwitchUserView
          view={view}
          changeView={(value: ViewType) => setView(value)}
        />
      </div>

      {view === "table" && <TableUserData users={users} />}

      {view === "card" && <CardUserData users={users} />}
    </div>
  );
}
