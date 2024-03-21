import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Action } from "@/src/types";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    actions: Model,
  },
  routes() {
    this.get("/api/actions", (schema) => {
      return schema.actions.all();
    });
    this.post("/api/actions", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.actions.create(attrs);
    });
  },
});

export const NewActionDialog = () => {
  const [selectedType, setSelectedType] = useState<Action["type"]>("good");
  const [actions, setActions] = useState<Action[]>([]);
  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");

  const handleTypeChange = (newType: Action["type"]) => {
    setSelectedType(newType);
  };

  const actionData = {
    type: selectedType,
    title: title,
    weight: weight,
  };
  const handleSave = () => {
    setActions(actions);
    console.log(actions);
  };

  useEffect(() => {
    fetch("/api/actions")
      .then((res) => res.json())
      .then((json) => {
        setActions(json.actionData);
        console.log("json.actionData", json.actionData);
      });
  }, []);

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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Nome</Label>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <Select
            onValueChange={(val) => handleTypeChange(val as Action["type"])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Tipo de ação" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="good">Bom</SelectItem>
                <SelectItem value="bad">Ruim</SelectItem>
                <SelectItem value="diary">Diário</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Peso</Label>
            <Input
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              className="col-span-3"
            />
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
