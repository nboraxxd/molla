import { Popover as ChakraPopover, PopoverContent, PopoverProps, PopoverTrigger } from '@chakra-ui/react'

interface Props extends PopoverProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  triggerElement: React.ReactNode
  children: React.ReactNode
}

export default function Popover(props: Props) {
  const { isOpen, onClose, onOpen, triggerElement, children, gutter = 8, trigger, placement } = props

  return (
    <ChakraPopover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      gutter={gutter}
      openDelay={0}
      closeDelay={0}
      trigger={trigger || 'hover'}
      placement={placement}
    >
      <PopoverTrigger>{triggerElement}</PopoverTrigger>
      <PopoverContent
        position="relative"
        p="2"
        minW="180px"
        w="fit-content"
        _after={{
          content: "''",
          position: 'absolute',
          w: '100%',
          h: `${gutter * 2}px`,
          top: `-${gutter * 2}px`,
          left: 0,
        }}
      >
        {children}
      </PopoverContent>
    </ChakraPopover>
  )
}
