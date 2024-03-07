import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Button,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { RxPerson } from 'react-icons/rx'

import { PATH } from '@/constants/path'
import { PopoverChevron } from '@/components/shared/Header'

export default function AuthPopover() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      trigger="hover"
      openDelay={0}
      closeDelay={0}
      gutter={0}
      placement="bottom-end"
    >
      <PopoverTrigger>
        <Button
          variant="tertiary"
          pr={0}
          h={7}
          fontSize="sm"
          fontWeight={300}
          leftIcon={<Icon as={RxPerson} boxSize={3.5} />}
          rightIcon={<PopoverChevron isOpen={isOpen} />}
        >
          Lani
        </Button>
      </PopoverTrigger>
      <PopoverContent p="2" minW="180px" w="fit-content">
        <UnorderedList display="flex" flexDir="column" alignItems="flex-start" ml={0} listStyleType="none">
          {['Account Details', 'Your Orders', 'Wishlist', 'Sign Out'].map((item) => (
            <ListItem key={item} w="full" textAlign="start">
              <ChakraLink
                key={item}
                as={ReactRouterLink}
                to={PATH.HOMEPAGE}
                _hover={{ textDecor: 'none' }}
                display="inline-block"
                w="full"
                py={1.5}
                px={4}
              >
                {item}
              </ChakraLink>
            </ListItem>
          ))}
        </UnorderedList>
      </PopoverContent>
    </Popover>
  )
}
