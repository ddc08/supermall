module.exports ={
  configureWebpack: {
    resolve:{
      alias:{
        //起别名
        'assets':'@/assets',
        'commom':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}