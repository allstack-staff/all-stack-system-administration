import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1">{children}</div>;
}
