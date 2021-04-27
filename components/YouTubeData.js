import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import format from 'comma-number'

import StatBox from './StatBox'

export const YouTubeData = () => {
    const { data } = useSWR('/api/youtube', fetcher)
    const subscriberCount = data?.subscriberCount
    const viewCount = data?.viewCount
    const videoCount = data?.videoCount
    const subs_increase = data?.subs_increase
    const views_increase = data?.views_increase
    const vid_count_increase = data?.vid_count_increase

    return (
        <>
            <StatBox
                title={`${subscriberCount ? format(subscriberCount) : '–––'}`}
                desc="Abonnés YouTube"
                url="https://www.youtube.com/channel/UCbMZRxWXhbROK6Y0A5aBZOQ"
                inc_dec={subs_increase > 0 ? 'increase' : 'decrease'}
                percent={subs_increase}
            />
            <StatBox
                title={`${viewCount ? format(viewCount) : '–––'}`}
                desc="Vues YouTube"
                url="https://youtube.com/channel/UCbMZRxWXhbROK6Y0A5aBZOQ"
                inc_dec={views_increase > 0 ? 'increase' : 'decrease'}
                percent={views_increase}
            />
            <StatBox
                title={`${videoCount ? format(videoCount) : '–––'}`}
                desc="Vidéos YouTube"
                url="https://youtube.com/channel/UCbMZRxWXhbROK6Y0A5aBZOQ"
                inc_dec={vid_count_increase > 0 ? 'increase' : 'decrease'}
                percent={vid_count_increase}
            />
        </>
    )
}

export default YouTubeData