import { Link as ReactRouterLink } from 'react-router-dom'
import { Box, Center, Stack, Text } from '@chakra-ui/react'
import { PATH } from '@/constants/path'

type Props = {
  icon: React.ElementType
  label: string
  isActive?: boolean
}

export default function MobileNavAction(props: Props) {
  const { label, icon, isActive } = props

  return (
    <Center
      as={ReactRouterLink}
      to={PATH.HOMEPAGE}
      height="3rem"
      rounded="4"
      aria-current={isActive ? 'page' : undefined}
      _activeLink={{
        bg: 'blue.50',
        color: 'blue.600',
      }}
      _hover={{ bg: isActive ? '' : 'gray.50' }}
    >
      <Stack direction="column" align="center" as="span" spacing="0">
        <Box fontSize="xl" as={icon} />
        <Text fontSize="sm" fontWeight="medium">
          {label}
        </Text>
      </Stack>
    </Center>
  )
}
