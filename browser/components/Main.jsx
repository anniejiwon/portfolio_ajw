// import FloatingActionButton from 'material-ui/FloatingActionButton';
import React,{Component} from 'react'

import Posts from './Posts'
import Project from './Project'
import ResumeModal from './ResumeModal'

export default class Main extends Component {

    constructor() {
        super()
   
        this._hideArrow = ::this._hideArrow
    }
    
    //currently not getting into this func
    _hideArrow = () => {
        console.log('scroll')
        if (window.innerHeight + window.scrollY > document.body.clientHeight) {
            document.getElementById('footer-arrow').style.display='none';
        }
    }


    render() {
        return(
            <div id='fullpage'>
                <div id='zero'>
                    <div id='intro'>
                        <div id='name'>
                            <p>ANNIE Ji WON</p>
                        </div>
                        <div id='title'>
                            <p><em>full stack software engineer</em></p>
                        </div>
                    </div>
                </div>
                <Posts />
                <Project />
                <div className='section' id='second'>
                    <div id='thankdiv'>
                        <p id='resume'>my resume can be viewed here ~></p>
                    </div>
                    <div id='resume-modal'>
                        <ResumeModal />
                    </div>
                </div>

                <div id='third'>
                    <p>you can find me at</p>
                </div>
                <div id='footer-arrow' onScroll={() => this._hideArrow()}> 
                    <div id='down-arrow' className="animated bounce">
                            <svg fill="#000000" height="50" viewBox="0 0 24 24" width="50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
                                <path d="M0-.75h24v24H0z" fill="none"/>
                            </svg>
                    </div>
                </div>
            </div>
        )
    }
}
