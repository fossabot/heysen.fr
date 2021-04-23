import React from 'react'
import {
    Box,
    useColorMode,
    Text,
    Heading,
    Image,
    Flex
} from "@chakra-ui/react"

const GitHubSponsorCard = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    return (
        <Box
            w="100%"
            p={5}
            my={4}
            border='1px solid'
            borderColor="lightgray"
            borderRadius={5}
            h="100%"
        >
            <Flex>
                <Image w="75px" h="75px" borderRadius={5} src="/images/portrait.jpeg"></Image>
                <Flex flexDirection={['column', 'row']}>
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection="column"
                        mx={2}
                    >
                    <Heading as="h3" size="md">
                            Florian Heysen
                    </Heading>
                    <Text color={colorSecondary[colorMode]}>
                        Bonjour 👋, je suis un étudiant en marketing digital. Je poste des vidéos hebdomadaires sur ma chaine YouTube et développe des projets open source.
                    </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default GitHubSponsorCard