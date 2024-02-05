import Link from "next/link";
import { Week2, Week3, Week4 } from "@/Components/buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-1.5xl">
        CPRG 306: Web Development 2 - Assignments
      </div>
      <div>
        <Week2 />
        <Week3 />
        <Week4 />
      </div>
    </main>
  );
}
