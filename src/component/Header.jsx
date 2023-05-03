import { ReactNode, useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Services', 'Projects', 'Team','Careers'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: '#4A4A4AFF',
      color: 'white'
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Box bg={'#6F6F6FB3'} boxShadow='lg' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>
          <Flex alignItems={'center'}>
            <Box display={{ base: 'none', md: 'block' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Box>
            <IconButton
              ml={{ base: 'auto', md: '0' }}
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
              icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ base: 'block', md: 'none' }}
              variant='ghost'
            />
          </Flex>
        </Flex>
        {isMobileMenuOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}
