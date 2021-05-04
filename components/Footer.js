import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { FiGithub, FiFigma, FiLinkedin, FiMail } from "react-icons/fi"
import NowPlaying from '../components/NowPlaying';

export const Footer = () => {

    const { colorMode } = useColorMode()
    const borderIcon = {
        light: 'gray.400',
        dark: 'gray.500'
    }
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    return (
        <Flex align="center" mb={4} direction="column" visibility={'hidden', 'visible', 'visible'} display={['none', 'flex', 'flex']}>
            <NowPlaying />
            <div>
                <Link href="https://www.figma.com/@florianheysen" title="Figma" isExternal>
                    <IconButton
                        aria-label="Figma"
                        icon={<FiFigma />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="https://github.com/florianheysen" title="GitHub" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<FiGithub />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/florianheysen"
                    title="LinkedIn"
                    isExternal
                >
                    <IconButton
                        aria-label="LinkedIn"
                        icon={<FiLinkedin />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="mailto:heysen.florian@gmail.com" title="Email" isExternal>
                    <IconButton
                        aria-label="Email"
                        icon={<FiMail />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
            </div>
            <div>
                <NextLink href="/stats" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Bonjour"
                    >
                        /stats
                    </Link>
                </NextLink>
                <NextLink href="/outils" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Hello"
                    >
                        /outils
                    </Link>
                </NextLink>
            </div>
        </Flex>
    )
}
