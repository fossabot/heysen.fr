import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import format from 'comma-number'

import StatBox from './StatBox'

export const GitHubData = () => {
    const { data } = useSWR('/api/github', fetcher)
    const followerCount = data?.numFollwers
    const projectCount = data?.numProjects
    const starCount = data?.starsCount
    const followers_increase = data?.followers_increase
    const projects_increase = data?.projects_increase
    const stars_increase = data?.stars_increase


    return (
        <>
            <StatBox
                title={`${followerCount ? format(followerCount) : '–––'}`}
                desc="Abonnés GitHub"
                url="https://github.com/florianheysen"
                inc_dec={followers_increase > 0 ? 'increase' : 'decrease'}
                percent={followers_increase}
            />
            <StatBox
                title={`${projectCount ? format(projectCount) : '–––'}`}
                desc="Repos GitHub"
                url="https://github.com/florianheysen"
                inc_dec={projects_increase > 0 ? 'increase' : 'decrease'}
                percent={projects_increase}
            />
            <StatBox
                title={`${starCount ? format(starCount) : '–––'}`}
                desc="Étoiles GitHub"
                url="https://github.com/florianheysen"
                inc_dec={stars_increase > 0 ? 'increase' : 'decrease'}
                percent={stars_increase}
            />
        </>
    )
}

export default GitHubData