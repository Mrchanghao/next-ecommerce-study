
// class Loger<T> {
//   logger(items: Array<T>, callback: (i: T) => void) {
//     items.forEach(item => callback(item));
//   }
// }

// interface Human {
//   age: number;
// }

// interface Person extends Human {
  
//   name: number;
// }

// interface PostGraduage extends Human {
//   name: string;
//   projects: string[];
// }

// type StudentInfo<T extends Person = Person> = {
//   data: T;
//   grades: number[];
// }

interface Person {
  name: string;
}

type SingleType<T> = T extends any[] ? T[number] : unknown;

export default function play() {
  // function logInfo(info: StudentInfo) {
  //   console.log(info.data.age);
  //   console.log(info.data.name, info.grades);
  // }
  type Type1 = SingleType<string[]>;

  type Type4 = string[][number];
}