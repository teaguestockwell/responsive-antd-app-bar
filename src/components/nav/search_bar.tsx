import {Input} from 'antd'
const {Search} = Input
export const SearchBar = ({
  style,
  isHamburger,
}: {
  style?: any
  isHamburger?: boolean
}) => {
  const searchFor = `${'frame'}s`
  const onSearch = () => {}

  return (
    <div style={style}>
      <Search
        size="large"
        placeholder={`Search ${searchFor}`}
        onSearch={onSearch}
        style={{width: '100%', position: isHamburger ? 'relative' : 'absolute'}}
      />
    </div>
  )
}
