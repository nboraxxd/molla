import { Circle, SquareProps, useColorModeValue as mode } from '@chakra-ui/react'

export default function BadgeCount(props: SquareProps) {
  return (
    <Circle
      fontSize="xs"
      fontWeight="semibold"
      centerContent
      position="absolute"
      top="-2"
      right="-3"
      bg={mode('blue.500', 'blue.300')}
      color={mode('white', 'gray.800')}
      width="7"
      height="5"
      {...props}
    />
  )
}
