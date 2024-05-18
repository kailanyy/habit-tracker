export type ActionType = "good" | "bad" | "diary";
export type Action = {
  id: string;
  type: ActionType;
  title: string;
  points?: number;
  description?: string;
};
export type Tag = {
  id: number;
  label: string;
  value: string;
};
export type initialTags = [
  {
    activeTag: false;
    id: 1;
    title: "All";
    color: true;
  },
  {
    activeTag: false;
    id: 2;
    title: "Study";
    color: true;
  },
  {
    activeTag: false;
    id: 3;
    title: "Work";
    color: true;
  },
];

// TODO Revisar tipo
export type Task = {
  id: number;
  title: string;
  done: boolean;
  tag: any;
};
