import { HomeButton } from "@/Components/buttons";
import { Item } from "@/Components/item";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Shopping List:</h1>
      <div>
        <Item />
      </div>
      <div>
        <HomeButton />
      </div>
    </main>
  );
}
