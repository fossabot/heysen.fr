import React from 'react'
import {
    Heading,
    Text,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Link,
    useColorMode
} from '@chakra-ui/react'

const TechStack = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const linkColor = {
        light: 'blue.400',
        dark: 'blue.600'
    }

    return (
        <>
            <Heading letterSpacing="tight" mt={8} mb={2} size="lg" fontWeight={700} as="h2">
                Tech Stack
            </Heading>
            <Text color={colorSecondary[colorMode]} mb={4}>Les technologies utilisées pour ce site web.</Text>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Nom</Th>
                        <Th>Route</Th>
                        <Th>Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td><Link href="https://nextjs.org" color={linkColor[colorMode]} isExternal>Next JS</Link></Td>
                        <Td>n/a</Td>
                        <Td>Mon framework JS pour ce site Web.</Td>
                    </Tr>
                    <Tr>
                        <Td><Link href="https://chakra-ui.com" color={linkColor[colorMode]} isExternal>Chakra UI</Link></Td>
                        <Td>n/a</Td>
                        <Td>Mon framework CSS pour ce site.</Td>
                    </Tr>
                    <Tr>
                        <Td>Blog</Td>
                        <Td>/blog/[slug].js</Td>
                        <Td>J'utilise <Link href="https://github.com/hashicorp/next-mdx-remote" color={linkColor[colorMode]} isExternal>next-mdx-remote</Link> pour mes articles de blog.</Td>
                    </Tr>
                    <Tr>
                        <Td>Statistiques en temps réel</Td>
                        <Td>/api/[].js</Td>
                        <Td>Plusieurs routes d'API qui récupèrent mes données de médias sociaux en temps réel à l'aide de  <Link href="https://nextjs.org/docs/api-routes/introduction" color={linkColor[colorMode]} isExternal>serverless function</Link> de Next.JS.</Td>
                    </Tr>
                    <Tr>
                        <Td>Nombre de Vues/J'aime des articles de blog en temps réel</Td>
                        <Td>/api</Td>
                        <Td>J'utilise <Link href="https://firebase.google.com" color={linkColor[colorMode]} isExternal>Firebase de Google</Link> pour stocker le nombre de vues et de mentions J'aime pour mes articles de blog.</Td>
                    </Tr>
                    <Tr>
                        <Td>Vercel</Td>
                        <Td>n/a</Td>
                        <Td>J'utilise <Link href="https://vercel.com" color={linkColor[colorMode]} isExternal>Vercel</Link> pour déployer mon application.</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    )
}

export default TechStack