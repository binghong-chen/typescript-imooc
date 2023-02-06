function isString(s: unknown): boolean {
    return typeof s === 'string'
  }
  
  function toUpperCase(x: unknown) {
    if(isString(x)) {
      x.toUpperCase() // Error, Object is of type 'unknown' “x”的类型为“未知”。
    }
  }
  