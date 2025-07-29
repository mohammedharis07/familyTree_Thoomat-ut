// Family 8: A T Aboobakker (Late) & Rasiya .P.N - Target: 18 members
const family8Data = [
  // Family Heads
  {
    id: "head-8",
    name: "A T Aboobakker",
    isHead: true,
    generation: 1,
    spouse: "Rasiya .P.N",
    children: ["child8-1", "child8-2"],
    branch: "A T Aboobakker (Late) & Rasiya .P.N",
    isDeceased: true,
  },
  {
    id: "head-8-spouse",
    name: "Rasiya .P.N",
    isHead: false,
    generation: 1,
    spouse: "A T Aboobakker",
    children: ["child8-1", "child8-2"],
    branch: "A T Aboobakker (Late) & Rasiya .P.N",
  },

  // Generation 2 - Children (placeholder for detailed data)
  {
    id: "child8-1",
    name: "First Child of Aboobakker",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-8",
    children: ["grandchild8-1"],
    branch: "A T Aboobakker (Late) & Rasiya .P.N",
  },
  {
    id: "child8-2",
    name: "Second Child of Aboobakker",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-8",
    children: ["grandchild8-2"],
    branch: "A T Aboobakker (Late) & Rasiya .P.N",
  },

  // Generation 3 - Grandchildren (placeholder for detailed data)
  {
    id: "grandchild8-1",
    name: "Grandchild 1 of Aboobakker",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child8-1",
    children: [],
    branch: "A T Aboobakker (Late) & Rasiya .P.N",
  },
  {
    id: "grandchild8-2",
    name: "Grandchild 2 of Aboobakker",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child8-2",
    children: [],
    branch: "A T Aboobakker (Late) & Rasiya .P.N",
  },
]

// Export for use in main family data file
if (typeof window !== "undefined") {
  window.family8Data = family8Data
}

console.log("Family 8 data loaded:", family8Data.length, "members (Target: 18)")
