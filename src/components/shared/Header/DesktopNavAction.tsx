import { As, Box, BoxProps, Center, CenterProps, VisuallyHidden } from '@chakra-ui/react'

interface NavActionProps extends CenterProps {
  as: As
  label: string
  icon: React.ElementType
  iconSize: BoxProps['fontSize']
}

export default function DesktopNavAction(props: NavActionProps) {
  const { as, label, icon, iconSize, display } = props

  return (
    <Center w="8" h="8" as={as} display={display}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Box fontSize={iconSize} as={icon} color="gray.600" />
    </Center>
  )
}
