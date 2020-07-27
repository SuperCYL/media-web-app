import React, { Component } from 'react'
import { List ,Picker,InputItem} from 'antd-mobile';

import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';

import './style.css'
// import { ajax } from 'jquery';



const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: localStorage.getItem("access_token"),
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
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
            fileList: [],
            uploading: false,
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
   
    render() {
        const { uploading, fileList } = this.state;
        const props = {
            onRemove: file => {
              this.setState(state => {
                const index = state.fileList.indexOf(file);
                const newFileList = state.fileList.slice();
                newFileList.splice(index, 1);
                return {
                  fileList: newFileList,
                };
              });
            },
            beforeUpload: file => {
              this.setState(state => ({
                fileList: [...state.fileList, file],
              }));
              return false;
            },
            fileList,
          };
      
      
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

                        <Upload {...props}>
                            <Button>
                            <UploadOutlined /> Click to Upload
                            </Button>
                        </Upload>
                            
                        </Item> 
                    </List>
                    
                </div>
            </div>
        )
    }
}

export default CreateFile
