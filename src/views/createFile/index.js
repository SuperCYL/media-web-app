import React, { Component } from 'react'
import {  } from 'antd-mobile';
import './style.css'
export class CreateFile extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className="createFile">
                <div className="header"><span className='iconfont iconarrow-left-bold' />新建稿件</div>
            </div>
        )
    }
}

export default CreateFile
