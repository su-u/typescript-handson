interface Student {
    id: number;
    name: string;
}

const student: Student = {
    id: 1732000,
    name: 'typescript',
};

const outputStudent = (student: Student) => {
    console.log(student.id);
    // console.log(student.name); ※"「student.」"まで入力するとプロパティの候補がでる

    // console.log(student.score); ※"「student.」"まで入力するとプロパティの候補がでる

};

outputStudent(student);

