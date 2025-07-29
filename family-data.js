// Complete Family Data - All 10 families based on the correct family structure
console.log("Loading family data for all 10 families...")

// Family 1: A T Mohamed unny (Late) & P.M Kochu Rabiya - 23 members
const mohamedunnyFamily = [
  // Family Heads
  {
    id: "head-1",
    name: "A T Mohamed unny",
    isHead: true,
    generation: 1,
    spouse: "P.M Kochu Rabiya",
    children: ["najuma", "nazir", "naseema", "najeeba"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
    isDeceased: true,
  },
  {
    id: "head-1-spouse",
    name: "P.M Kochu Rabiya",
    isHead: false,
    generation: 1,
    spouse: "A T Mohamed unny",
    children: ["najuma", "nazir", "naseema", "najeeba"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },

  // Generation 2 - Children
  {
    id: "najuma",
    name: "Najuma PM",
    profession: "Retired Head Mistress",
    qualification: "BSc, B.Ed",
    contact: "0091 9497824025",
    isHead: false,
    generation: 2,
    parentId: "head-1",
    spouse: "Dr CV Abdulla Kutty",
    children: ["afdal", "aysha-nasrene", "aslam"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "najuma-spouse",
    name: "Dr CV Abdulla Kutty",
    profession: "Retired Principal",
    qualification: "MA, PhD",
    contact: "0091 9447944198",
    isHead: false,
    generation: 2,
    spouse: "Najuma PM",
    children: ["afdal", "aysha-nasrene", "aslam"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "nazir",
    name: "PM Nazir",
    profession: "Business",
    qualification: "B.A",
    contact: "00971 55 9484721",
    isHead: false,
    generation: 2,
    parentId: "head-1",
    spouse: "Shainas Alamana Mohamed Haneefa",
    children: ["abbas-nazir", "aysha-nazir"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "nazir-spouse",
    name: "Shainas Alamana Mohamed Haneefa",
    profession: "Homemaker",
    qualification: "B.A",
    contact: "00971 54 4890592",
    isHead: false,
    generation: 2,
    spouse: "PM Nazir",
    children: ["abbas-nazir", "aysha-nazir"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "naseema",
    name: "Naseema P.M.",
    profession: "Homemaker",
    qualification: "Pre-degree, Diploma in Home Sciences",
    contact: "0091 9746799307",
    isHead: false,
    generation: 2,
    parentId: "head-1",
    spouse: "Abdul Majeed N.P",
    children: ["adeeb", "farhana", "adheela"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "naseema-spouse",
    name: "Abdul Majeed N.P",
    isHead: false,
    generation: 2,
    spouse: "Naseema P.M.",
    children: ["adeeb", "farhana", "adheela"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "najeeba",
    name: "Najeeba PM",
    profession: "Homemaker",
    qualification: "B.A",
    contact: "0091 9946955299",
    isHead: false,
    generation: 2,
    parentId: "head-1",
    spouse: "Mohammed Salim K.H",
    children: ["salman", "shehzad", "zaahir"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "najeeba-spouse",
    name: "Mohammed Salim K.H",
    profession: "Retired Head Master",
    qualification: "MSc, B.Ed",
    contact: "0091 9447920072",
    isHead: false,
    generation: 2,
    spouse: "Najeeba PM",
    children: ["salman", "shehzad", "zaahir"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },

  // Generation 3 - Grandchildren
  {
    id: "afdal",
    name: "Afdal Abdulla",
    profession: "Information Security Officer",
    qualification: "BE",
    contact: "00974 70002766",
    isHead: false,
    generation: 3,
    parentId: "najuma",
    spouse: "Thameema Sharaf",
    children: ["zayan", "razan"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "thameema",
    name: "Thameema Sharaf",
    profession: "Textile Designer",
    qualification: "BDes",
    contact: "00974 50750432",
    isHead: false,
    generation: 3,
    spouse: "Afdal Abdulla",
    children: ["zayan", "razan"],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "aysha-nasrene",
    name: "Adv. Aysha Nasrene",
    profession: "Lawyer (Practising)",
    qualification: "BSc, MA, LLB",
    contact: "0091 9746262558",
    isHead: false,
    generation: 3,
    parentId: "najuma",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "aslam",
    name: "Aslam Abdullakutty",
    profession: "App Developer",
    qualification: "BA",
    contact: "0091 9995899402",
    isHead: false,
    generation: 3,
    parentId: "najuma",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "abbas-nazir",
    name: "Mohammed Abbas Nazir",
    profession: "Business",
    qualification: "B.Eng",
    contact: "00971 55 9484716",
    isHead: false,
    generation: 3,
    parentId: "nazir",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "aysha-nazir",
    name: "Aysha Nazir",
    profession: "Strategy and Policy Consultant",
    qualification: "BSc Economics & M.S in DEDP",
    contact: "00971 50 9382699",
    isHead: false,
    generation: 3,
    parentId: "nazir",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "adeeb",
    name: "Adeeb Abdul Majeed",
    profession: "Project Manager",
    qualification: "B.Tech, PMP",
    contact: "00971 56 9064860",
    isHead: false,
    generation: 3,
    parentId: "naseema",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "farhana",
    name: "Dr Farhana Zakir",
    profession: "Student",
    qualification: "B.Tech, M.Tech, PhD",
    contact: "0044 7553795330",
    isHead: false,
    generation: 3,
    parentId: "naseema",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "adheela",
    name: "Adv. Adheela Nowrin",
    profession: "Lawyer (Junior Advocate at High Court Of Kerala)",
    qualification: "BA, LL.B & LL.M",
    contact: "0091 7558944646",
    isHead: false,
    generation: 3,
    parentId: "naseema",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "salman",
    name: "Salman Salim",
    profession: "Sales Representative",
    qualification: "BCA",
    contact: "00971 8891690013",
    isHead: false,
    generation: 3,
    parentId: "najeeba",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "shehzad",
    name: "Shehzad Mehar",
    profession: "Student",
    qualification: "MA, BEd",
    contact: "0091 9633131204",
    isHead: false,
    generation: 3,
    parentId: "najeeba",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "zaahir",
    name: "Zaahir Hydrose Salim",
    profession: "Engineer (Infosys)",
    qualification: "B.Tech",
    contact: "0091 9745430236",
    isHead: false,
    generation: 3,
    parentId: "najeeba",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },

  // Generation 4 - Great-grandchildren
  {
    id: "zayan",
    name: "Zayan Afdal",
    isHead: false,
    generation: 4,
    parentId: "afdal",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
  {
    id: "razan",
    name: "Razan Afdal",
    isHead: false,
    generation: 4,
    parentId: "afdal",
    children: [],
    branch: "A T Mohamed unny (Late) & P.M Kochu Rabiya",
  },
]

// Family 2: A T kunjupathumma (Late) & P.K Athakutty (Late) - 147 members
const kunjupathummaFamily = [
  // Family Heads
  {
    id: "head-2",
    name: "A T kunjupathumma",
    isHead: true,
    generation: 1,
    spouse: "P.K Athakutty",
    children: ["child2-1", "child2-2", "child2-3", "child2-4", "child2-5"],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
    isDeceased: true,
  },
  {
    id: "head-2-spouse",
    name: "P.K Athakutty",
    isHead: false,
    generation: 1,
    spouse: "A T kunjupathumma",
    children: ["child2-1", "child2-2", "child2-3", "child2-4", "child2-5"],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
    isDeceased: true,
  },

  // Sample Generation 2 - Children (placeholder data for the largest family)
  {
    id: "child2-1",
    name: "First Child of Kunjupathumma",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-2",
    children: ["grandchild2-1", "grandchild2-2"],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
  },
  {
    id: "child2-2",
    name: "Second Child of Kunjupathumma",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-2",
    children: ["grandchild2-3", "grandchild2-4"],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
  },
  {
    id: "child2-3",
    name: "Third Child of Kunjupathumma",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-2",
    children: ["grandchild2-5", "grandchild2-6"],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
  },
  {
    id: "child2-4",
    name: "Fourth Child of Kunjupathumma",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-2",
    children: ["grandchild2-7", "grandchild2-8"],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
  },
  {
    id: "child2-5",
    name: "Fifth Child of Kunjupathumma",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-2",
    children: ["grandchild2-9", "grandchild2-10"],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
  },

  // Sample Generation 3 - Grandchildren (placeholder data)
  {
    id: "grandchild2-1",
    name: "Grandchild 1 of Kunjupathumma",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child2-1",
    children: [],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
  },
  {
    id: "grandchild2-2",
    name: "Grandchild 2 of Kunjupathumma",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child2-1",
    children: [],
    branch: "A T kunjupathumma (Late) & P.K Athakutty (Late)",
  },
  // Additional placeholder members to reach closer to 147 total
  // (In a real implementation, you would have the actual family data)
]

// Family 3: A T Pathayu (Late) & Weetiparambil Ayyutty (Late) - 50 members
const pathayuFamily = [
  // Family Heads
  {
    id: "head-3",
    name: "A T Pathayu",
    isHead: true,
    generation: 1,
    spouse: "Weetiparambil Ayyutty",
    children: ["child3-1", "child3-2", "child3-3"],
    branch: "A T Pathayu (Late) & Weetiparambil Ayyutty (Late)",
    isDeceased: true,
  },
  {
    id: "head-3-spouse",
    name: "Weetiparambil Ayyutty",
    isHead: false,
    generation: 1,
    spouse: "A T Pathayu",
    children: ["child3-1", "child3-2", "child3-3"],
    branch: "A T Pathayu (Late) & Weetiparambil Ayyutty (Late)",
    isDeceased: true,
  },

  // Sample Generation 2 - Children (placeholder data)
  {
    id: "child3-1",
    name: "First Child of Pathayu",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-3",
    children: ["grandchild3-1", "grandchild3-2"],
    branch: "A T Pathayu (Late) & Weetiparambil Ayyutty (Late)",
  },
  {
    id: "child3-2",
    name: "Second Child of Pathayu",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-3",
    children: ["grandchild3-3", "grandchild3-4"],
    branch: "A T Pathayu (Late) & Weetiparambil Ayyutty (Late)",
  },
  {
    id: "child3-3",
    name: "Third Child of Pathayu",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-3",
    children: ["grandchild3-5", "grandchild3-6"],
    branch: "A T Pathayu (Late) & Weetiparambil Ayyutty (Late)",
  },

  // Sample Generation 3 - Grandchildren (placeholder data)
  {
    id: "grandchild3-1",
    name: "Grandchild 1 of Pathayu",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child3-1",
    children: [],
    branch: "A T Pathayu (Late) & Weetiparambil Ayyutty (Late)",
  },
  {
    id: "grandchild3-2",
    name: "Grandchild 2 of Pathayu",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child3-1",
    children: [],
    branch: "A T Pathayu (Late) & Weetiparambil Ayyutty (Late)",
  },
]

// Family 4: A T Nafeesakutty & M.A Bappu Moulavi (Late) - 39 members
const nafeesakuttyFamily = [
  // Family Heads
  {
    id: "head-4",
    name: "A T Nafeesakutty",
    isHead: true,
    generation: 1,
    spouse: "M.A Bappu Moulavi",
    children: ["child4-1", "child4-2", "child4-3"],
    branch: "A T Nafeesakutty & M.A Bappu Moulavi (Late)",
  },
  {
    id: "head-4-spouse",
    name: "M.A Bappu Moulavi",
    isHead: false,
    generation: 1,
    spouse: "A T Nafeesakutty",
    children: ["child4-1", "child4-2", "child4-3"],
    branch: "A T Nafeesakutty & M.A Bappu Moulavi (Late)",
    isDeceased: true,
  },

  // Sample Generation 2 - Children (placeholder data)
  {
    id: "child4-1",
    name: "First Child of Nafeesakutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-4",
    children: ["grandchild4-1", "grandchild4-2"],
    branch: "A T Nafeesakutty & M.A Bappu Moulavi (Late)",
  },
  {
    id: "child4-2",
    name: "Second Child of Nafeesakutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-4",
    children: ["grandchild4-3", "grandchild4-4"],
    branch: "A T Nafeesakutty & M.A Bappu Moulavi (Late)",
  },
  {
    id: "child4-3",
    name: "Third Child of Nafeesakutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-4",
    children: ["grandchild4-5", "grandchild4-6"],
    branch: "A T Nafeesakutty & M.A Bappu Moulavi (Late)",
  },

  // Sample Generation 3 - Grandchildren (placeholder data)
  {
    id: "grandchild4-1",
    name: "Grandchild 1 of Nafeesakutty",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 3,
    parentId: "child4-1",
    children: [],
    branch: "A T Nafeesakutty & M.A Bappu Moulavi (Late)",
  },
]

// Family 5: A.T AliKunji (Late) & P.K Kunhipathunni - 22 members
const aliKunjiFamily = [
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

  // Sample Generation 2 - Children (placeholder data)
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

  // Sample Generation 3 - Grandchildren (placeholder data)
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
]

// Family 6: A.T Kunjaisu (Late) & R.V Mohammed Haji (Late) - 52 members
const kunjaisuFamily = [
  // Family Heads
  {
    id: "head-6",
    name: "A.T Kunjaisu",
    isHead: true,
    generation: 1,
    spouse: "R.V Mohammed Haji",
    children: ["child6-1", "child6-2", "child6-3"],
    branch: "A.T Kunjaisu (Late) & R.V Mohammed Haji (Late)",
    isDeceased: true,
  },
  {
    id: "head-6-spouse",
    name: "R.V Mohammed Haji",
    isHead: false,
    generation: 1,
    spouse: "A.T Kunjaisu",
    children: ["child6-1", "child6-2", "child6-3"],
    branch: "A.T Kunjaisu (Late) & R.V Mohammed Haji (Late)",
    isDeceased: true,
  },

  // Sample Generation 2 - Children (placeholder data)
  {
    id: "child6-1",
    name: "First Child of Kunjaisu",
    profession: "To be updated",
    qualification: "To be updated",
    contact: "To be updated",
    isHead: false,
    generation: 2,
    parentId: "head-6",
    children: ["grandchild6-1", "grandchild6-2"],
    branch: "A.T Kunjaisu (Late) & R.V Mohammed Haji (Late)",
  },
]

// Family 7: A.T Aminakutty (Late) & A.M Bayu (Late) - 29 members
const aminakuttyFamily = [
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

  // Sample Generation 2 - Children (placeholder data)
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
]

// Family 8: A T Aboobakker (Late) & Rasiya .P.N - 18 members
const aboobakkerFamily = [
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

  // Sample Generation 2 - Children (placeholder data)
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
]

// Family 9: A.T Zainba & Abdul Kadar - 25 members
const zainbaFamily = [
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

  // Sample Generation 2 - Children (placeholder data)
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
]

// Family 10: A T Ibrahim Kutty & Zohra Ibrahim - 16 members
const ibrahimKuttyFamily = [
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

  // Sample Generation 2 - Children (placeholder data)
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
]

// Combine all families into one array
const allFamilyData = [
  ...mohamedunnyFamily,
  ...kunjupathummaFamily,
  ...pathayuFamily,
  ...nafeesakuttyFamily,
  ...aliKunjiFamily,
  ...kunjaisuFamily,
  ...aminakuttyFamily,
  ...aboobakkerFamily,
  ...zainbaFamily,
  ...ibrahimKuttyFamily,
]

// Set the global family data immediately
if (typeof window !== "undefined") {
  window.familyData = allFamilyData
  console.log("All 10 families data set on window:", allFamilyData.length, "members total")
}

// Function to set family data (for compatibility)
if (typeof window !== "undefined") {
  window.setFamilyData = (data) => {
    window.familyData = data
    console.log("Family data updated:", data.length, "members")
  }
}

console.log("All 10 families data script loaded successfully with", allFamilyData.length, "members total")

// Log family breakdown with correct names and target counts
console.log("Family breakdown (Target counts from image):")
console.log("1. A T Mohamed unny (Late) & P.M Kochu Rabiya: Target 23 members")
console.log("2. A T kunjupathumma (Late) & P.K Athakutty (Late): Target 147 members")
console.log("3. A T Pathayu (Late) & Weetiparambil Ayyutty (Late): Target 50 members")
console.log("4. A T Nafeesakutty & M.A Bappu Moulavi (Late): Target 39 members")
console.log("5. A.T AliKunji (Late) & P.K Kunhipathunni: Target 22 members")
console.log("6. A.T Kunjaisu (Late) & R.V Mohammed Haji (Late): Target 52 members")
console.log("7. A.T Aminakutty (Late) & A.M Bayu (Late): Target 29 members")
console.log("8. A T Aboobakker (Late) & Rasiya .P.N: Target 18 members")
console.log("9. A.T Zainba & Abdul Kadar: Target 25 members")
console.log("10. A T Ibrahim Kutty & Zohra Ibrahim: Target 16 members")
console.log("Grand Total Target: 421 members")
