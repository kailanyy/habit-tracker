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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { NewActionDialog } from "./NewActionDialog";
import React, { useState, useEffect } from "react";
import { Action, ActionType } from "@/src/types";
import { Textarea } from "@/components/ui/textarea";

export const CreateNote = () => {
  const [actions, setActions] = useState<Action[]>([]);
  const [selectedType, setSelectedType] = useState<ActionType>("good");

  useEffect(() => {
    fetch("/api/actions")
      .then((res) => res.json())
      .then((json) => {
        setActions(json.actions);
      });
  }, []);

  const handleTypeChange = (newType: Action["type"]) => {
    setSelectedType(newType);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit" variant="outline">
          Anotar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova ação</DialogTitle>
        </DialogHeader>
        <div className="pointer flex flex-row gap-4">
          <Select
            onValueChange={(value) => handleTypeChange(value as ActionType)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {actions?.map((action) => (
                <SelectItem key={action.id} value={action.type}>
                  {action.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedType == "diary" ? (
            <Textarea onChange={() => handleTypeChange("diary")} />
          ) : (
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {actions?.map((action) => (
                  <SelectItem key={action.id} value={action.type}>
                    {action.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        <DialogFooter>
          <NewActionDialog />
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
