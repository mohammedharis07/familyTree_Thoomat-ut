// Family 7: A.T Aminakutty (Late) & A.M Bayu (Late) - Target: 29 members
const family7Data = [
  // Family Heads
  {
    id: "head-7",
    name: "A.T Aminakutty",
    isHead: true,
    generation: 1,
    spouse: "A.M Bayu",
    children: ["child7-1", "child7-2"],
    branch: "A.T Aminakutty (Late) & A.M Bayu (Late)",
    isDeceased: true,
  },
  {
    id: "head-7-spouse",
    name: "A.M Bayu",
    isHead: false,
    generation: 1,
    spouse: "A.T Aminakutty",
    children: ["child7-1", "child7-2"],
    branch: "A.T Aminakutty (Late) & A.M Bayu (Late)",
    isDeceased: true,
  },

  // Generation 2 - Children (placeholder for detailed data)
  {
    id: "child7-1",
    name: "First Child of Aminakutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-7",
    children: ["grandchild7-1"],
    branch: "A.T Aminakutty (Late) & A.M Bayu (Late)",
  },
  {
    id: "child7-2",
    name: "Second Child of Aminakutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-7",
    children: ["grandchild7-2"],
    branch: "A.T Aminakutty (Late) & A.M Bayu (Late)",
  },

  // Generation 3 - Grandchildren (placeholder for detailed data)
  {
    id: "grandchild7-1",
    name: "Grandchild 1 of Aminakutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child7-1",
    children: [],
    branch: "A.T Aminakutty (Late) & A.M Bayu (Late)",
  },
  {
    id: "grandchild7-2",
    name: "Grandchild 2 of Aminakutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child7-2",
    children: [],
    branch: "A.T Aminakutty (Late) & A.M Bayu (Late)",
  },
]

// Export for use in main family data file
if (typeof window !== "undefined") {
  window.family7Data = family7Data
}

console.log("Family 7 data loaded:", family7Data.length, "members (Target: 29)")
