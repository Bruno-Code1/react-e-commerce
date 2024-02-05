import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrderCards = props => {
    const { totalPrice, totalProducts } = props;
   
  return (
    <div className="flex justify-between items-center mb-4 border border-black p-4 w-80 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">05.02.2024</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
        <span className="font-medium text-2xl mb-1">${totalPrice}</span>
        <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer"></ChevronRightIcon>
        </p>
      </div>
    </div>
  )
}

export default OrderCards;