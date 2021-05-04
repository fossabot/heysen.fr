import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Stack,
    Flex,
    Heading,
    Avatar,
    Text
} from '@chakra-ui/react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

import SocialLink from '../components/SocialLink'
import Container from '../components/Container'
import { TwitterIcon, YoutubeIcon, GitHubIcon, MailIcon, CodeIcon } from '../components/CustomIcons'

const url = 'https://heysen.fr/bonjour'
const titleSEO = 'Bonjour! – Florian Heysen'
const description = 'Je suis un étudiant et un développeur. Voilà quelques-uns de mes liens.'

const Hello = () => {

    const { data } = useSWR('/api/links', fetcher)
    const title = data?.title
    const vid_url = data?.vid_url

    return (
        <>
            <NextSeo
                title={titleSEO}
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
                    px={2}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        width={['100%', '500px', '700px']}
                    >
                        <Avatar
                            size='2xl'
                            name="Benjamin Carlson"
                            src="../images/portrait.jpeg"
                            mr={2}
                            alignSelf="center"
                            my={5}
                        />
                        <Heading letterSpacing="tight" mb={4} as="h1" size="xl" alignSelf="center">
                            Bonjour 👋 moi c'est Florian
                        </Heading>
                        <Text alignSelf="center" textAlign="center" mb={4}>Je suis étudiant, créateur et développeur. Utilisez les liens ci-dessous pour en savoir plus.</Text>
                        <SocialLink name="Consulter mon site Web" href="/" icon={CodeIcon} />
                        <SocialLink name="Voir mon code OpenSource" href="https://github.com/florianheysen?tab=repositories" icon={GitHubIcon} />
                        <SocialLink name="Je souhaite être recontacté(e)" href="https://buttondown.email/florianheysen" icon={MailIcon} />
                        <SocialLink name="Découvrir ma chaîne YouTube" href="https://www.youtube.com/channel/UCLMdmCCRFGWt7rktx6tMErw?sub_confirmation=1" icon={YoutubeIcon} />
                        <SocialLink name="Me suivre sur Twitter" href="https://twitter.com/florianheysen" icon={TwitterIcon} />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Hello
