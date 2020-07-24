import React,{Component} from 'react';
import {List,Picker} from 'antd-mobile';

import Api from '../../request/api'
import './style.css';

import { timestampToTime } from '../../utils/filter';

const Item = List.Item;

class InputFile extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:[],
      status:[],
      statusList:[
        {label: '草稿',value: '1',},
        {label: '已投稿',value: '2',},
      ],
      dateList:[
        { label: "最近一周内", value: "1" },
        { label: "最近半月内", value: "2" },
        { label: "最近一月内", value: "3" },
        { label: "选择所有", value: "4" }
      ],
      submitTotal:"",
      records:[],
      beginTime:"",
      endTime:""
    }
    
  }
  componentWillMount(){
    this.getRecordData();
  }
  getRecordData(){

    let params = {
      manuStatus: this.state.status.join(''),
      mobile: localStorage.getItem("globalAccount"),
      beginTime: this.state.beginTime,
      endTime: this.state.endTime,
      limit: 10,
      page: 1
    };
    Api.getRecordList(params).then(res => {
      if (res.resp_code === 0) {
        this.setState({
          submitTotal:res.datas.submitTotal,
          records:res.datas.data
        })
      }
    });
  }
  //投稿状态
  selectStatus=(v)=>{
    this.setState({status:v},()=>{
      this.getRecordData();
    })
  }
  //取消->投稿状态
  cancelStatus(){
    this.setState({status:[]},()=>{
      this.getRecordData();
    })
    
  }
  //选择时间
  selectDate=(v)=>{
    this.setState({date:v})
    let t = v.join('');
    if (t == 1) {
      this.setState({
        beginTime:timestampToTime(new Date().getTime()),
        endTime:timestampToTime(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
      },()=>{
        this.getRecordData();
      })
    } else if (t == 2) {
      this.setState({
        beginTime:timestampToTime(new Date().getTime()),
        endTime:timestampToTime(new Date().getTime() - 15 * 24 * 60 * 60 * 1000)
      },()=>{
        this.getRecordData();
      })
    } else if (t == 3) {
      this.setState({
        beginTime:timestampToTime(new Date().getTime()),
        endTime:timestampToTime(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
      },()=>{
        this.getRecordData();
      })
    } else {
      this.setState({
        beginTime:'',
        endTime:''
      },()=>{
        this.getRecordData();
      })
    };

  }


  //取消->选择时间
  cancelDate(){
    this.setState({
      date:[],
      beginTime:"",
      endTime:""
    },()=>{
      this.getRecordData();
    })
    
  }


  render() {

    return (
      <div className="inputFile">
            <div className="header">社会治理融媒云投稿平台<span className="iconfont icongerensucai"></span></div>
            <div className="content">
              <List className="my-list">

                <Picker 
                  data={this.state.dateList}
                  cols={1}
                  value={this.state.date}
                  onOk={this.selectDate.bind(this)}
                  onDismiss={this.cancelDate.bind(this)}
                  >
                  <Item extra="请选择" arrow="horizontal">选择时间</Item>
                </Picker>

                <Picker 
                  data={this.state.statusList}
                  cols={1}
                  value={this.state.status}
                  onOk={this.selectStatus.bind(this)}
                  onDismiss={this.cancelStatus.bind(this)}
                  >
                  <Item extra="请选择" arrow="horizontal">投稿状态</Item>
                </Picker>
                
              </List>

              <List className="my-list">
                <Item extra={this.state.submitTotal}>累计发稿</Item>
              </List>

              {
                this.state.records.map((v,i)=>{
                  return(
                    <List className="my-list" key={i}>
                      <Item wrap className="hadInputFile">{v.manuTitle}</Item>
                      <Item wrap className="imgItemLabel">
                        <ul className="imgs clearfloat">
                          {
                              v.fileVoList.map((k,j)=>{
                                
                              return(
                                <li><img src={k.url} /></li>
                                
                              )
                              
                            })
                          }
                        </ul>
                      </Item>
                      <Item className={v.manuStatus===1?'draft':'hadTime'} extra={v.manuStatus===1?'草稿':'已投稿'}>{v.updateTime}</Item>
                    </List>
                  )
                  
                })
              }

            </div>
          
            <div className="footer">新建投稿</div>
      </div>
    )
  }
  
}

export default InputFile;
