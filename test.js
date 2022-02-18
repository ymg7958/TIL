const bruce = { name: "bruce" };
const madeline = { name: "madeline" };

function update(birthyear, occupation) {
  this.birthyear = birthyear;
  this.occupation = occupation;
}

update.call(bruce, 1949, "singer");
console.log(bruce);
