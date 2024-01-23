import { CustomSearch } from '@/shared/component/header/style/header.style';
import { SearchProps } from '@/shared/component/pagination/model/search.model';

function Pagination ( props: SearchProps) {
 const { placeholder, name, value, handleChange } = props;
 return(
  <CustomSearch name={name} placeholder={placeholder} onChange={handleChange} value={value} />
 );
}

export default Pagination;
