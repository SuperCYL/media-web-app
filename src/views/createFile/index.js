import React, { Component } from 'react'
import { List ,Picker} from 'antd-mobile';
import './style.css'

const Item = List.Item;
export class CreateFile extends Component {
    constructor(props){
        super(props);
        this.state={
            fileType:[],
            fileTypeList:[
                { label: "图文", value: 1 },
                { label: "视频", value: 2 }
            ]
        }
    }
    //确定->稿件类型
    fileTypeOk=(v)=>{
        this.setState({fileType:v})
    }
    //取消->稿件类型
    fileTypeDis(){
        this.setState({fileType:[]})
    }
    createFileBack(){
        this.props.history.push('/InputFile');
    }
    render() {
        return (
            <div className="createFile">
                <div className="header"><span className='iconfont iconarrow-left-bold' onClick={this.createFileBack.bind(this)}/>新建稿件</div>
                <div className="content">
                    <List className="my-list">
                        <Picker 
                        data={this.state.fileTypeList}
                        cols={1}
                        value={this.state.fileType}
                        onOk={this.fileTypeOk.bind(this)}
                        onDismiss={this.fileTypeDis.bind(this)}
                        >
                        <Item extra="请选择" arrow="horizontal">投稿类型</Item>
                        </Picker>
                    </List>
                </div>
            </div>
        )
    }
}

export default CreateFile
