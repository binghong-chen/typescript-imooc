interface User {
    id: number,
    phone: string,
    nickname: string,
    readonly department: string,
}

class Token {
    private secret: string | undefined
    public accessExp: number = 60 * 60
    public refreshExp: number = 60 * 60 * 24 * 30 * 3
}

let user: keyof User // let user: "id" | "phone" | "nickname" | "department"

user = 'id'

console.log(user)

type token = keyof Token // type token = "accessExp" | "refreshExp"

let myToken: token = 'accessExp'