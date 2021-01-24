import React from 'react'
import VideoPlayer from 'react-video-js-player' 
import CircleK from '../videos/circleK.mp4'

import Layout from '../components/layout'
import styled from 'styled-components'


const Container = styled.div`
    margin: 3rem auto;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`

// const CircleKSection = styled.section`
//     border: 1px solid black;
//     padding: 10%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     `

const ProjectPage = () => {

    const videoSrc = CircleK;
    const poster = 'https://www.shoparboretum.com/application/files/2815/6632/9509/CircleK.jpg'

    return (
    <Layout>
        <Container>     
            <section>
                <h1>Circle K</h1>
                <div>
                    <div>
                        <h3>Circle K</h3>
                        <p>
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
                        sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
                        vel, aliquet nec, vulputate eget, arcu.
                        </p>
                        <h3>SOUNDCLOUD EMBED</h3>
                    </div>
                    <div>
                        <VideoPlayer 
                            src={videoSrc}
                            poster={poster}
                            width='720'
                            height='420'
                        />
                    </div>
                </div>
            </section> 

            <section>
                <h1>Flex Calibur</h1>
                <div>
                    <div>
                        <h3>FLEX CALIBUR</h3>
                        <p>
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
                        sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
                        vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </div>
                    <div>
                        <h3>Youtube of project</h3>
                        <iframe width="720" height="420" src="https://www.youtube.com/embed/HjJcMw2TlmU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </section> 

            <section>
                <h1>Film/TV Score</h1>
                <div>

                </div>
            </section>

        </Container>  
    </Layout>
    )
}

export default ProjectPage