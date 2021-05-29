import {Grid} from 'antd'
import {TopMenu} from './top_menu'
import {SearchBar} from './search_bar'
import { HamMenu } from './ham_menu'
import {menuData} from './test_data'
import './style.css'
import src from './logo.png'

export const Nav = () => {
  const {md, lg} = Grid.useBreakpoint()

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
      
      <HamMenu data={menuData} style={{
         zIndex: 1,
         position: 'fixed',
         left: 0,
      }}/>

      <div style={{
        position: 'fixed',
        zIndex: 1,
        left: 64,
        top: 5,
      }}>
        <img src={src} alt="my logo"/>
      </div>
      

      {lg && (
        <TopMenu
          itemGroups={menuData.filter((x,i) => i<3)}
          style={{
            zIndex: 1,
            position: 'fixed',
            top: 10,
            left: 225,
          }}
        />
      )}

      {md && (
        <SearchBar
          style={{
            zIndex: 1,
            position: 'fixed',
            top: 12,
            left: lg ? 500 : 250,
            right: 100
          }}
        />
      )}
    </>
  )
}
