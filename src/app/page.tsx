"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Action } from "@/src/types";
import { Button } from "@/components/ui/button";
import { makeServer } from "../../miragejs/server";
import { NewMood } from "../components/NewMood";
import { Calendar } from "../components/Calendar";
import { CreateNote } from "../components/CreateNote";
import { ToDo } from "../components/ToDo";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

makeServer();

export default function Home() {
  const [actions, setActions] = useState<Action[]>([]);
  const [showCreateNote, setShowCreateNote] = useState(false);

  const today = dayjs().format("DD/MM/YYYY");

  useEffect(() => {
    fetch("/api/entries")
      .then((entries) => entries.json())
      .then((entries) => {
        setActions(entries);
      });
  }, []);

  const createNote = () => {
    setShowCreateNote(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <header className="flex flex-col gap-6">
        <h1 className="text-xl font-bold">{today}</h1>
      </header>
      <Calendar></Calendar>
      <Card className="w-3/4">
        <CardHeader>
          <p className="flex justify-end text-red-600">0 pts</p>
          <CardTitle>Lorem ipsum dolor sit amet?</CardTitle>
          {showCreateNote ? <></> : <NewMood></NewMood>}
          {showCreateNote && <CreateNote></CreateNote>}
          <Button onClick={createNote}>Continuar</Button>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </main>
  );
}
