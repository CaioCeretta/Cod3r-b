import { IconDevicesPcOff } from "@tabler/icons-react";
import Link from "next/link";

export interface ProductNotFoundProps {
  noReturnButton?: boolean
}


export default function ProductNotFound(props: ProductNotFoundProps) {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <IconDevicesPcOff size={180} stroke={0.5} />
      <span className="text-violet-300 font-light">Product Not Found</span>
      {!props.noReturnButton && (
        <Link href="/" className="button bg-violet-700 mt-5">
          Return
        </Link>
      )}

    </div>
  )
}
