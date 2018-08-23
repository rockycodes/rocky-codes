import React from 'react';

const Projects = (props) => {
    return (
        <div className='content projects' id='projects'>
            {props.projects.map((project) => {
                return (
                    <div key={project.className}>
                        <a href={project.link} target="_blank">
                            <div className='hoverBox'>
                                <div className='textWrapper' id={project.className}>
                                    <div className='mobileImg'></div>
                                    <p id='title'>{project.title}</p>
                                    <p className='description'>{project.description}</p>
                                    <p>{project.technology}</p>
                                    <p className='prompt'>{project.prompt}</p>
                                </div>
                            </div>
                        </a>
                        <div className={`projectBox ${project.className}`}></div>
                    </div>
                )
            })
            }
        </div>
    );
};

export default Projects;