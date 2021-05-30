import {useState} from 'react'
import {Divider, Drawer, Menu, Button} from 'antd'
import {UserOutlined} from '@ant-design/icons'

export const ProfileMenu = ({
  signInStyle,
  avatarStyle,
  user,
}: {
  signInStyle: any
  avatarStyle: any
  user?: {email: string; img: string} | null
}) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return user ? (
    <>
      <div style={avatarStyle}>
        <img
          onClick={toggle}
          src={user.img}
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
              src={user.img}
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
            {/* TODO: add user specific links here, with the user.email */}
            <Menu.Item key={'ig.title + i.name'}>{'name'}</Menu.Item>
          </Menu.ItemGroup>
          <Divider />
        </Menu>
      </Drawer>
    </>
  ) : (
    <Button
      onClick={() => console.log('user wants to login')}
      style={signInStyle}
      type="primary"
      icon={<UserOutlined />}
    >
      Sign in
    </Button>
  )
}
