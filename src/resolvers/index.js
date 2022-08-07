import _ from 'lodash';
import testResolver from './test.resolver.js';
import testResolver2 from './test2.resolver.js';


export default _.merge(testResolver, testResolver2);


