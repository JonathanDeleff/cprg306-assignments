import Link from "next/link";
import { Week2, Week3, Week4, Week5, Week6, Week7 } from "@/Components/buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-1.5xl">
        CPRG 306: Web Development 2 - Assignments
      </div>
      <div className="flex flex-row">
        <Week2 />
        <Week3 />
        <Week4 />
        <Week5/>
        <Week6/>
        <Week7/>
      </div>
    </main>
  );
}
