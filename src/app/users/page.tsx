import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PoweradePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className="rounded-xl bg-red-500">Click me</Button>
      <div>
        <p>Hello</p>
      </div>
    </main>
  );
}
