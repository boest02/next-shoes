
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-10 h-screen">
      <h1 className="text-4xl font-bold">Shoe Match Home</h1>
      <p className="text-lg text-gray-500 my-2 w-4/12 text-center">Welcome to the Shoe Match Home page. Here you can add a shoe to the database or match a shoe to a pair of shoes in the database.</p>
      <div className="flex items-center justify-center gap-3 mt-3">
        <Link className="text-lg font-bold border border-gray-200 rounded-md p-2 hover:bg-gray-200 hover:text-gray-800" href="/add">Add a Shoe</Link>
        <Link className="text-lg font-bold border border-gray-200 rounded-md p-2 hover:bg-gray-200 hover:text-gray-800" href="/match">Match a Shoe</Link>
      </div>
    </div>
  );
}

