import {Menu} from 'antd'
import {MenuProp} from './ham_menu'
import {CaretDownOutlined} from '@ant-design/icons'

export const TopMenu = ({
  itemGroups,
  style,
}: {
  itemGroups: MenuProp
  style?: any
}) => {
  return (
    <Menu 
    mode={'horizontal'} 
    style={{width: '100%', ...style}} 
    triggerSubMenuAction={'click'}

    forceSubMenuRender>
      {itemGroups.map((ig) => (
        <Menu.SubMenu key={ig.title} title={ig.title} icon={<CaretDownOutlined/>}>
          {ig.items.map((i) => (
            <Menu.Item key={ig.title + i.name}>{i.name}</Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}
