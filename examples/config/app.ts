import axios from '../../src/index'
import qs from 'qs'
axios.defaults.headers.common['test2'] = 123

axios({
  method: 'post',
  url: '/config/post',
  data: qs.stringify({
    a: 1,
    b: 2
  }),
  headers: {
    test: '123456'
  }
}).then(res => {
  console.log(res.data)
})
