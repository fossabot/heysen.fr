import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import DarkModeSwitch from '../components/DarkModeSwitch'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  transition: height .5s, line-height .5s;
  backdrop-filter: saturate(180%) blur(9px);
`

const Navigation = () => {
    const { colorMode } = useColorMode()
    const router = useRouter()

    const bgColor = {
        light: '#fff',
        dark: '#15161a'
    }

    const navHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }

    return (
        <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="800px"
            minWidth="356px"
            width="100%"
            as="nav"
            px={6}
            py={6}
            mt={8}
            mb={[null, 0, 8]}
            mx="auto"
            display={['none', 'flex', 'flex']}
        >
            <DarkModeSwitch />
            <Box>
                <NextLink href="/blog" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: navHoverBg[colorMode] }} backgroundColor={router.pathname.includes('/blog') ? navHoverBg[colorMode] : null}
                        aria-label="Blog"
                    >
                        Blog
                    </Button>
                </NextLink>
                <NextLink href="/projets" passHref>
                    <Button
                        mx="2"
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: navHoverBg[colorMode] }} backgroundColor={router.pathname === '/projets' ? navHoverBg[colorMode] : null}
                        aria-label="Projects"
                    >
                        Projets
                    </Button>
                </NextLink>
                <NextLink href="/" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: navHoverBg[colorMode] }} backgroundColor={router.pathname === '/' ? navHoverBg[colorMode] : null}
                        aria-label="Home"
                    >
                        Accueil
                    </Button>
                </NextLink>
                {/* <NextLink href="https://tutorials.benjamincarlson.io" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }} target="_blank">
                        Tutorials
                    </Button>
                </NextLink> */}
            </Box>
        </StickyNav >
    )
}

export default Navigation