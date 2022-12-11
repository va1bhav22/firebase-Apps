import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import "./Navbar.css"

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = () => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} className="Mainnav" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box className='NavLogo'>D</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <Flex
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                gap={10}
                pr={100}
                >

                <Avatar
                  size={'sm'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6tJFzIpbBPSTREGZxWZ-0_yxeA8M-Wpi7ZnHP9RPTA&s'
                  }
                />
                <Avatar
                  size={'sm'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5FDGSOO3CM6ZJ4H7VJY7WhoatzlZPSVJcHp40pA6jA&s'
                  }
                />
                <Avatar
                  size={'sm'}
                  src={
                    'data:image/png;base64,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'
                  }
                />
              </Flex>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}