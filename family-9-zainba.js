// Family 9: A.T Zainba & Abdul Kadar - Target: 25 members
const family9Data = [
  // Family Heads
  {
    id: "head-9",
    name: "A.T Zainba",
    isHead: true,
    generation: 1,
    spouse: "Abdul Kadar",
    children: ["child9-1", "child9-2"],
    branch: "A.T Zainba & Abdul Kadar",
  },
  {
    id: "head-9-spouse",
    name: "Abdul Kadar",
    isHead: false,
    generation: 1,
    spouse: "A.T Zainba",
    children: ["child9-1", "child9-2"],
    branch: "A.T Zainba & Abdul Kadar",
  },

  // Generation 2 - Children (placeholder for detailed data)
  {
    id: "child9-1",
    name: "First Child of Zainba",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-9",
    children: ["grandchild9-1"],
    branch: "A.T Zainba & Abdul Kadar",
  },
  {
    id: "child9-2",
    name: "Second Child of Zainba",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-9",
    children: ["grandchild9-2"],
    branch: "A.T Zainba & Abdul Kadar",
  },

  // Generation 3 - Grandchildren (placeholder for detailed data)
  {
    id: "grandchild9-1",
    name: "Grandchild 1 of Zainba",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child9-1",
    children: [],
    branch: "A.T Zainba & Abdul Kadar",
  },
  {
    id: "grandchild9-2",
    name: "Grandchild 2 of Zainba",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child9-2",
    children: [],
    branch: "A.T Zainba & Abdul Kadar",
  },
]

// Export for use in main family data file
if (typeof window !== "undefined") {
  window.family9Data = family9Data
}

console.log("Family 9 data loaded:", family9Data.length, "members (Target: 25)")
