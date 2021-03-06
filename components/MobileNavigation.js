import React from 'react'
import {
    useColorMode,
    Button,
    Flex
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  bottom: 0;
  left: 0;
  box-shadow: 12px 0 0 0 rgba(0, 0, 0, 0.15);
`

const MobileNavigation = () => {
    const { colorMode } = useColorMode()
    const router = useRouter()

    const navBgColor = {
        light: 'gray.50',
        dark: 'gray.900'
    }

    const navActiveBg = {
        light: 'gray.200',
        dark: 'gray.600',
    }

    return (
        <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="800px"
            minWidth="320px"
            width="100%"
            bg={navBgColor[colorMode]}
            as="nav"
            p={4}
            mt={0}
            mx="auto"
            display={['flex', 'none', 'none']}
        >
            <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname.includes('/blog') ? navActiveBg[colorMode] : null}>
                    Blog
                </Button>
            </NextLink>
            <NextLink href="/projets" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname === '/projets' ? navActiveBg[colorMode] : null}>
                    Projets
                </Button>
            </NextLink>
            <NextLink href="/certifications" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname === '/certifications' ? navActiveBg[colorMode] : null}>
                    Certifications
                </Button>
            </NextLink>
            <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} backgroundColor={router.pathname === '/' ? navActiveBg[colorMode] : null}>
                    Accueil
                </Button>
            </NextLink>
        </StickyNav >
    )
}

export default MobileNavigation