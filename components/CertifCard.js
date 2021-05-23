import React from 'react'
import {
    Flex,
    Link,
    Heading,
    Text,
    Stack,
    useColorMode,
    Image
} from '@chakra-ui/react'

const CertifCard = ({ title, href, children, src, alt }) => {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.100',
        dark: 'gray.600'
    }
    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const colorLink = {
        light: 'gray.400',
        dark: 'gray.500'
    }

    return (
            <Flex
                align="center"
                border="1px solid"
                borderColor={borderColor[colorMode]}
                borderRadius={4}
                p={4}
                mt={4}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={["40px", "50px", "60px"]}
                    ml={2}
                    mr={4}
                ></Image>
                <Stack>
                    <Heading
                        as="h4"
                        size="md"
                        fontWeight="bold"
                        mb={2}
                    >
                        {title}
                    </Heading>
                    <Text mb={4} color={colorSecondary[colorMode]}>{children}</Text>
                    <Link
                    href={href}
                    title={title}
                    color={colorLink[colorMode]}
                    isExternal
                    width='fit-content'
                    >Voir la référence</Link>
                </Stack>
            </Flex>
    )
}

export default CertifCard