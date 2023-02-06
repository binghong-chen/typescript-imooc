interface Foo {
    type: 'foo'
  }
  
  interface Bar {
    type: 'bar'
  }
  
  type All = Foo | Bar
  
  function handleValue(val: All) {
    switch (val.type) {
      case 'foo':
        break
      case 'bar':
        break
      default:
        // 此处不能取值
        const exhaustiveCheck: never = val
        break
    }
  }
  