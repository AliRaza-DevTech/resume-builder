import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Build Your Resume with <span className="text-blue-600">AI</span>
      </h1>
      <p className="text-xl text-gray-500 mb-8 max-w-xl">
        Paste your experience and a job description — our AI writes
        the perfect resume bullet points for you in seconds.
      </p>
      <Link
        href="/builder"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Build My Resume
      </Link>
    </div>
  );
}