console.log("Hello World")

// Typescript

// -let,const : không hỗ trợ hoistring
// -var hỗ trợ hoistring
// - //Primitive value: number,string,boolean
// const name = "Jay" //Thám Trị

// //reference value //Tham Chiếu
// - fucntion, object array bộ nhớ sẽ lưu trữ địa chỉ không phải giá trị.
// - Nên khi khai báo bằng const các biến tham chiếu có thể cho phép thay đổi giá trị vì biến chỉ lưu địa chỉ đường dẫn về ram chưa giá trị, nên khi thay đổi giá trị, đường dẫn vẫn là cũ nên nó cho phép. Nếu copy các biến này ra 1 tham chiếu mới. nếu dùng kiểu gán thường "=" thì 2 biến cùng 1 đường dẫn nên giá trị thay đổi chung
// ví dụ
// const student1 = {name:"Jay"}
// const student2 = student1
// student2.name = "Tuan"
// console.log(student1) ==> Tuan

// // Để copy phải dùng spreadOperator hoặc dùng
// const student2=  JSON.parse(JSON.stringtify(student1))
//const student2 = {...student1} 

//Varialbe
let isOffline:boolean;
isOffline = true;

let sum:number = 1+1;
let text:string = "Jay"
let numberArray:number[] = [1,2,3,4]
let student:{name:string;age:number} = {name:"Tuan",age:10}
let studentArray:{name:string;age:number}[] = [{name:"Tuan",age:90}]
studentArray.push({name:"Oanh",age:12})
console.log(studentArray);

let tupleArr:[string,number,boolean] = ["Jay",11,true]

//enum
enum actionTypes  {
    fetchProduct = "FETCH_PRODUCTS",
    editProducct = "EDIT_PRODUCTS"
}

// enum status {
//     active = "ACTIVE",
//     inactive = "INACIVE"
// }
const action:{type:actionTypes;payload:any} = {
    type:actionTypes.fetchProduct,
    payload:"Jay Here"
}

//union type

const type:string | number = 1;
//declaration function
const showName = function(){
    console.log(this)
    console.log("Hieu Thu 2")
}
showName();
///////////
const showName3 = (props) => console.log(this);
showName3("Hello");
////////////
// expression function
function showName2() {
    console.log("Hieu Thu 2")
}
showName2();

//

const countSum = (...number:string[]) =>{
    console.log(number.join(" "))
}
countSum("Hello","Jay")

//destructuring
const studentA : {name:string, age:number} = {name:"Tuan",age:90};
const {name:name1,age} = studentA
console.log(name1,age)

class Meo {
    public name :string //Khai báo phạm vi global
    private breed :string // Khai báo trong phạm vi class.
    // protected breedNew : string // Khai báo trong phạm vi trong class hoặc các class kế thừa
    constructor(name,breed){
        this.name = name
        this.breed = breed
    }
    //Method hỗ trợ đưa
    getBreed = () =>{
        return this.breed
    }
    setBreed = (newBreed) =>{
        this.breed = newBreed
    }
}
//MeoA is an instance created by class Meo
const MeoA = new Meo("Captain America","Avenger")
const breed = MeoA.getBreed()
console.log(MeoA.name,breed)

MeoA.setBreed("Ba Tu");
MeoA.name = "LuLu"
console.log(MeoA)

//  Khơi tạo 1 đối tường dùng class làm kiểu dữ liệu
let meoB : Meo
meoB = new Meo("Jay","human")

let sumCount2 :{a:number,b:number} => number;
sumCount2 = (a:string,b:number) =>{
return a+b
}
//Khai báo dữ liệu cho hàm ( là hàm trả về 1 kiểu dữ liệu nào đó)
const sumCount = (a:string,b:string):number =>{
    var c =a+b 
    return 1
}
