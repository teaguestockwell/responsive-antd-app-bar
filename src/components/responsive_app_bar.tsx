import {Grid} from 'antd'
import { useRef } from 'react';
import { LogoBurger } from './logo_burger';
import { ResponsiveMenu } from './responsive_menu';
import './responsive_app_bar.css'
import { SearchBar } from './search_bar';
import Search from 'antd/lib/transfer/search';
const { useBreakpoint } = Grid;



export const ResponsiveAppBar = () => {
  const {md,lg} = useBreakpoint()

  return <div style={{
    zIndex: 1,
    height: 60,
    backgroundColor: 'white',
    position: 'fixed',
    left: '0px' ,
    top: '0px',
    right: '0px',
    borderBottom: '0.05em solid #656565'
  }}>
    <LogoBurger/>

    {!md ? null : <div style={{
      marginTop: '10px',
      marginLeft: '225px',
      borderBottom: '0px'
    }}>
      <ResponsiveMenu type={'horizontal'}/>
    </div>
    }

    {!lg ? null : <div style={{      
      position: 'fixed',
      left: '500px' ,
      top: '13px',
      paddingRight: '200px',
    }}><SearchBar style={{width: '100%'}}/>
    </div>
  
    }
    
  </div>
}