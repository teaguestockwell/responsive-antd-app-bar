import {useState} from 'react'
import {Divider, Drawer, Menu} from 'antd'

export const ProfileMenu = ({style}: {style?: any}) => {
  const url =
    'https://lh3.googleusercontent.com/a/AATXAJxZPhzcF9yMhc7yn2bFteLI3KpuEpQJ48h1fQm_=s96-c'
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <>
      <div style={style}>
        <img
          onClick={toggle}
          src={url}
          alt={'profile pic'}
          style={{
            borderRadius: 100,
            height: 36,
            width: 36,
          }}
        ></img>
      </div>
      <Drawer
        closable={false}
        style={{padding: '0px'}}
        placement="right"
        visible={open}
        onClose={toggle}
        title={
          <div style={{display: 'flex', padding: '6px 0px'}}>
            <img
              src={url}
              alt={'profile pic'}
              style={{
                borderRadius: 100,
                height: 36,
                width: 36,
              }}
            ></img>
            <div
              style={{
                marginLeft: 14,
                overflowWrap: 'break-word',
                width: '-webkit-fill-available',
              }}
            >
              <h2>
                A super duper long name here, and some more. Ok thats long
                enough
              </h2>
            </div>
          </div>
        }
      >
        <Menu mode="inline" style={{width: '100%', padding: '10px'}}>
          <Menu.ItemGroup key={'title'} title={'title'}>
            <Menu.Item key={'ig.title + i.name'}>{'name'}</Menu.Item>
          </Menu.ItemGroup>
          <Divider />
        </Menu>
      </Drawer>
    </>
  )
}
