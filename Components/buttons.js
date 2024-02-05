import Link from "next/link";

export const HomeButton = () => {
  return (
    <div className="border-2 border-slate-400 p-1 m-1">
      <Link href="/">Home</Link>
    </div>
  );
};

export const Week2 = () => {
  return (
    <div className="border-2 border-slate-400 p-1 m-1">
      <Link href="/week-2">Week 2</Link>
    </div>
  );
};

export const Week3 = () => {
  return (
    <div className="border-2 border-slate-400 p-1 m-1">
      <Link href="/week-3">Week 3</Link>
    </div>
  );
};

export const Week4 = () => {
  return (
    <div className="border-2 border-slate-400 p-1 m-1">
      <Link href="/week-4">Week 4</Link>
    </div>
  );
};
