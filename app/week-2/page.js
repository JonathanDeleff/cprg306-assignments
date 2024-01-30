import { StudentInfo } from "../../Components/student-info";
import { HomeButton } from "@/Components/buttons";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Shopping List</h1>
      <StudentInfo />
      <HomeButton/>
    </main>  
  );
}
