import React from 'react'
import Layout from '../components/layout'
import projectStyles from '../styles/project.module.scss'

const ProjectPage = () => {
    return (
    <Layout>
        <div>     
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
                        <h3>Youtube of project</h3>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/undefined" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/HjJcMw2TlmU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </section> 

            <section>
                <h1>Film/TV Score</h1>
            </section>
        </div>
    </Layout>
    )
}

export default ProjectPage