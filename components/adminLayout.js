/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-17 13:57:38 
 * @version 0.0.1 
 */
import Link from 'next/link'
import Head from 'next/head'
import link from 'next/dist/lib/link';

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import stylesheet from './../assets/scss/style.scss'

export default ({ children, title = '管理后台' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header>
      <div className="main">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">添加</Menu.Item>

        </Menu>
      </div>
    </Header>
    <Content>
      <div className="main">
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      ©2018 Created by Hancoson
    </Footer>
  </>
)