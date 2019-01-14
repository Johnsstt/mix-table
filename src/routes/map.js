import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './map.css';

import {getTableInfo} from '@/services/api';
import { Table, Tooltip, Tag, Button, Modal } from 'antd';

let globalArr = [];
class MapPage extends Component {
  constructor(props){
    super(props);
    this.state={
      tableData: [],
      columns: [],
      visible: false
    }
  }
  getTableData() {
    let self = this;
    let param = {}
    var resData = {};
      getTableInfo(param).then((res)=>{
        resData['key'] = 1;
        resData['name'] = res.name;
        resData['description'] = res.description;
        resData['image'] = res.image;
        resData['url'] = res.url;
        resData['tag'] = res.tags;
        resData['properties'] = res.properties;
        globalArr = globalArr.concat(resData);
        self.setState({
          tableData: globalArr,
          columns: self.getColumnsData(globalArr[0])
        })
      })
  }
  getColumnsData(resData) {    
    let self = this;
    const columns = [{
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
      render: (desc) => (
        <Tooltip title={desc}>
          <a title={desc} className={styles.descTd}>{desc}</a>
        </Tooltip>
      )
    }, {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img src={image} />
      ),
    }, {
      title: 'url',
      dataIndex: 'url',
      key: 'url',
      render: (url) => (        
        <a href={url}>链接</a>
      )
    }, {
      title: 'tag',
      key: 'tag',
      dataIndex: 'tag',
      render: (tags) => (
        <span>
          {
            tags.map((item, index) => <Tag color="blue" key={index}>{item}</Tag>)
          }
        </span>
      )      
    }, {
      title: 'properties',
      key: 'properties',
      render: (text, properties) => (
        <Button onClick={self.showModal.bind(this)}>属性</Button>
      ),
    }];
    return columns;
  }

  componentDidMount() {
    let self = this;
    self.getTableData();
  }

  showModal() {
    console.log('show-this', this);
    this.setState({
      visible: true
    })
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  render() {
    let self = this;
    let tableData = self.state.tableData;
    let columnsData = self.state.columns;
    let len = tableData.length;   
    
    return (
      <div>
        <div>表格展示：~</div>
        {
          len >=1 ? <Table columns={columnsData} dataSource={tableData} /> : <div>暂无数据</div>
        }

        <Modal          
          visible={this.state.visible}
          onOk={this.showModal.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <p>是这个小表格</p>          
        </Modal>
        
      </div>
    )
    
  }
}

MapPage.propTypes = {
};

export default connect()(MapPage);
