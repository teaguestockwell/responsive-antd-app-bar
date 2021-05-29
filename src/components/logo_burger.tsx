import { Drawer, Button, Row, Col } from 'antd';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import img from '../img/app_logo.png'
import './logo_burger.css'
import { SearchBar } from './search_bar';
import { ResponsiveMenu } from './responsive_menu';

const logo = <img src={img} alt="my logo" ></img>
// pass in menu to preserve state from top nav => side nav
export const LogoBurger = () => { 
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return <>
    <Row justify="start" style={{ 
      position: 'fixed',
      left: '0px' ,
      top: '0px',
      width: '220px'
    }}>
      <Col>
        <Button onClick={toggle} icon={<MenuOutlined/>} style={{marginTop: '15px', marginLeft: '15px', border: '0px solid transparent'}}/>
      </Col>
      <Col>
        {<div style={{marginTop: '6px', marginLeft: '15px'}}>{logo}</div>}
      </Col>
    </Row>
    <Drawer
      style={{padding: '0px'}}
      title={<SearchBar style={{width: '100%',}}/>}
      placement="left"
      closable={false}
      visible={open}
      onClose={toggle}
    >{
      <ResponsiveMenu type={'inline'}/>
    }</Drawer>
</>
}