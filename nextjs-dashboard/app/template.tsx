import React, { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [footerBtnClicks, setFooterBtnClick] = useState(0);

  return (
    <div>
      <div>{children}</div>
      <footer className="py-8 text-center">
        <button className="p-1 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-gray-50 text-lg">
          Lorem ipsum
        </button>
      </footer>
    </div>
  );
}
