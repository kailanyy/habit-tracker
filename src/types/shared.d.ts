export type ActionType = "good" | "bad" | "diary";
export type Action = {
  id: string;
  type: ActionType;
  title: string;
  points?: number;
  description?: string;
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

export type initialTasks = [
  {
    id: 0;
    title: "Task 1";
    done: false;
    tag: false;
  },
  {
    id: 1;
    title: "Task Study";
    done: false;
    tag: "Study";
  },
  {
    id: 2;
    title: "Task Work";
    done: false;
    tag: "Work";
  },
  {
    id: 3;
    title: "Task 4";
    done: false;
    tag: false;
  },
  {
    id: 4;
    title: "Task 5";
    done: false;
    tag: false;
  },
];
