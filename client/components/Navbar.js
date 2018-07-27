import React from 'react';
import {About, Projects, Contact} from './index';
import {projectList} from '../utils.js';
import heart from '../../public/imgs/heart.png';
import computer from '../../public/imgs/computer.svg';
import email from '../../public/imgs/email.svg';


export default class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            selected: '',
            projects: projectList,
        }
        this.handleClick = this.handleClick.bind(this)
        this.renderSwitch = this.renderSwitch.bind(this)
    }

    handleClick(selected){
        this.setState({ selected })
    }

    renderSwitch(selected){
        switch (selected){
            case 'about':
                return <About/>
            case 'projects':
                return <Projects projects = {this.state.projects}/>
            case 'contact':
                return <Contact/>
            default:
                return <About />
        }
    }
    
    render (){
        let abtClass = ['about', 'btn', 'active'];
        let projClass = ["projects", "btn"]
        let contClass = ["contact", "btn"]
        const selected = this.state.selected
        if (selected === 'about'){
            abtClass.push("active");
            projClass = projClass.filter(className => className !== "active")
            contClass = contClass.filter(className => className !== "active")
        }
        else if (selected === 'projects'){
            projClass.push("active")
            contClass = contClass.filter(className => className !== "active")
            abtClass = abtClass.filter(className => className !== 'active')
        }
        else if (selected === 'contact'){
            contClass.push("active")
            projClass = projClass.filter(className => className !== "active")
            abtClass = abtClass.filter(className => className !== 'active')
        }
        return (
            <div id='navbar'>
                <div id='tabs'>
                    <button className={projClass.join(' ')} onClick={() => this.handleClick('projects')}>
                        <img src={computer}/>
                    </button>
                    <button className={abtClass.join(' ')} onClick={() => this.handleClick('about')}>
                        <img src={heart} />
                    </button>
                    <button className={contClass.join(' ')} onClick={() => this.handleClick('contact')}>
                        <img src={email} />
                    </button>
                </div>
                <div id='contentContainer'>
                    {this.renderSwitch(this.state.selected)}
                </div>
            </div>
        )
    }
};