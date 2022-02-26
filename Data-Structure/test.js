const names = ["Max", "jManu", "Max"];
console.log(names[1]);
console.log(names.length);

for (const el of names) {
  console.log(el);
}

names.push("Julie");
console.log(names);
names.splice(2, 1);
console.log(names);
