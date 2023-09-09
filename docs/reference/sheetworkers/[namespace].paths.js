// export default {
//   paths() {
//     return [
//       {params:{name:'test'}},
//       {params:{name:'2nd page'}}
//     ]
//   }
// }
import { js } from '../../data'

const paths = () => {
  const pathArr = Object.entries(js).map(
    ([namespace,contents]) => (
      {
        params:{
          namespace
        }
      }
    )
  );
  return pathArr;
}
export default { paths }