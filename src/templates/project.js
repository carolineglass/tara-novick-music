import React from 'react'
import projectStyles from '../styles/project.module.scss'

const Project = () => {
    // make each section dynamic
    // create layout and embed youtube

    return (
        <div>     
            <section className={projectStyles.section}>
                <h1>Jingles</h1>
            <div className={projectStyles.container}>
                <div className={projectStyles.content1}>
                    <h3>Project Title</h3>
                    <p>
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
                    sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
                    vel, aliquet nec, vulputate eget, arcu.
                    </p>
                </div>
                <div className={projectStyles.content2}>
                    <h3>Youtube of project</h3>
                    <iframe title="tara video" width="560" height="315" src="https://www.youtube.com/embed/TetZQ4SLUfk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </section> 

            <section className={projectStyles.section}>
                <h1>Voice Overs</h1>
            </section> 

            <section className={projectStyles.section}>
            <h1>Film/TV/Commercial Score</h1>
            </section>

        </div>
    )
}

export default Project