import React from 'react'
import { Navbar } from './components'
import linkedin from '../public/imgs/linkedin2.svg';
import twitter from '../public/imgs/twitter2.svg';
import github from '../public/imgs/github.svg';

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            rocky: '',
            codes: ''
        }
        this.typing = this.typing.bind(this);
    }

    componentDidMount(){
        this.typing("rocky", 0)
        setTimeout(() => {
            this.typing("codes", 0)
        }, 4000)
    }

    typing (str, i) {
        let newStr = ""
        let stateObj = {}
        let timer = setInterval(() => {
            newStr += str[i]
            stateObj[str] = newStr
            i++
            this.setState(stateObj)
            if (newStr === str) {
                clearInterval(timer)
                i = 0
            }
        }, 200)
    }

    render (){
    return (
        <div id='app'>
            <div id='header'>
                <div id='headerContent'>
                    <p id='rocky'>{this.state.rocky}</p>
                    <svg width="624px" height="273px" viewBox="0 0 624 273" id="heart">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="littlesquiggle" transform="translate(3.000000, 6.000000)" stroke="#FF2200" strokeWidth="11">
                                <path d="M615.106723,134.430893 C562.988878,285.717652 344.303774,235.735603 424.637853,198.27581 C451.594279,185.706025 442.491132,329.263249 320.48603,219.113742 C293.633006,194.870106 278.995009,138.527037 278.995009,115.045885 C278.995009,71.7852944 283.675855,30.8191815 323.925727,41.6237929 C339.031055,45.6786429 345.823737,61.2678673 344.303774,88.391466 C375.935292,78.0044489 393.865613,83.9794713 398.094738,106.316533 C408.080462,159.058357 270.763468,179.867812 243.858547,153.713931 C95.4635672,9.46134011 430.373177,-64.009898 465.336673,72.334122 C488.872205,164.113536 307.659563,290.424641 0.212402039,125.626516" id="heart-path"></path>
                            </g>
                        </g>
                    </svg>
                    <p id='codes'>{this.state.codes}</p>
                </div>
                <div id="icons">
                    <a href="https://www.linkedin.com/in/rachelefine/" target="_blank">
                        <img className='icon' src={linkedin} />
                    </a>
                    <a href="https://twitter.com/rockycodes" target="_blank">
                        <img className='icon' src={twitter} />
                    </a>
                    <a href="https://github.com/rockycodes/" target="_blank">
                        <img className='icon' src={github} />
                    </a>
                </div>
            </div>
            <Navbar />
        </div>
    )
    }   
}