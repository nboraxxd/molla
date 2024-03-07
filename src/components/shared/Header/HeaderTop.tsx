import { Box, BoxProps, Container, HStack, Icon, Link } from '@chakra-ui/react'
import { BsTelephone } from 'react-icons/bs'

import { AuthPopover } from '@/components/shared/Header'

export default function HeaderTop(props: BoxProps) {
  return (
    <Box textAlign="center" py={2.5} fontSize="sm" borderBottom="1px" borderBottomColor="#ebebeb" {...props}>
      <Container maxW="1200px" px={5}>
        <HStack spacing="10" justify="space-between">
          <Link href="tel:0987654321" display="flex" alignItems="center" gap={1} _hover={{ textDecoration: 'none' }}>
            <Icon as={BsTelephone} boxSize={3} />
            <Box as="span" fontWeight={300}>
              Hotline: 0987 654 321
            </Box>
          </Link>

          <AuthPopover />
        </HStack>
      </Container>
    </Box>
  )
}
