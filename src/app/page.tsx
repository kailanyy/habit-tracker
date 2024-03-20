"use client";

import dayjs from "dayjs";
import { useState } from "react";
import HomeActionItem from "../components/HomeActionItem";
import { Action } from "@/src/types";
import { Button } from "@/components/ui/button";
import RegisterActionDialog from "../components/RegisterActionDialog";

const MOCKED_ACTION_INITIAL_STATE: Action[] = [
  {
    id: "1a",
    type: "good",
    title: "Exercício",
    points: 50,
  },
  {
    id: "2b",
    type: "bad",
    title: "Não lavei o rosto",
    points: -25,
  },
  {
    id: "3c",
    type: "diary",
    title: "Hoje a Amora estava extra carinhosa.",
  },
];

export default function Home() {
  const [actions, setActions] = useState<Action[]>([
    ...MOCKED_ACTION_INITIAL_STATE,
  ]);
  const points = actions.reduce(function (acc, obj) {
    if (obj.points) return acc + obj.points;
    return acc;
  }, 0);
  const today = dayjs().format("DD/MM/YYYY");

  return (
    <main className="flex min-h-screen flex-col gap-6 p-24">
      <header className="flex flex-col gap-6">
        <h1 className="text-xl font-bold">{today}</h1>
        <p className={points > 0 ? "text-green-600" : "text-red-600"}>
          {points} pts
        </p>
        <RegisterActionDialog></RegisterActionDialog>
      </header>
      <p></p>
      <section className="flex w-full flex-col gap-6">
        {actions.map((action) => (
          <HomeActionItem key={action.id} action={action} />
        ))}
      </section>
    </main>
  );
}
