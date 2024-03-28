"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import HomeActionItem from "../components/HomeActionItem";
import { Action } from "@/src/types";
import { NewActionDialog } from "../components/NewActionDialog";
import { CreateNote } from "../components/CreateNote";
import { Button } from "@/components/ui/button";
import { makeServer } from "../../miragejs/server";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

makeServer();

export default function Home() {
  const [actions, setActions] = useState<Action[]>([]);
  const points = actions?.reduce(function (acc, obj) {
    if (obj.points) return acc + obj.points;
    return acc;
  }, 0);

  const today = dayjs().format("DD/MM/YYYY");

  useEffect(() => {
    fetch("/api/entries")
      .then((res) => res.json())
      .then((json) => {
        console.log({ json });
      });
  }, []);

  console.log(actions);

  return (
    <main className="flex min-h-screen flex-col gap-6 p-24">
      <header className="flex flex-col gap-6">
        <h1 className="text-xl font-bold">{today}</h1>
        <p className={points > 0 ? "text-green-600" : "text-red-600"}>
          {points} pts
        </p>
        <CreateNote></CreateNote>
      </header>
      <section className="flex w-full flex-col">
        {actions?.map((action) => (
          <>
            <div key={action.id} className="flex flex-row items-center">
              <ul>
                <li>{action.title}</li>
              </ul>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="ghost">i</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{action.points}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </>
        ))}
      </section>
    </main>
  );
}
