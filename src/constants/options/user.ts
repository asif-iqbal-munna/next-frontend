import { Option } from "../../type/general.types";
import { UserRole } from "../../type/user.types";

export const USER_ROLE_OPTIONS: Option<UserRole>[] = [
  { label: "User", value: UserRole.USER },
  { label: "Admin", value: UserRole.ADMIN },
];
