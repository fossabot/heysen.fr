const title = 'Florian Heysen – Étudiant créatif et développeur basé en France'
const description =
    'Je travaille à O2feel en tant qu\'assistant responsable marketing digital. Découvrez mes projets, mes certifications et mon blog sur le digital et le cloud !'

const SEO = {
    title,
    description,
    canonical: 'https://heysen.fr',
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
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