import Link from "next/link";

export default function Add() {
  return <div className="flex flex-col items-center mt-10 h-screen">
    <h1 className="text-4xl font-bold">Add a Shoe</h1>
    <Link className="text-lg font-bold border border-gray-200 rounded-md p-2 hover:bg-gray-200 hover:text-gray-800 mt-10" href="/">Back Home</Link>
  </div>;
}

