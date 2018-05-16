import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import moment from 'moment'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import stylesheet from './../assets/scss/style.scss'

export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3080/v1/home')
    const json = await res.json()
    return { stars: json.data }
  }

  render() {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Layout>
          <Header>Header111</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>

        <ul>
          {this.props.stars.map((v, i) => {
            let _t = moment(v.publishTime).format('YYYY年MM月DD日');
            let _link = `articles/${v._id}`
            let _linkEdit = `articles/edit/${v._id}`
            return (
              <li key={i}>
                <Link prefetch href={_link}>
                  <a>
                    <h3>{v.title} </h3>
                    <p>{_t} </p>
                    <p>{v.info} + '</p>
                  </a>
                </Link>
                <Link prefetch href={_linkEdit}><a>编辑</a></Link>
              </li>
            )
          })}
        </ul>
      </>
    )

  }
}