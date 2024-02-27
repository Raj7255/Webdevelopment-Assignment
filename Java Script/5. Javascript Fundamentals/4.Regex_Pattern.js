function extractDataInfo(regexPattern, regexString) {
  const regex = new RegExp(regexPattern);

  const match = regexString.match(regex);
  console.log(match);

if (match) {
  const Inputdate = [, day, month, year]=match;
  console.log(`day=${day},month=${month}, year=${year}`);
} else {
  return "not found";
}
}

const pattern1 = /(\d{2})-(\d{2})-(\d{4})/;
const string1 = "16-02-2024";
extractDataInfo(pattern1,string1)