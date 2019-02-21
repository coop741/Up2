import React, { Component } from 'react';
import './Timeline.css'
import PostContainer from '../PostContainer'

class Timeline extends Component {
    render() {
        return (
            <div className="timeline">
                <form className="form-horizontal">
                    <div className="row">
                        <div className="col-10">
                            <input
                                className="form-control col-12"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-outline-success col-12" type="submit">
                                Search
                    </button>
                        </div>
                    </div>
                </form>
                <PostContainer />
            </div>
        )
    }
}

export default Timeline;