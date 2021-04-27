import React from 'react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Code,
  Button,
  Divider
} from '@chakra-ui/react'

import Container from '../components/Container'
import ExperienceBox from '../components/ExperienceBox'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import BlogPost from '../components/blog/BlogPost'
import Todo from '../components/Todo'
import TechStack from '../components/TechStack'

const url = 'https://heysen.fr/'
const title = 'Accueil – Florian Heysen'
const description = 'Developer, creator, writer, and student living and working in CT. Browse Ben\'s latest projects, experience, blog posts, and statistics.'

export default function Index() {
  const { colorMode } = useColorMode()

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const iconColor = {
    light: 'gray.600',
    dark: 'gray.300'
  }

  const linkColor = {
    light: 'blue.400',
    dark: 'blue.600'
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
          px={4}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="xl"
            >
              Bonjour, je suis Florian Heysen, étudiant et développeur basé à Roubaix & Lille.
            </Heading>
            <Text
              color={colorSecondary[colorMode]}
            >
              Après un DUT et une Licence en développement web, je vais
            aujourd'hui à l'<Link href="https://www.iseg.fr/" color={linkColor[colorMode]} isExternal>ISEG</Link> où j'y apprends les ficelles du marketing digital. Mon site personnel
            est l'endroit où je présente mes projets, mes écrits ou encore mon
            expérience. Il sert également de bac à sable pour jouer avec les
            nouvelles technologies ! N'hésitez pas à me contacter par <Link href="mailto:bjcarlson42@gmail.com" color={linkColor[colorMode]}>mail</Link> ou
            sur un autre réseau social pour toute question.
            </Text>

            <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">
            Expériences
            </Heading>
            <ExperienceBox
              name="O2feel e-bikes"
              years="oct. 2020 - Aujourd'hui"
              pos="Assistant chargé marketing digital"
              badge_1="Stage"
              badge_2="Alternance"
            >
              Mon poste en marketing digital m'a demandé une capacité d'adaptabilité n'ayant aucune expérience 
              profesionnelle dans le monde du marketing. Ma curiosité naturelle m'a permis d'apprendre par moi-même en amont 
              afin de me sentir dans mon élement dans ce nouvel ecosystème. Mon rôle est aujourd'hui de développer et de tenir à jour 
              les différents sites de la startup, ainsi que préparer/publier les différentes publicités digitale.
            </ExperienceBox>
            <ExperienceBox
              name="Agence Apresta"
              years="avr. 2019 - juin 2020"
              pos="Développeur spécialisé SEO"
              badge_1="Stage"
              badge_2="Alternance"
            >
              Durant ce stage et cette alternance dans l'agence Apresta, j'ai eu l'occasion d'approfondir mes connaissances
              en développement web dans les langages HTML/CSS, JavaScript, PHP et SQL. Ces bonnes bases m'ont permises de
              développer plusieurs site par moi-même à l'aide du CMS Wordpress. Ma spécialisation SEO m'a aussi donné
              l'occasion de rédiger des articles, d'analyser différents sites et de lancer des audits afin 
              d'optimiser leur référencement.
            </ExperienceBox>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Todo />

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Heading letterSpacing="tight" mt={8} mb={4} size="lg" fontWeight={700} as="h2">
              Article récent
            </Heading>

            <BlogPost
              title="Identité visuelle : l’image et ses enjeux"
              summary="L’identité visuelle est inévitablement la base d’une marque forte. Zoom sur cet aspect fondamental de la création d’entreprise et de site web !"
              slug="identite-visuelle"
            />

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Heading letterSpacing="tight" mt={8} mb={4} size="lg" fontWeight={700} as="h2">
              Articles les plus populaires
            </Heading>

            <BlogPost
              title="Identité visuelle : l’image et ses enjeux"
              summary="L’identité visuelle est inévitablement la base d’une marque forte. Zoom sur cet aspect fondamental de la création d’entreprise et de site web !"
              slug="identite-visuelle"
            />
            <BlogPost
              title="Quelle était la tendance webdesign en 2018 ?"
              summary="Les sites web sont en constante évolution et 2018 a fait partie des grands changements dans la tendance webdesign."
              slug="tendance-webdesign-2018"
            />

            <Flex justify="center" width="100%">
              <NextLink href="/blog" passHref>
                <Link _hover="none">
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all posts">
                    Voir tous les artciles
                  </Button>
                </Link>
              </NextLink>
            </Flex>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">
            Projets en vedette
            </Heading>
            <FeaturedProjectCard
              title="Overdo.net"
              href="https://overdo.net"
              src="/images/overdo.png"
              alt='Logo overdo'
              color={iconColor[colorMode]}
            >
              Overdo.net est le site web de mon projet d'infogérance cloud. Passionné de système et réseau, le cloud apparait comme la solution de demain pour les entreprises de toutes tailles.
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
            <Flex justify="center" width="100%">
              <NextLink href="/projets" passHref>
                <Link _hover="none" mt={8}>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all projects">
                    Voir tous les projets
                </Button>
                </Link>
              </NextLink>
            </Flex>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Flex
              justify="start"
              flexDirection="column"
              display={['none', 'flex', 'flex']}
            >
              <TechStack />
            </Flex>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" display={['none', 'flex', 'flex']}/>

            <Text mt={8}>On dirait que vous êtes arrivé à la fin de cette page... n'hésitez pas à consulter ma <Link href="https://www.youtube.com/channel/UCbMZRxWXhbROK6Y0A5aBZOQ" isExternal color={linkColor[colorMode]}>chaîne YouTube </Link>où vous pouvez trouver encore plus de contenu en tout genre.
            </Text>

          </Flex>
        </Stack>
      </Container>
    </>
  )
}