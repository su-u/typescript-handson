const student = {
    id: 1732000,
    name: 'typescript',
};

const outputStudent = (student) => {
    console.log(student.name);
    // studentにはnumberのプロパティが存在していないが実行できる
    console.log(student.number);
};

outputStudent(student);
