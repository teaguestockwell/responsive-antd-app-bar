import { Menu } from 'antd';

export const ResponsiveMenu = ({type}: {type: 'horizontal' | 'inline'}) => {
  const defaultOpen = type === 'horizontal' ? [] : ['sub1','sub2','sub3','sub4']
  return <Menu mode={type} style={{width: '100%'}}>
      <Menu.SubMenu key="sub1" title={<span>Blogs</span>}>
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" title={<span>Blogs</span>}>
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub3" title={<span>Blogs</span>}>
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub4" title={<span>Blogs</span>}>
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </Menu.SubMenu>
    </Menu>
}