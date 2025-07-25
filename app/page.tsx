import ProtectedRoute from "./Components/ProtectedRoute";
import Link from "next/link";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Mero Coding Class!
            </h1>
            <p className="text-green-600 text-xl font-semibold mb-8">
              You have logged in successfully!
            </p>

            <div className="mt-2">
              <Link
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                Go To Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
