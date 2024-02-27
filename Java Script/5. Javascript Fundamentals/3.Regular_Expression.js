function func(regex, string){
    if(string.match(regex)){
        return string.match(regex)
    
    }
    else 
    return "not found"
}
const regex=/[a-z]+pw/g;
const string="edupw is growing at a rapaid speed and recently they are working on edupwsills to create skills based edupwcontent";
console.log(func(regex,string));

const regex1=/[0-9]+[a-z]/g;
const string1="My friend is 22years and he is 5feet"
console.log(func(regex1,string1));

const regex2=/[A-Z]+T/g;
const string2="my friend is look very handsome and INTELLIGNT"
console.log(func(regex2,string2));

const regex3=/[+\-\;]/g;
const string3="pw is edu-Tech insitution;"
console.log(func(regex3,string3));
