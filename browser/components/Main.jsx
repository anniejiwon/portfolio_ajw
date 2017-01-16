import React,{Component} from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';


export default class Main extends Component {

    constructor() {
        super()
    }

    // _hideArrow = () => {
    //     if (window.innerHeight + window.scrollY > document.body.clientHeight) {
    //         document.getElementById('down-arrow').style.display='none';
    //     }
    // }



    render() {
        return(
            <div id='fullpage'>
                <div id='first' className='section'>
                    <div>
                        <h1 id='welcome'>WELCOME</h1>
                    </div>
                    <div id='down-arrow' className="animated bounce">
                        <svg fill="#000000" height="50" viewBox="0 0 24 24" width="50" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
                            <path d="M0-.75h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                    <div id='btn'>
                        <FloatingActionButton id='floatbtn' label="Secondary" />
                        <FloatingActionButton id='floatbtn' label="Secondary" />
                        <FloatingActionButton id='floatbtn' label="Secondary" />
                    </div>
                </div>
                <div className='section' id='second'>
                    <div>
                        <p id='thanks'>thanks for visiting my page</p>
                    </div>
                    <div id='personaldiv'>
                        <div className='social' id='personal1'>resume</div>
                        <div className='social' id='personal2'>resume</div>
                        <div className='social' id='personal3'>resume</div>
                    </div>
                </div>
                <div id='third'>
                    <p>you can find me at</p>
                </div>
            </div>
        )
    }
}
