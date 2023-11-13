"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [footerBtnClicks, setFooterBtnClicks] = useState(0);

  return (
    <footer className="flex flex-col justify-center py-8 text-lg text-center">
      <Link href="/" className="text-blue-500">
        Home
      </Link>
      <Link href="/ui/dashboard" className="text-blue-500">
        Dashboard
      </Link>
      <div>
        <button
          className="mt-1 p-[.375rem] rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-gray-50"
          onClick={() => setFooterBtnClicks(footerBtnClicks + 1)}
        >
          Clicks: <span className="font-bold">{footerBtnClicks}</span>
        </button>
      </div>
    </footer>
  );
}
