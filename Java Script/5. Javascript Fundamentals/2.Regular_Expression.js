function Isinput(pattern, string){

    const regex = new RegExp(pattern);

    // Test if the input string matches the regular expression
    return regex.test(string);
}
const pattern1=/\d+/;
const pattern2=/[a-z]+[A-Z]/i;
const pattern3=/^Hello/;

const string1="0123456789"
const string2="abcXYZ";
const string3="Hello, World";

console.log(Isinput(pattern1,string1));
console.log(Isinput(pattern2,string2));
console.log(Isinput(pattern3,string3));

const nonMatchingstring="No matchh here";
console.log(Isinput(pattern1, nonMatchingstring));





