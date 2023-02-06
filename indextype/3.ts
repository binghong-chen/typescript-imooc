class Token {
    public secret: string = 'ixeFoe3x.2doa'
    public accessExp: number = 60 * 60
    public refreshExp: number = 60 * 60 * 24 * 30 * 3
}

type token = keyof Token
type valueType = Token[token] // type valueType = string | number
type secret = Token['secret'] // type secret = string

