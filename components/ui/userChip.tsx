import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function UserChip() {
  return (
    <div className="flex gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold">Username</div>
        <div className="flex divide-x-2 divide-black bg-zinc-500 rounded-full px-2">
          <div className="px-2">
            <div className="uppercase text-sm -mt-2">Net Worth</div>
            <div className="">¤99,999</div>
          </div>
          <div className="px-2">
            <div className="uppercase text-sm  -mt-2">Cash</div>
            <div className="">¤99,999</div>
          </div>
        </div>
      </div>
    </div>
  )
}
