import { Input } from "antd"
const {Search} = Input
export const SearchBar = ({style}: {style: any}) => {
  const searchFor = `${'frame'}s`
  const onSearch = () => {}

  return <Search 
    placeholder={`Search ${searchFor}`} 
    onSearch={onSearch} 
    style={{
      width: 200,
      ...style,
    }} />
}