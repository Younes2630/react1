export default {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender : "Male",
    email: "kurt@wonnegut.dk"
    }
    
    export const males = ["Peter","Jan"];
    export const females = ["Janne","Sarah"];


    const all = [...males, ...females];
    const everybody = [...males, "Kurt", "Helle", ...females, "Tina"];
    console.log(all);
    console.log(everybody);

    export const names = [
        {firstName:"Kurt",lastName:"Wonnegut",gender: "Male",email: "k@wonnegut.dk", phone: "12345"},
        {firstName:"Jane",lastName:"Wonnegut",gender:"female",email:"j@wonnegut.dk", phone: "12345"},
        {firstName:"ib",lastName: "Wonnegut",gender : "Male",email: "i@wonnegut.dk", phone: "12345"},
        ];
        

