import { Icon } from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'

export default function PopoverChevron(props: { isOpen: boolean }) {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  }

  return <Icon as={FiChevronDown} __css={iconStyles} />
}
