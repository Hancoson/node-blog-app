/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-17 16:40:40 
 * @version 0.0.1 
 */

import React from 'react'
import Link from 'next/link'
import axios from 'axios';

import { Form, Input, TextArea, Button, Row, Col } from 'antd';
const FormItem = Form.Item;

import config from '../../config/config'

import MianLayout from '../../components/layout'

class MyForm extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    const that = this
    const _url = this.props.url
    axios({
      method: 'get',
      url: `${config.host}:${config.port}/${config.apiVersion}/article/${_url.query.id}`,
    }).then(res => {
      const data = res.data
      console.log(data)
      that.setState({
        data: data[0]
      })
    }).then(err => {
      console.log(err)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state
    const that = this
    const _url = this.props.url
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios({
          method: 'post',
          url: `${config.host}:${config.port}/${config.apiVersion}/edit/${_url.query.id}`,
          data: Object.assign({}, values)
        }).then(res => {
          console.log(res)
        }).then(err => {
          console.log(err)
        })

      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { data } = this.state
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <MianLayout>
        <Form onSubmit={this.handleSubmit} className="login-form edit-warp">
          <FormItem
            {...formItemLayout}
            label="标题">
            {getFieldDecorator('title', {
              initialValue: data.title,
              rules: [{ required: true, message: '请输入标题!' }],
            })(
              <Input placeholder="标题" values />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="内容">
            {getFieldDecorator('info', {
              initialValue: data.info,
              rules: [{ required: true, message: '请输入内容！' }],
            })(

              <Input placeholder="内容" />
            )}
          </FormItem>
          <FormItem>
            <div className="btn">
              <Button type="primary" size="large" htmlType="submit" className="login-form-button">确 认</Button>
            </div>
          </FormItem>
        </Form>
      </MianLayout>
    )
  }
}

const WrappedForm = Form.create()(MyForm);

export default WrappedForm