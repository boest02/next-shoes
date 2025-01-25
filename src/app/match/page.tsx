import Link from "next/link";
import prisma from "@/utils/db";

export default async function Match() {
  const shoes = await prisma.shoe.findMany();
  console.log(shoes);

  return <div className="flex flex-col items-center my-5 h-screen">
    <h1 className="text-4xl font-bold mb-5">Match a Shoe</h1>
    <div className="border border-gray-200 rounded-md py-4 px-6 w-full max-w-screen-xl flex flex-row flex-wrap justify-start gap-3">
      {shoes.map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe.name} />
      ))}
    </div>
    <Link className="text-lg font-bold border border-gray-200 rounded-md p-2 hover:bg-gray-200 hover:text-gray-800 mt-10" href="/">Back Home</Link>
  </div>;
}

function ShoeCard({ shoe }: { shoe: string }) {
  return <div className="border border-gray-200 rounded-md p-2 hover:bg-gray-200 hover:text-gray-800 w-full max-w-sm text-center">
    <p>{shoe}</p>
  </div>;
}
