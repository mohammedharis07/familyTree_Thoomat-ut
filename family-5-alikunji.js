// Family 5: A.T AliKunji (Late) & P.K Kunhipathunni - Target: 22 members
const family5Data = [
  // Family Heads
  {
    id: "head-5",
    name: "A.T AliKunji",
    isHead: true,
    generation: 1,
    spouse: "P.K Kunhipathunni",
    children: ["child5-1", "child5-2"],
    branch: "A.T AliKunji (Late) & P.K Kunhipathunni",
    isDeceased: true,
  },
  {
    id: "head-5-spouse",
    name: "P.K Kunhipathunni",
    isHead: false,
    generation: 1,
    spouse: "A.T AliKunji",
    children: ["child5-1", "child5-2"],
    branch: "A.T AliKunji (Late) & P.K Kunhipathunni",
  },

  // Generation 2 - Children (placeholder for detailed data)
  {
    id: "child5-1",
    name: "First Child of AliKunji",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-5",
    children: ["grandchild5-1", "grandchild5-2"],
    branch: "A.T AliKunji (Late) & P.K Kunhipathunni",
  },
  {
    id: "child5-2",
    name: "Second Child of AliKunji",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-5",
    children: ["grandchild5-3", "grandchild5-4"],
    branch: "A.T AliKunji (Late) & P.K Kunhipathunni",
  },

  // Generation 3 - Grandchildren (placeholder for detailed data)
  {
    id: "grandchild5-1",
    name: "Grandchild 1 of AliKunji",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child5-1",
    children: [],
    branch: "A.T AliKunji (Late) & P.K Kunhipathunni",
  },
  {
    id: "grandchild5-2",
    name: "Grandchild 2 of AliKunji",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child5-1",
    children: [],
    branch: "A.T AliKunji (Late) & P.K Kunhipathunni",
  },
  {
    id: "grandchild5-3",
    name: "Grandchild 3 of AliKunji",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child5-2",
    children: [],
    branch: "A.T AliKunji (Late) & P.K Kunhipathunni",
  },
  {
    id: "grandchild5-4",
    name: "Grandchild 4 of AliKunji",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child5-2",
    children: [],
    branch: "A.T AliKunji (Late) & P.K Kunhipathunni",
  },
]

// Export for use in main family data file
if (typeof window !== "undefined") {
  window.family5Data = family5Data
}

console.log("Family 5 data loaded:", family5Data.length, "members (Target: 22)")
