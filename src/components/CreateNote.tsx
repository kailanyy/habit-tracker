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

export const CreateNote = () => {
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
        <div className="grid gap-4 py-4">
          <Select>
            <SelectTrigger>
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bad">a</SelectItem>
              <SelectItem value="bad">a</SelectItem>
              <SelectItem value="diary">b</SelectItem>
            </SelectContent>
          </Select>
          {/* <p>{action.title}</p> */}
        </div>
        <DialogFooter>
          <NewActionDialog />
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
