import { Outlet } from 'react-router-dom'

import { Header } from '@/components/shared/Header'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
