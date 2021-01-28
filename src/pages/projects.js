import React from 'react'
import projectStyles from '../styles/project.module.scss'
import VideoPlayer from 'react-video-js-player' 
import CircleK from '../videos/circleK.mp4'
import Layout from '../components/layout'

const ProjectPage = () => {

    const videoSrc = CircleK;
    const poster = 'https://www.shoparboretum.com/application/files/2815/6632/9509/CircleK.jpg'

    return (
    <Layout>
        <div className={projectStyles.container}>
            <div>
                <div>
                    <h3>Circle K</h3>
                    <p>
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
                    sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
                    vel, aliquet nec, vulputate eget, arcu.
                    </p>
                </div>

                <div>
                    <VideoPlayer 
                        className={projectStyles.videoJs}
                        src={videoSrc} 
                        poster={poster} 
                        width='720' 
                        height='420'
                    />
                </div>
            </div>

            <div>
                <div>
                    <h3>Flex Calibur</h3>
                    <p>
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
                    sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
                    vel, aliquet nec, vulputate eget, arcu.
                    </p>
                </div>

                <div>
                    <iframe width="720" height="420" src="https://www.youtube.com/embed/HjJcMw2TlmU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div>
                <h3>Film/TV Score</h3>
            </div>
        </div>  
    </Layout>
    )
}

export default ProjectPage