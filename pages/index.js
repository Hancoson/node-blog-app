/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-17 11:11:57 
 * @version 0.0.1 
 */
import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import moment from 'moment'

import config from './../config/config'

import MianLayout from '../components/layout'




export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`${config.host}:${config.port}/${config.apiVersion}/home`)
    const json = await res.json()
    return { stars: json.data }
  }

  render() {
    return (
      <MianLayout>

        <ul className="index-items">
          {this.props.stars.map((v, i) => {
            let _t = moment(v.publishTime).format('YYYY年MM月DD日');
            let _linkEdit = `articles/edit/${v._id}`
            return (
              <li key={i}>
                <Link href={{ pathname: '/article', query: { id: v._id } }} as={`/article/${v._id}`}><a className="title">{v.title} </a></Link>
                <div className="times">
                  {_t}
                </div>
                <div className="content">
                  {v.info}
                </div>
              </li>
            )
          })}
        </ul>
      </MianLayout>
    )
  }
}