import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold text-red-500">Welcome to the Jordan Fan Club</h1>
      <p className="mt-4 text-lg">The GOAT of basketball.</p>

      {/* Button to navigate to About page */}
      <Link href="/about">
        <button className="mt-6 px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition duration-300">
          Go to About Page
        </button>
      </Link>
    </main>
  );
}