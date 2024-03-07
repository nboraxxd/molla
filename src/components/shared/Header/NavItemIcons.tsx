import { AiOutlineUser } from 'react-icons/ai'
import { BiStoreAlt } from 'react-icons/bi'
import { RiHeartLine, RiShoppingCartLine } from 'react-icons/ri'

export const items = {
  wishlist: {
    label: 'Wishlist',
    icon: RiHeartLine,
    href: '#',
  },
  user: {
    label: 'Sign in',
    icon: AiOutlineUser,
    href: '#',
  },
  cart: {
    label: 'Cart',
    icon: RiShoppingCartLine,
    href: '#',
  },
  products: {
    label: 'Products',
    icon: BiStoreAlt,
    href: '#',
  },
}
