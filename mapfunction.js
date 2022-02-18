const users=[
    {firstName:"mounika",lastName:"Reddy",age:27},
    {firstName:"Pravalika",lastName:"Reddy",age:25},
    {firstName:"jagdish",lastName:"Reddy",age:27},
    {firstName:"Madhu",lastName:"Reddy",age:30}
];
/*const output = users.map((x)=>x.firstName+" "+x.lastName);
console.log(output);

const output1 = users.reduce(function(acc,curr)
{
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;

},{});
console.log(output1);

const output = users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(output);
*/
const output = users.reduce(function(acc,curr)
{
    if(curr.age>25){
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(output);
