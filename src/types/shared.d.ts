export type ActionType = "good" | "bad" | "diary";
export type Action = {
  id: string;
  type: ActionType;
  title: string;
  points?: number;
  description?: string;
};
