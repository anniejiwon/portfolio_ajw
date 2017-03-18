import React,{Component} from 'react'

export default class Posts extends Component {
    constructor() {
        super()
    }

    render() {
        return( 
            <div id='first' className='container-fluid'>
                <div className='contain-images'>
                    <h4 className='posts'>recent posts</h4>
                    <div className="row" id='row-one'>
                        <div className="col-xs-6 col-md-4 firstImg">
                            <img className="scale" width="100%" height="100%" src="../../public/images/beach.jpg"/>
                        </div>
                    </div>
                </div>
                <div className='contain-images'>
                    <h4 className='posts'>recent posts</h4>
                    <div className="row" id='row-one'>
                        <div className="col-xs-6 col-md-4 firstImg">
                            <img className="scale" width="100%" height="100%" src="../../public/images/beach.jpg"/>
                        </div>
                    </div>
                </div>
                <div className='contain-images'>
                    <h4 className='posts'>recent posts</h4>
                    <div className="row" id='row-one'>
                        <div className="col-xs-6 col-md-4 firstImg">
                            <img className="scale" width="100%" height="100%" src="../../public/images/beach.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}