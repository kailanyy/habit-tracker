import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";

import React, { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Action } from "@/src/types";

export const NewActionDialog = () => {
  const [selectedType, setSelectedType] = useState<Action["type"]>("good");
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(5);

  function onClick(adjustment: number) {
    setPoints(Math.max(5, Math.min(25, points + adjustment)));
  }

  const handleTypeChange = (newType: Action["type"]) => {
    setSelectedType(newType);
  };

  const handleSave = async () => {
    const payload = {
      title,
      type: selectedType,
      points,
    };

    await fetch("/api/actions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Criar novo tipo de ação</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova ação</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Label>Nome</Label>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <Label>Tipo de ação</Label>
          <div className="grid grid-cols-4 items-center gap-4">
            <Toggle variant="outline">
              <p>Boa</p>
            </Toggle>
            <Toggle variant="outline">
              <p>Ruim</p>
            </Toggle>
            <Toggle variant="outline">
              <p>Diário</p>
            </Toggle>
          </div>

          <Separator />

          {/* <Select
            onValueChange={(val) => handleTypeChange(val as Action["type"])}
          >
          </Select> */}

          <div className="grid grid-cols-4 items-center gap-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Pontos</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Definir Pontos</DrawerTitle>
                    <DrawerDescription>
                      Defina a pontuação dessa ação
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(-5)}
                        disabled={points >= 25}
                      >
                        -
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                          {points}
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                          pontos
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(5)}
                        disabled={points >= 25}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Salvar</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
