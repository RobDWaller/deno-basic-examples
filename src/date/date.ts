import { 
  parseDate, 
  parseDateTime, 
  difference,
  isLeap,
} from "https://deno.land/std@0.61.0/datetime/mod.ts";

const myDate: Date = parseDate("2020-07-27", "yyyy-mm-dd");
console.log(myDate.toISOString());

const myDateTime: Date = parseDateTime("2020-07-06 10:05", "yyyy-mm-dd hh:mm");
console.log(myDateTime.toISOString());

const theDiff = difference(myDate, myDateTime, {units: ["days"]});
console.log(theDiff);

console.log(isLeap(2019));
console.log(isLeap(2020));