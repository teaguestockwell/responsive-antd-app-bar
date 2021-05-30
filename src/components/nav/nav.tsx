import {Grid} from 'antd'
import {TopMenu} from './top_menu'
import {SearchBar} from './search_bar'
import {HamMenu} from './ham_menu'
import {menuData} from './test_data'
import './style.css'
import src from './logo.png'
import {ProfileMenu} from './profile_menu'

export const Nav = () => {
  const {sm, md} = Grid.useBreakpoint()

  return (
    <>
      <div
        style={{
          zIndex: 1,
          height: 65,
          backgroundColor: 'white',
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          borderBottom: '0.05em solid #656565',
        }}
      />

      <HamMenu
        data={menuData}
        style={{
          zIndex: 1,
          position: 'fixed',
          left: 0,
        }}
      />

      <div
        onClick={() => {}}
        style={{
          position: 'fixed',
          zIndex: 1,
          left: 64,
          top: 5,
          cursor: 'pointer',
        }}
      >
        <img src={src} alt="my logo" />
      </div>

      {md && (
        <TopMenu
          itemGroups={menuData.filter((x, i) => i < 3)}
          style={{
            zIndex: 1,
            position: 'fixed',
            top: 10,
            left: 225,
            width: 300
          }}
        />
      )}

      {sm && (
        <SearchBar
          style={{
            zIndex: 1,
            position: 'fixed',
            top: 12,
            left: md ? 500 : 250,
            right: 76,
          }}
        />
      )}

      <ProfileMenu
        style={{
          zIndex: 1,
          position: 'fixed',
          top: 14,
          right: 18,
          cursor: 'pointer',
        }}
      />
    </>
  )
}
