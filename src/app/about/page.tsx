import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold">About the Jordan Fan Club</h1>
      <p className="mt-4 text-lg">We celebrate the GOAT, Michael Jordan!</p>

      {/* Button to go back to Home Page */}
      <Link href="/">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Back to Home
        </button>
      </Link>
    </main>
  );
}