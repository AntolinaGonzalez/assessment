export class User {
  id: number | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  status: "active" | "locked" | undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
