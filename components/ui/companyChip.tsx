import { Logo } from '@/components/ui/logo'

export function CompanyChip() {
  return (
    <div className="flex gap-2">
      <Logo color="blue" emoji="🦊" />
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold">Company Name</div>
        <div className="flex divide-x-2 divide-black rounded-full bg-zinc-500 px-2">
          <div className="px-2">
            <div className="-mt-2 text-sm uppercase">Stock Price</div>
            <div className="">¤300</div>
          </div>
          <div className="px-2">
            <div className="-mt-2 text-sm uppercase">Grade</div>
            <div className="">Gold</div>
          </div>
        </div>
      </div>
    </div>
  );
}
