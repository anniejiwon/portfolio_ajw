import React, {Component} from 'react'

export default class Project extends Component {
    
    render() {
        return(
            <div id='project'>
                <div id='project-header'>
                    <h4>project pgb-vsu</h4>
                </div>
                <a href='http://www.pgb-vsu.club' target='_blank'>
                    <div id='project-img'>
                        <img className='pgbvsu' height='100%' width='100%' src='../../public/images/pgb.jpg' />                    
                    </div>
                </a>
            </div>
        )
    }
}

