import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function StatusBar() {
  return (
    <div
      className="status-bar absolute top-0 w-sm bg-zinc-400"
      style={{ left: "calc(50% - (var(--container-sm) / 2))" }}
    >
      {/* current phase */}
      <div className="flex items-center justify-center bg-zinc-500 p-2">
        <div className="">Phase Label</div>
      </div>
      {/* latest status */}
      <div className="flex items-center justify-center gap-2 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>is expanding to a new city block</span>
      </div>
    </div>
  );
}
