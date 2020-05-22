interface Student {
    id: number;
    name: string;
}

const student: Student = {
    id: 1732000,
    name: 'typescript',
};

const outputStudent = (student: Student) => {
    console.log(student.name);
    // studentにはnumberのプロパティがないのでエラーがでる
    // console.log(student.number);
};

outputStudent(student);

