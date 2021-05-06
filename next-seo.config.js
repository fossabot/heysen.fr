const title = 'Florian Heysen –  étudiant, développeur et créatif.'
const description =
    'Je suis étudiant, développeur et créatif. Je travaille à O2feel en tant qu\'assistant responsable marketing digital.'

const SEO = {
    title,
    description,
    canonical: 'https://heysen.fr',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://heysen.fr',
        title,
        description,
        images: [
            {
                url: 'https://heysen.fr/images/logo.png',
                alt: title
            }
        ]
    },
    twitter: {
        handle: '@florianheysen',
        site: '@florianheysen',
        cardType: 'summary_large_image'
    }
}

export default SEO