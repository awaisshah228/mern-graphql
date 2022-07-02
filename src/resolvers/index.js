import _ from 'lodash'
import testResolver from './testResolver.js'
import testResolver2 from './testResolver2.js'
const ans= await testResolver2;
// console.log()
// ans.Query.hi().then(res=>console.log(res))
// console.log(ans)
// console.log()
console.log(_.merge(testResolver,testResolver2))


export default _.merge(testResolver,testResolver2)

// export default resolver= _.merge(
//    testResolver
// )
    // resolvers
