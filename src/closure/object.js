const person = () => {
    let saveName = "Default Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

let newPerson = person();

console.log(newPerson.getName());
newPerson.setName("David");
console.log(newPerson.getName());
//saveName <- no se puede acceder directamente a la variable, esto sirve como encapsulamiento