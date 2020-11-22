import React from 'react'
import Layout from '../components/layout'
import musicStyles from '../styles/music.module.scss'

const MusicPage = () => {
    return (
        <Layout>
        <div className={musicStyles.soundcloudContainer}>
            <div className={musicStyles.soundcloudDiv}><iframe title="tara song" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/277001159&color=%236c7484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></div>
            <div className={musicStyles.soundcloudDiv}><iframe title="tara song" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276997734&color=%236c7484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></div>
        </div>
        </Layout>
    )
}

export default MusicPage