import { IconShoppingCart } from "@tabler/icons-react";

export interface CartIconProps {
  itemQty: number
}

export default function CartIcon(props: CartIconProps) {
  return (
    <div className="flex justify-center items-center rounded-full w-14 h-14 bg-violet-dark
    relative">
      {/* Stroke is the font weight of an icon, so the thickness of the line */}
      <IconShoppingCart size={30} stroke={1.3} />
      <div className="absolute top-2 right-2 bg-pink-500 text-white">
        {props.itemQty}
      </div>
    </div>
  )
}