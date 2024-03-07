import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
  Container,
  UnorderedList,
  ListItem,
  useDisclosure,
  Button,
  Icon,
} from '@chakra-ui/react'
import { RiHeartLine, RiSearchLine, RiShoppingCartLine } from 'react-icons/ri'
import { MdMenu } from 'react-icons/md'

import { NAVBAR } from '@/constants'
import { PATH } from '@/constants/path'
import { BadgeCount, DesktopNavAction, Popover, PopoverChevron } from '@/components/shared/Header'

export default function HeaderNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box h={20} display="flex">
      <Container maxW="1200px" px={5}>
        <Flex h="full" justify="space-between" align="center">
          <DesktopNavAction as="button" label="Toggle Menu" icon={MdMenu} iconSize="3xl" display={{ lg: 'none' }} />
          <ChakraLink as={ReactRouterLink} to={PATH.HOMEPAGE}>
            <Image src="/images/logo-with-black-brand.png" alt="Molla" objectFit="cover" w={105} h="auto" />
          </ChakraLink>

          <HStack display={{ base: 'none', lg: 'flex' }} spacing="10" fontSize="sm">
            {NAVBAR.map((item) =>
              item.isPopover ? (
                <Popover
                  key={item.route}
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                  triggerElement={
                    <ChakraLink
                      key={item.route}
                      as={ReactRouterLink}
                      to={item.route}
                      display="flex"
                      alignItems="center"
                      gap={1}
                      textTransform="uppercase"
                      color={isOpen ? 'primary.orange' : 'inherit'}
                      _hover={{ textDecor: 'none' }}
                    >
                      {item.label}
                      <PopoverChevron isOpen={isOpen} />
                    </ChakraLink>
                  }
                >
                  <UnorderedList display="flex" flexDir="column" alignItems="flex-start" ml={0} listStyleType="none">
                    {['TV', 'Computers', 'Tablets & Cell Phones', 'Smartwatches', 'Accessories', 'Mouse'].map(
                      (item) => (
                        <ListItem key={item} w="full" textAlign="start">
                          <ChakraLink
                            key={item}
                            as={ReactRouterLink}
                            to={PATH.HOMEPAGE}
                            _hover={{ textDecor: 'none' }}
                            display="inline-block"
                            w="full"
                            py={1.5}
                            px={3}
                            fontSize={13}
                          >
                            {item}
                          </ChakraLink>
                        </ListItem>
                      )
                    )}
                  </UnorderedList>
                </Popover>
              ) : (
                <ChakraLink
                  key={item.route}
                  as={ReactRouterLink}
                  to={item.route}
                  _hover={{ textDecor: 'none' }}
                  textTransform="uppercase"
                >
                  {item.label}
                </ChakraLink>
              )
            )}
          </HStack>

          <HStack spacing={4}>
            <Button variant="tertiary" px={0}>
              <Icon as={RiSearchLine} fontSize="xl" color="gray.600" />
            </Button>
            <ChakraLink
              as={ReactRouterLink}
              to={PATH.HOMEPAGE}
              position="relative"
              display={{ base: 'none', md: 'initial' }}
              mr={3}
            >
              <DesktopNavAction as="span" label="Wishlist" icon={RiHeartLine} iconSize="xl" />
              <BadgeCount>01</BadgeCount>
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to={PATH.HOMEPAGE}
              position="relative"
              display={{ base: 'none', md: 'initial' }}
              mr={3}
            >
              <DesktopNavAction as="span" label="Cart" icon={RiShoppingCartLine} iconSize="xl" />
              <BadgeCount>99+</BadgeCount>
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
