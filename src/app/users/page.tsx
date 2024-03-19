import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function PoweradePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Página powerade</p>
      <Button className="bg-red-500 rounded-xl">Click me</Button> 
    </main>
  );
}
