import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function NewActionDialog() {
  return (
    <Dialog>
      <DialogTrigger className="w-fit rounded-sm bg-gray-400 p-2">
        Hello
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova ação</DialogTitle>
          <p>Hello world</p>
          <p>Inserir campos de nome, tipo e peso</p>
          <p>Botão de salvar (que também fecharia o dialog)</p>
          {/* <DialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
