import { useCartStore } from '@states/cart';
import { ToastTemplate } from '@utils/toasts';
import { useCallback } from 'react';

export const AddToCardButton: IComponent<{
  flower_id: number;
}> = ({ children, flower_id }) => {
  const { cart, setCart } = useCartStore();

  const handleAddToCart = useCallback(() => {
    const index = cart.findIndex((item) => item.flower_id === flower_id);
    if (index === -1) {
      const newCart = [...cart, { flower_id, quantity: 1 }];
      setCart(newCart);
      console.log(newCart);
      ToastTemplate.success('Đã thêm vào giỏ hàng');
    } else {
      ToastTemplate.warn('Sản phẩm đã có trong giỏ hàng');
    }
  }, [cart, flower_id, setCart]);

  return <div onClick={handleAddToCart}>{children}</div>;
};
