export type Person = {
  age: number;
  firstName: string;
  lastName: string;
};

export function getAge(person: Pick<Person, "age">) {
  return person.age;
}

export function getName(person: Pick<Person, "firstName" | "lastName">) {
  return `${person.firstName} ${person.lastName}`;
}
