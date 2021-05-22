import React from 'react'
import { useColorMode, ColorModeProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import { prismLightTheme, prismDarkTheme } from '../styles/prism'
import MDXComponents from '../components/MDXComponents'
import SEO from '../next-seo.config'
import { Chakra } from "../src/Chakra"

console.log(
  "%c ☁️ Site hébergé et developpé par overdo.net dans le cloud",
  "background-color: #91ccec; color: black; display: block;"
);

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          ::selection{
            background: rgba(0,160,255,0.2);
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#15161a'};
          }
          .svglogo-light, .svglogo-dark{
            margin-left: 21px;
          }
          .svglogo-light:before {
            display: inline-flex;
            position: absolute;
            content: ' ';
            background-image: url('https://svgshare.com/i/WwY.svg');
            background-size: 16px 16px;
            height: 16px;
            width: 16px;
            margin: 10px 0 0 -20px;
          }
          .svglogo-dark:before {
            display: inline-flex;
            position: absolute;
            content: ' ';
            background-image: url('https://svgshare.com/i/Www.svg');
            background-size: 16px 16px;
            height: 16px;
            width: 16px;
            margin: 10px 0 0 -20px;
          }
        `}
      />
      {children}
    </>
  )
}


function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </MDXProvider>
      </ColorModeProvider>
    </Chakra>
  )
}

export default MyApp
