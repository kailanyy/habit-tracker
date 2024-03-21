import { Action } from "@/src/types";

type HomeActionItemProps = {
  action: Action;
};

export default function HomeActionItem({ action }: HomeActionItemProps) {
  return (
    <div>
      <p>{action.title}</p>
      <p>{action.description}</p>
    </div>
  );
}
