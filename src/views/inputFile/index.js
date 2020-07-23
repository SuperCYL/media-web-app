import React,{Component} from 'react';
import { NavBar,List} from 'antd-mobile';

import './style.css';

const Item = List.Item;

class InputFile extends Component {
  
  render() {
    return (
      <div className="inputFile">
            <NavBar
              mode="light"
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <span className="iconfont icongerensucai"></span>
              ]}
            >社会治理融媒云投稿平台</NavBar>
            <div className="content">
              <List className="my-list">
                <Item extra="请选择" arrow="horizontal" onClick={() => {}}>选择时间</Item>
                <Item extra="请选择" arrow="horizontal" onClick={() => {}}>投稿状态</Item>
              </List>

              <List className="my-list">
                <Item extra={'1231篇'}>累计发稿</Item>
                <Item extra={'121篇'}>累计录用</Item>
              </List>

              <List className="my-list">
                <Item wrap className="hadInputFile">今天何处春意浓？朋友圈堪比“赏春大赛”！你参与了吗？今天何处春意浓？今天何处春意浓？今天何处春意浓？朋友圈堪比“赏春今天何处春意浓？朋友圈堪比“赏春大赛”！你参与了吗？今天何处春意浓？今天何处春意浓？今天何处春意浓？</Item>
              </List>

            </div>
          

      </div>
    )
  }
  
}

export default InputFile;
