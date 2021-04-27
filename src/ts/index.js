var _this = this;
console.log("Hello World");
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
var isOffline;
isOffline = true;
var sum = 1 + 1;
var text = "Jay";
var numberArray = [1, 2, 3, 4];
var student = { name: "Tuan", age: 10 };
var studentArray = [{ name: "Tuan", age: 90 }];
studentArray.push({ name: "Oanh", age: 12 });
console.log(studentArray);
var tupleArr = ["Jay", 11, true];
//enum
var actionTypes;
(function (actionTypes) {
    actionTypes["fetchProduct"] = "FETCH_PRODUCTS";
    actionTypes["editProducct"] = "EDIT_PRODUCTS";
})(actionTypes || (actionTypes = {}));
// enum status {
//     active = "ACTIVE",
//     inactive = "INACIVE"
// }
var action = {
    type: actionTypes.fetchProduct,
    payload: "Jay Here"
};
//union type
var type = 1;
//declaration function
var showName = function () {
    console.log(this);
    console.log("Hieu Thu 2");
};
showName();
///////////
var showName3 = function (props) { return console.log(_this); };
showName3("Hello");
////////////
// expression function
function showName2() {
    console.log("Hieu Thu 2");
}
showName2();
//
var countSum = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    console.log(number.join(" "));
};
countSum("Hello", "Jay");
//destructuring
var studentA = { name: "Tuan", age: 90 };
var name1 = studentA.name, age = studentA.age;
console.log(name1, age);
var Meo = /** @class */ (function () {
    // protected breedNew : string // Khai báo trong phạm vi trong class hoặc các class kế thừa
    function Meo(name, breed) {
        var _this = this;
        //Method hỗ trợ đưa
        this.getBreed = function () {
            return _this.breed;
        };
        this.setBreed = function (newBreed) {
            _this.breed = newBreed;
        };
        this.name = name;
        this.breed = breed;
    }
    return Meo;
}());
//MeoA is an instance created by class Meo
var MeoA = new Meo("Captain America", "Avenger");
var breed = MeoA.getBreed();
console.log(MeoA.name, breed);
MeoA.setBreed("Ba Tu");
MeoA.name = "LuLu";
console.log(MeoA);
