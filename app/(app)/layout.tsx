import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {children}
    </div>
  )
}