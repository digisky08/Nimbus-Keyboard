import type { Metadata } from "next";
import Link from "next/link";
import { LuChevronRight, LuCircleHelp } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Payment System Unavailable | Nimbus Keyboards",
  description: "The payment system is currently unavailable.",
};

export default function SuccessPage() {
  return (
    <div className="relative mt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
            <LuCircleHelp className="h-10 w-10 text-yellow-600" />
          </div>
          <h1 className="font-bold-slanted mt-8 text-4xl text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="block tracking-tight uppercase">Payment System</span>
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text tracking-tight text-transparent uppercase">
              Unavailable
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            The payment system is currently being updated. Please try again later.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
          >
            Return Home
            <LuChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
};