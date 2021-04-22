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

const url = 'https://benjamincarlson.io/'
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
              Bonjour, je suis Florian Heysen, développeur et étudiant basé à Lille.
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
              Mon dernier article
            </Heading>

            <BlogPost
              title="UseEffect In Next.JS - React Hooks"
              summary="Learn what useEffect is learn how to use useEffect in Next.JS."
              slug="using-react-useeffect"
            />

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Heading letterSpacing="tight" mt={8} mb={4} size="lg" fontWeight={700} as="h2">
              Top Blog Posts
            </Heading>

            <BlogPost
              title="How Tik Tok Gave Me The Perfect Coding Side Project"
              summary="I got an idea for a weekend coding project from Tik Tok."
              slug="tik-tok-coding-idea"
            />
            <BlogPost
              title="Add A Firebase Backend To Your Flutter App Fast!"
              summary="Learn how to integrate Google's Firebase into your Flutter App."
              slug="connect-flutter-to-firebase"
            />
            <BlogPost
              title="Using JavaScript To Scramble A Rubik’s Cube: An Improved Algorithm"
              summary="I am making a web app that required me to make a rubiks cube scramble. I will show you how to implement this algorithm in JavaScript."
              slug="using-javascript-to-scramble-a-rubiks-cube-2"
            />

            <Flex justify="center" width="100%">
              <NextLink href="/blog" passHref>
                <Link _hover="none">
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all posts">
                    View All Posts
                  </Button>
                </Link>
              </NextLink>
            </Flex>

            <Divider mb={12} mt={16} w='90%' alignSelf="center" />

            <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">
              Featured Projects
            </Heading>
            <FeaturedProjectCard
              title="25 Days Of Flutter"
              href="https://flutter25.com"
              src="/images/flutter25.png"
              alt='Flutter 25 logo'
              color={iconColor[colorMode]}
            >
              25 Days Of Flutter is a 25 day tutorial series designed to take you from a Flutter beginner to coding a complete app using various modern technologies.
            </ FeaturedProjectCard>
            <FeaturedProjectCard
              title="Word Of The Day App"
              href="https://github.com/bjcarlson42/wotd"
              src="/images/wotd.png"
              alt='Word Of The Day logo'
              color={iconColor[colorMode]}
            >
              Word of the day app built with <Code>Dart</Code>, <Code>Flutter</Code>, and <Code>Wordnik API</Code>. Video tutorial posted on YouTube.
            </ FeaturedProjectCard>
            <FeaturedProjectCard
              title="Personal Website"
              href="https://github.com/bjcarlson42/benjamincarlson.io"
              src="/images/logo.png"
              alt='Personal website logo'
              color={iconColor[colorMode]}
            >
              My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data.
            </FeaturedProjectCard>
            <Flex justify="center" width="100%">
              <NextLink href="/projects" passHref>
                <Link _hover="none" mt={8}>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all projects">
                    View All Projects
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

            <Text mt={8}>Looks like you've made it to the end of this page... feel free to <Link href="https://youtube.com/benjamincarlson" isExternal color={linkColor[colorMode]}>check out my YouTube</Link> where
            you can find even more programming content.
            </Text>

          </Flex>
        </Stack>
      </Container>
    </>
  )
}