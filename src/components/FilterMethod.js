var creatures = [
  { name: "Shark", habitat: "Ocean" },
  { name: "Whale", habitat: "Ocean" },
  { name: "Lion", habitat: "Savanna" },
  { name: "Monkey", habitat: "Jungle" },
];

const filteredData = creatures.filter((creatures) => {
  return creatures.habitat == "ocean";
});
console.log(filteredData);
