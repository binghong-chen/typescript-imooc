function* gen():IterableIterator<number>  {
    console.log('开始执行')
    let res1 = yield 1
    console.log('中断后继续执行')
    console.log(res1)
    
    let res2 = yield 2
    console.log(res2)
    
    console.log('执行结束')
    return 3
  }
  
  let iterator = gen()
  // @ts-ignore
  console.log(iterator.next('first'))
  // @ts-ignore
  console.log(iterator.next('second'))
  // @ts-ignore
  console.log(iterator.next('third'))

  export default {}