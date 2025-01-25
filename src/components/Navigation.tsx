'use client'

import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-gray-200 w-6/12 mx-auto my-3">
      <Link className="text-lg font-bold border border-gray-200 rounded-md p-2 hover:bg-gray-200 hover:text-gray-800" href="/">Home</Link>
      <Link className="text-lg font-bold border border-gray-200 rounded-md p-2 hover:bg-gray-200 hover:text-gray-800" href="/add">Add a Shoe</Link>
      <Link className="text-lg font-bold border border-gray-200 rounded-md p-2 hover:bg-gray-200 hover:text-gray-800" href="/match">Match a Shoe</Link>
    </div>
  );
}
