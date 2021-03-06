import {Button, Divider, Drawer, Menu} from 'antd'
import {SearchBar} from './search_bar'
import {MenuOutlined} from '@ant-design/icons'
import {useState} from 'react'

export type MenuProp = Array<{
  title: string
  items: Array<{
    name: string
    a: string
  }>
}>

export const HamMenu = ({
  data: itemGroups,
  style,
}: {
  data: MenuProp
  style?: any
}) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div style={style}>
      <Button onClick={toggle} icon={<MenuOutlined style={{
          height: '30px',
          fontSize: '150%',
      }} />} style={{border: 0, background: 'transparent', boxShadow:'none'}} />

      <Drawer
        closable={false}
        style={{padding: '0px'}}
        title={<SearchBar isHamburger />}
        placement="left"
        visible={open}
        onClose={toggle}
      >
        <Menu mode="inline" style={{width: '100%', padding: '10px'}}>
          {itemGroups.map((ig) => (
            <div key={ig.title}>
              <Menu.ItemGroup title={ig.title}>
                {ig.items.map((i) => (
                  // TODO: next router here
                  <Menu.Item key={ig.title + i.name}>{i.name}</Menu.Item>
                ))}
              </Menu.ItemGroup>
              <Divider />
            </div>
          ))}
        </Menu>
      </Drawer>
    </div>
  )
}
