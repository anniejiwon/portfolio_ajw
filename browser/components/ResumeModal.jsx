import React, {Component} from 'react'

export default class ResumeModal extends Component {
    constructor() {
        super()
        
        this._downloadResume = ::this._downloadResume
    }

    toggle = () => {
        this.setState({open: !this.state.open})
    }

    _downloadResume = () => {
        window.open('../../public/files/annie_won_resume.pdf')
    }

    render() {
        return (
            <div>
                <div className="container">
            <a href="#myModal" className="btn btn-info" data-toggle="modal">view resume</a>
            
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content" id='contentpage'>
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button>
                    <h4 className="modal-title" id='nameheader'>annie ji won</h4>
                    </div>
                    <div className="modal-body">
                        <p><strong>software engineer</strong></p>
                        <p>+16263202318 | Los Angeles, CA</p>
                        <p><a>anniejiwon@gmail.com</a> | <a>github.com/anniejiwon</a> | <a>linkedin.com/in/anniejiwon</a></p>
                    </div>
                    <div className="modal-body">
                        <p><strong>technologies</strong></p>
                        <p>++ javascript, react, redux, express, sequelize, node, html, css, es6, three, git, github, photoshop, indesign, postgresSQL</p>
                        <p>+ ruby, python, swift, xcode, bootstrap, jasmine, mocha, chai, socket.io, oauth, firebase, jquery</p>
                    </div>
                    <div className="modal-body">
                        <p><strong>projects</strong></p>
                        <p>2016 | full stack developer | <a>pgb-vsu.club</a></p>
                        <p>capstone project at full stack academy</p>
                        <p>tech stack | react, redux, express, three, webgl, tone, react-three</p>
                    </div>
                    <div className="modal-body">
                        <p>2016 | full stack developer | <a>github.com/anniejiwon/castleShopper</a></p>
                        <p>e-commerce store</p>
                        <p>tech stack | react, redux, express, sequelize, oauth</p>
                    </div>
                    <div className="modal-body">
                        <p><strong>education</strong></p>
                        <p>2016 | fullstack academy of code</p>
                        <p>17 week, full-time immersive developer bootcamp with a focus on full stack javascript web development</p>
                    </div>
                    <div className="modal-body">
                        <p>2007 | university of california, riverside</p>
                        <p>b.a. art history</p>
                    </div>
                    <div className="modal-body">
                        <p><strong>professional experience</strong></p>
                        <p>2012-2016 | venus la | venus ny</p>
                        <p>venus | director of operations</p>
                        <p>managing the teams in both new york and los angeles offices</p>
                        <p>executing consignment and loan agreements with museums, galleries, and private collections</p>
                        <p>close coordination and management of numerous vendors e.g. art handlers, shippers, riggers, insurance agents, accounting team</p>
                        <p>working closely with CFO, CEO and other directors for annual program</p>
                        <p>publication production</p>
                        <p>sales</p>
                    </div>
                    <div className="modal-body">
                        <p>2010-2012 | freelance art consultant</p>
                        <p>acquisition of over 200 pieces of art at various auction houses and galleries</p>
                        <p>fully curated of homes in orange county, westchester, and manhattan </p>
                        <p>extensive research and negotiations for specific works of art for clients</p>
                        <p>executing loan and consignment agreements with museums and  galleries</p>
                    </div>
                    <div className="modal-footer" id='modalfooter'>
                        <button type="submit" className="btn btn-default" data-dismiss="modal" onClick={() => this._downloadResume()}>download</button>
                    </div>
                </div>
                </div>
            </div>            
            </div>
            </div>

        )
        
    }
}


