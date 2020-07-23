import React,{Component} from 'react';
import { NavBar,List,DatePicker,Picker} from 'antd-mobile';

import Api from '../../request/api'
import './style.css';

const Item = List.Item;

class InputFile extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:"",
      status:"",
      statusList:[
        {
          label: '草稿',
          value: '1',
        },
        {
          label: '已投稿',
          value: '2',
        },
      ],
      submitTotal:"",
      records:[]
    }
    
  }
  componentWillMount(){
    this.getRecordData();
  }
  getRecordData(){

    let params = {
      mobile: localStorage.getItem("globalAccount"),
      limit: 10,
      page: 1
    };
    Api.getRecordList(params).then(res => {
      if (res.resp_code === 0) {
        console.log(res.datas.data)
        this.setState({
          submitTotal:res.datas.submitTotal,
          records:res.datas.data.records
        })
      }
    });

  }
  render() {
    // const { getFieldProps } = this.props.form;
    return (
      <div className="inputFile">
            <NavBar
              mode="light"
              rightContent={[
                <span className="iconfont icongerensucai"></span>
              ]}
            >社会治理融媒云投稿平台</NavBar>
            <div className="content">
              <List className="my-list">
                <DatePicker
                  value={this.state.date}
                  onChange={date => this.setState({ date })}
                >
                  <Item arrow="horizontal">选择时间</Item>
                </DatePicker>

                <Picker 
                  data={this.state.statusList}
                  value={this.state.status}
                  cols={1}
                  onChange={val => this.setState({ status:val })}
                  >
                  <Item extra="请选择" arrow="horizontal">投稿状态</Item>
                </Picker>
                
              </List>

              <List className="my-list">
                <Item extra={this.state.submitTotal}>累计发稿</Item>
                {/* <Item extra={'121篇'}>累计录用</Item> */}
              </List>

              {
                this.state.records.map((v,i)=>{
                  return(
                    <List className="my-list" key={i}>
                      <Item wrap className="hadInputFile">{v.manuTitle}</Item>
                      <Item className={v.manuStatus===1?'draft':'hadTime'} extra={v.manuStatus===1?'草稿':'已投稿'}>{v.updateTime}</Item>
                    </List>
                  )
                  
                })
              }
              

              {/* <List className="my-list">
                <Item wrap className="hadInputFile">今天何处春意浓？朋友圈堪比“赏春大赛”！你参与了吗？今天何处春意浓？今天何处春意浓？今天何处春意浓？朋友圈堪比“赏春今天何处春意浓？朋友圈堪比“赏春大赛”！你参与了吗？今天何处春意浓？今天何处春意浓？今天何处春意浓？</Item>
                <Item className="draft" extra={'草稿'}>2020-09-30 12:30:30</Item>
              </List> */}

            </div>
          

      </div>
    )
  }
  
}

export default InputFile;
