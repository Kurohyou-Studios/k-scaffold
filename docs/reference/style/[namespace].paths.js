// export default {
//   paths() {
//     return [
//       {params:{name:'test'}},
//       {params:{name:'2nd page'}}
//     ]
//   }
// }
import { scss } from '../../data'

const paths = () => {
  const pathArr = Object.entries(scss).map(
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