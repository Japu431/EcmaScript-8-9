const { angular, ...frameworks } = cursos;

console.log("angular:", angular);

console.log('Frameworks:', frameworks);


const novosCursos = { angular, ...frameworks };

console.log("novos:" , novosCursos)
