/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-17 11:12:47 
 * @version 0.0.1 
 */
import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import moment from 'moment'

import config from './../config/config'

import MianLayout from '../components/layout'

export default class Index extends React.Component {
  static async getInitialProps(query) {
    const res = await fetch(`${config.host}:${config.port}/${config.apiVersion}/article/${query.query.id}`)
    const json = await res.json()

    return { ...json[0] }
  }

  render() {
    const props = this.props
    if (!props.title) {
      return (
        <MianLayout title={404}>
          <div className="article">
            404
          </div>
        </MianLayout>
      )
    }
    else {
      return (
        <MianLayout title={props.title}>
          <div className="article">
            <h2>{props.title}</h2>
            <div className="time">
              <span>发布时间：{moment(props.publishTime).format('YYYY/MM/DD HH:MM:SS')}</span>
              <span>
                <Link prefetch
                  href={{ pathname: '/admin/edit', query: { id: props._id } }}
                  as={`/admin/edit/${props._id}`}>
                  <a>编辑</a>
                </Link>
              </span>
            </div>
            <div className="info">{props.info}</div>
          </div>
        </MianLayout>
      )
    }
  }
}