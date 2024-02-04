import { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);
  console.log('CART:', context.cartProducts);

  return (
    <aside 
    className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg`}>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>My Order</h2>
          <div>
            <XMarkIcon
            className='w-6 h-6 text-black cursor-pointer' 
            onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
          </div>
        </div>
        <div className='px-6'>
        {
          context.cartProducts.map(product => (
            <OrderCard 
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            />
          ))
        }
        </div>

    </aside>
  );
}

export default CheckoutSideMenu;