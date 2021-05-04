import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Icon,
    Text,
    Stack,
    Flex,
    Heading,
    useColorMode,
    Code
} from '@chakra-ui/react'

import Container from '../components/Container'
import ProjectListFull from '../components/ProjectListFull'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import { GrGithub } from "react-icons/gr"

const url = 'https://heysen.fr/projets'
const title = 'Projets – Florian Heysen'
const description = 'Here are some of the open source projects and GitHub repos I am working on.'

const Projects = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            Projets
                        </Heading>
                        <Text color={colorSecondary[colorMode]}>Grâce à l'école, le travail, YouTube et ma curiosité, j'ai pu travaillé sur de nombreux projets au fil du temps. Cliquer sur la fiche du projet vous amènera au dépôt GitHub. Si vous aimez ou utilisez l'un de ces projets, pensez à donner une "star".
                        </Text>
                        <Heading letterSpacing="tight" as="h1" mt={4} size="xl" fontWeight={700}>
                            Projets en cours
                        </Heading>
                        <FeaturedProjectCard
                            title="FireChat"
                            href="https://firechat.pages.dev/"
                            src="/images/firechat.png"
                            alt='Logo firechat'
                            color={iconColor[colorMode]}
                        >
                            FireChat est un projet mettant en avant les outils de<Code>Firebase</Code> afin de construire un espace de discussion. <Code>Firebase Auth</Code>, <Code>Firestore</Code>, <Code>Chakra UI</Code>
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Akio studio"
                            href="https://akio.studio/"
                            src="/images/akio.png"
                            alt='Logo akio'
                            color={iconColor[colorMode]}
                        >
                            Jeune studio basé à Roubaix qui a pour but d'améliorer l'accessibilité digitale dans le monde du web. Ce site est développé avec <Code>NextJS</Code>, <Code>Strapi</Code> et <Code>Chakra-ui</Code>.
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Site personnel"
                            href="https://github.com/florianheysen/personal"
                            src="/images/logo.png"
                            alt='Personal website logo'
                            color={iconColor[colorMode]}
                        >
                            Mon site Web personnel sur lequel vous vous trouvez maintenant. Construit avec le générateur de site statique <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> et des serverless functions pour les données en temps réel.
                        </FeaturedProjectCard>
                        <Heading letterSpacing="tight" as="h2" mb={4} mt={8} size="xl" fontWeight={700}>
                            <Flex align="center">Projets publics &nbsp;<GrGithub size="32px" color={colorSecondary[colorMode]} /></Flex>
                        </Heading>
                        <ProjectListFull />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Projects