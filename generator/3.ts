function* generatorFunction() {
    console.log('开始执行')
    yield 'Hello, '
    
    console.log('暂停后再次执行')
    yield 'World!'
  }
  
  let iterator = generatorFunction()
  
  console.log(iterator.next().value)
  // 开始执行
  // Hello,
  console.log(iterator.next().value)
  // 暂停后再次执行
  // World!
  console.log(iterator.next())	// {value: undefined, done: true}