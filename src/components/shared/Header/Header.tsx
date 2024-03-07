import { HeaderNav, HeaderTop } from '@/components/shared/Header'
import { MobileBottomNav } from './MobileBottomNav'

export default function Header() {
  return (
    <header>
      <HeaderTop />
      <HeaderNav />
      <MobileBottomNav />
    </header>
  )
}
