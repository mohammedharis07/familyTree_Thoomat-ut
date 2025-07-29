// Family 10: A T Ibrahim Kutty & Zohra Ibrahim - Target: 16 members
const family10Data = [
  // Family Heads
  {
    id: "head-10",
    name: "A T Ibrahim Kutty",
    isHead: true,
    generation: 1,
    spouse: "Zohra Ibrahim",
    children: ["child10-1", "child10-2"],
    branch: "A T Ibrahim Kutty & Zohra Ibrahim",
  },
  {
    id: "head-10-spouse",
    name: "Zohra Ibrahim",
    isHead: false,
    generation: 1,
    spouse: "A T Ibrahim Kutty",
    children: ["child10-1", "child10-2"],
    branch: "A T Ibrahim Kutty & Zohra Ibrahim",
  },

  // Generation 2 - Children (placeholder for detailed data)
  {
    id: "child10-1",
    name: "First Child of Ibrahim Kutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-10",
    children: ["grandchild10-1"],
    branch: "A T Ibrahim Kutty & Zohra Ibrahim",
  },
  {
    id: "child10-2",
    name: "Second Child of Ibrahim Kutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-10",
    children: ["grandchild10-2"],
    branch: "A T Ibrahim Kutty & Zohra Ibrahim",
  },

  // Generation 3 - Grandchildren (placeholder for detailed data)
  {
    id: "grandchild10-1",
    name: "Grandchild 1 of Ibrahim Kutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child10-1",
    children: [],
    branch: "A T Ibrahim Kutty & Zohra Ibrahim",
  },
  {
    id: "grandchild10-2",
    name: "Grandchild 2 of Ibrahim Kutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child10-2",
    children: [],
    branch: "A T Ibrahim Kutty & Zohra Ibrahim",
  },
]

// Export for use in main family data file
if (typeof window !== "undefined") {
  window.family10Data = family10Data
}

console.log("Family 10 data loaded:", family10Data.length, "members (Target: 16)")
