import { Box, SimpleGrid } from '@chakra-ui/react'

import { MobileNavAction } from '@/components/shared/Header'
import { items } from './NavItemIcons'

export const MobileBottomNav = () => (
  <Box
    bg="white"
    pos="fixed"
    width="full"
    bottom="env(safe-area-inset-bottom)"
    borderTopWidth="1px"
    display={{ md: 'none' }}
  >
    <SimpleGrid columns={4} py="1.5">
      <MobileNavAction {...items.cart} isActive />
      <MobileNavAction {...items.products} />
      <MobileNavAction {...items.user} />
      <MobileNavAction {...items.wishlist} />
    </SimpleGrid>
  </Box>
)
