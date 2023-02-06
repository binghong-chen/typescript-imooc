interface Person {
  name: string
  age: number
}

type PersonOptional = Partial<Person>
type PersonReadonly = Readonly<Person>
