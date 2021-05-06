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
                url: 'https://camo.githubusercontent.com/1702e810ba4351c3df1cfbd7f380151e238ba1067ead38caf9d6495c4d2cbf54/68747470733a2f2f692e696d6775722e636f6d2f466445734671372e706e67',
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