import React, { Component } from 'react'
import { List ,Picker,InputItem} from 'antd-mobile';


import './style.css'
import { ajax } from 'jquery';


const Item = List.Item;
export class CreateFile extends Component {
    constructor(props){
        super(props);
        this.state={
            fileType:[],
            fileTypeList:[
                { label: "图文", value: 1 },
                { label: "视频", value: 2 }
            ],
            files: [],
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
    tittleChange=(val)=>{
        console.log(val);
    }
    handleImageUpload=(e)=>{
        e.preventDefault()
        const {files} = this.state;
        let formData = new FormData();
        formData.append('file', e.target.files[0]);

        debugger;
        ajax({
            type: 'POST',
            url: "http://xxxx/import_csv",
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            success: function (ret) {
                alert(ret);
            }
        });
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

                        <InputItem
                            onChange={this.tittleChange.bind(this)}
                            placeholder="请输入"
                            >标题</InputItem>
                    </List>
                    <List className="my-list">
                        <textarea rows="5" placeholder="正文:"></textarea>   
                        <Item className="img-item">
                            <input type="file" id="fileId" onChange={this.handleImageUpload.bind(this)}/>
                            
                        </Item> 
                    </List>
                    
                </div>
            </div>
        )
    }
}

export default CreateFile
