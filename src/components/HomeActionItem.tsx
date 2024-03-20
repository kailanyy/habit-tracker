import { Action } from "@/src/types";

type HomeActionItemProps = {
  action: Action;
};

export default function HomeActionItem({ action }: HomeActionItemProps) {
  return (
    <div>
      <p>{action.title}</p>
      <p>{action.type}</p>
      <p>{action.points}</p>
      <p>{action.description}</p>
    </div>
  );
}
