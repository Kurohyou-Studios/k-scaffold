// export default {
//   paths() {
//     return [
//       {params:{name:'test'}},
//       {params:{name:'2nd page'}}
//     ]
//   }
// }
import { pug } from '../../data'

const paths = () => {
  const pathArr = Object.entries(pug).map(
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