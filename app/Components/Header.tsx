"use client";

import { useUser } from "../context/UserContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const { user, logout, isLoggedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <header className="bg-gray-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Mero Coding Class</h1>

        {/* navbar */}
        <nav className="flex items-center space-x-4">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md transition-colors ${
              pathname === "/"
                ? "bg-blue-700 text-white"
                : "text-blue-100 hover:bg-blue-700 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`px-3 py-2 rounded-md transition-colors ${
              pathname === "/dashboard"
                ? "bg-blue-700 text-white"
                : "text-blue-100 hover:bg-blue-700 hover:text-white"
            }`}
          >
            Dashboard
          </Link>
        </nav>

        {/* user detail */}
        <div className="flex items-center space-x-4">
          <span className="text-blue-100">Welcome, {user?.name}!</span>
          <button
            onClick={handleLogout}
            className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
