// import Link from "next/link";
import PixiCanvas from './pixiDemo'
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      Landing page
      <Button>foo</Button>
      <PixiCanvas></PixiCanvas>
    </main>
  );
}
