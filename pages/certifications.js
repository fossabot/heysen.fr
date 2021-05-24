import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Stack,
    Flex,
    Heading,
    useColorMode,
    Code
} from '@chakra-ui/react'

import Container from '../components/Container'
import CertifCard from '../components/CertifCard'

const url = 'https://heysen.fr/projets'
const title = 'Projets – Florian Heysen'
const description = 'Voici quelques-uns des projets open source et des dépôts GitHub sur lesquels je travaille.'

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
                            Certifications
                        </Heading>
                        
                        <CertifCard
                            title="Google Cloud Platform Fundamentals: Core Infrastructure"
                            href="https://www.coursera.org/account/accomplishments/verify/ED5KJ2HXJU3U"
                            src="/images/gcloud.png"
                            alt='Logo Google Cloud'
                            color={iconColor[colorMode]}
                        >
                            Ce cours présente des concepts et des termes à connaître pour exploiter Google Cloud Platform (GCP). Sujets abordés :
                            &nbsp;<Code>App Engine</Code> <Code>Compute Engine</Code> <Code>Kubernetes Engine</Code> <Code>Cloud Storage</Code> <Code>Cloud SQL</Code> <Code>BigQuery</Code>
                        </CertifCard>

                        <CertifCard
                            title="Fondamentaux du marketing numérique"
                            href="https://drive.google.com/file/d/1Zdxg0ZVbN0EqOtf8DvWJjqDq_cEkcxWL/view"
                            src="/images/google.png"
                            alt='Logo Google'
                            color={iconColor[colorMode]}
                        >
                            Ce cours comprend 26 modules qui ont tous été créés par des formateurs Google. Agréé par l'IAB Europe, ce cours m'a permis de maîtriser et d'appliquer les fondamentaux du marketing numérique.
                        </CertifCard>

                        <CertifCard
                            title="Google Analytics avancé"
                            href="https://analytics.google.com/analytics/academy/certificate/hmqdfcecQY233occ5JwTKw"
                            src="/images/analytics.png"
                            alt='Logo Google Analytics'
                            color={iconColor[colorMode]}
                        >
                            Ce cours aborde les outils d'analyse destinés à mesurer le trafic sur les sites web de façon avancée. On y découvre comment configurer des dimensions personnalisées, des statistiques personnalisées ou le suivi des événements afin de collecter des données spécifiques.
                        </CertifCard>

                        <CertifCard
                            title="UX/UI Design Foundations"
                            href="https://certificates.uxcel.com/JJ4N27YGKKZH"
                            src="/images/uxcel.png"
                            alt='Logo Uxcel'
                            color={iconColor[colorMode]}
                        >
                            Ce cours d'introduction couvre toutes les bases de l'expérience utilisateur et de la conception d'interface utilisateur. J'y ai construit une base solide de tous les termes de conception et d'analyse.
                        </CertifCard>

                        <CertifCard
                            title="Designing for Accessibility"
                            href="https://certificates.uxcel.com/XYFH5772NO6D"
                            src="/images/uxcel.png"
                            alt='Logo Uxcel'
                            color={iconColor[colorMode]}
                        >
                            À travers les concepts de bases, ce cours a mis en lumière les meilleures pratiques afin d'expliquer comment l'accessibilité profite à tous, développeur comme utilisateurs finaux. Lignes directrices maîtrisées : <Code>WCAG by W3C</Code>
                        </CertifCard>

                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Projects