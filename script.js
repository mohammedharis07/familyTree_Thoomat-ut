// Family data embedded directly in the script
const familyData = [
  // Generation 1 - Family Heads
  {
    id: "1",
    name: "A T Mohamedunny",
    profession: "",
    qualification: "",
    contact: "",
    isHead: true,
    generation: 1,
    parentId: null,
    spouse: "P.M Kochu Rabiya",
    children: ["2", "3", "4"],
    branch: "A T Mohamedunny & P.M Kochu Rabiya",
    isDeceased: true,
  },
  {
    id: "1-spouse",
    name: "P.M Kochu Rabiya",
    profession: "",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 1,
    parentId: null,
    spouse: "A T Mohamedunny",
    children: ["2", "3", "4"],
    branch: "A T Mohamedunny & P.M Kochu Rabiya",
    isDeceased: false,
  },

  // Generation 2
  {
    id: "2",
    name: "Kunjupathumma",
    profession: "",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 2,
    parentId: "1",
    spouse: "",
    children: ["5", "6"],
    branch: "Kunjupathumma",
    isDeceased: false,
  },
  {
    id: "3",
    name: "Pathavu",
    profession: "",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 2,
    parentId: "1",
    spouse: "",
    children: ["7"],
    branch: "Pathavu",
    isDeceased: false,
  },
  {
    id: "4",
    name: "Nafeesakutty",
    profession: "",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 2,
    parentId: "1",
    spouse: "",
    children: ["8", "9"],
    branch: "Nafeesakutty",
    isDeceased: false,
  },

  // Generation 3
  {
    id: "5",
    name: "Alikunji",
    profession: "Business",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 3,
    parentId: "2",
    spouse: "",
    children: ["10"],
    branch: "Alikunji",
    isDeceased: false,
  },
  {
    id: "6",
    name: "Kunjaisu",
    profession: "",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 3,
    parentId: "2",
    spouse: "",
    children: ["11"],
    branch: "Kunjaisu",
    isDeceased: false,
  },
  {
    id: "7",
    name: "Aminakutty",
    profession: "",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 3,
    parentId: "3",
    spouse: "",
    children: ["12"],
    branch: "Aminakutty",
    isDeceased: false,
  },
  {
    id: "8",
    name: "Aboobacker",
    profession: "",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 3,
    parentId: "4",
    spouse: "",
    children: ["13"],
    branch: "Aboobacker",
    isDeceased: false,
  },
  {
    id: "9",
    name: "Zainba",
    profession: "",
    qualification: "",
    contact: "",
    isHead: false,
    generation: 3,
    parentId: "4",
    spouse: "",
    children: ["14"],
    branch: "Zainba",
    isDeceased: false,
  },

  // Generation 4 - Sample children
  {
    id: "10",
    name: "Mohammed Ali",
    profession: "Engineer",
    qualification: "B.Tech",
    contact: "+91 9876543210",
    isHead: false,
    generation: 4,
    parentId: "5",
    spouse: "Fatima",
    children: [],
    branch: "Alikunji",
    isDeceased: false,
  },
  {
    id: "11",
    name: "Abdul Rahman",
    profession: "Doctor",
    qualification: "MBBS",
    contact: "+91 9876543211",
    isHead: false,
    generation: 4,
    parentId: "6",
    spouse: "",
    children: [],
    branch: "Kunjaisu",
    isDeceased: false,
  },
  {
    id: "12",
    name: "Rasheed",
    profession: "Teacher",
    qualification: "M.A",
    contact: "+91 9876543212",
    isHead: false,
    generation: 4,
    parentId: "7",
    spouse: "Khadija",
    children: [],
    branch: "Aminakutty",
    isDeceased: false,
  },
  {
    id: "13",
    name: "Ibrahim",
    profession: "Business",
    qualification: "B.Com",
    contact: "+91 9876543213",
    isHead: false,
    generation: 4,
    parentId: "8",
    spouse: "",
    children: [],
    branch: "Aboobacker",
    isDeceased: false,
  },
  {
    id: "14",
    name: "Mariam",
    profession: "Nurse",
    qualification: "B.Sc Nursing",
    contact: "+91 9876543214",
    isHead: false,
    generation: 4,
    parentId: "9",
    spouse: "Yusuf",
    children: [],
    branch: "Zainba",
    isDeceased: false,
  },
]

// Global state
let currentViewMode = "generation"
let collapsedFamilies = new Set()
let currentSearchTerm = ""
let filteredMembers = [...familyData]
const familyMembers = [...familyData]

// Branch color mapping
const branchColors = [
  "branch-rose",
  "branch-blue",
  "branch-emerald",
  "branch-amber",
  "branch-violet",
  "branch-cyan",
  "branch-lime",
  "branch-pink",
]

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  renderFamilyTree()
})

// Utility functions
function getBranchColorClass(branch) {
  const hash = branch.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
  return branchColors[hash % branchColors.length]
}

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

// Search functionality
function handleSearch(searchTerm) {
  currentSearchTerm = searchTerm.toLowerCase().trim()

  // Update both search inputs
  const desktopInput = document.getElementById("search-input")
  const mobileInput = document.getElementById("mobile-search-input")

  if (desktopInput && desktopInput.value !== searchTerm) {
    desktopInput.value = searchTerm
  }
  if (mobileInput && mobileInput.value !== searchTerm) {
    mobileInput.value = searchTerm
  }

  // Show/hide clear buttons
  const clearButtons = document.querySelectorAll("#search-clear, #mobile-search-clear")
  clearButtons.forEach((btn) => {
    btn.style.display = searchTerm ? "block" : "none"
  })

  if (currentSearchTerm === "") {
    // No search term, show all members
    filteredMembers = [...familyMembers]
    hideSearchInfo()
  } else {
    // Filter members based on search term
    filteredMembers = familyMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(currentSearchTerm) ||
        member.profession.toLowerCase().includes(currentSearchTerm) ||
        member.qualification.toLowerCase().includes(currentSearchTerm) ||
        member.branch.toLowerCase().includes(currentSearchTerm),
    )
    showSearchInfo()
  }

  renderFamilyTree()
}

function clearSearch() {
  currentSearchTerm = ""
  filteredMembers = [...familyMembers]

  // Clear both search inputs
  const desktopInput = document.getElementById("search-input")
  const mobileInput = document.getElementById("mobile-search-input")

  if (desktopInput) desktopInput.value = ""
  if (mobileInput) mobileInput.value = ""

  // Hide clear buttons
  const clearButtons = document.querySelectorAll("#search-clear, #mobile-search-clear")
  clearButtons.forEach((btn) => {
    btn.style.display = "none"
  })

  hideSearchInfo()
  renderFamilyTree()
}

function showSearchInfo() {
  const searchInfo = document.getElementById("search-info")
  const searchInfoText = document.getElementById("search-info-text")
  const resultsCounts = document.querySelectorAll("#search-results-count, #mobile-search-results-count")

  if (searchInfo && searchInfoText) {
    const resultCount = filteredMembers.length
    searchInfo.style.display = "block"
    searchInfoText.textContent = `Found ${resultCount} member${resultCount !== 1 ? "s" : ""} matching "${currentSearchTerm}"`

    resultsCounts.forEach((count) => {
      count.style.display = "block"
      count.textContent = `${resultCount} result${resultCount !== 1 ? "s" : ""}`
    })
  }
}

function hideSearchInfo() {
  const searchInfo = document.getElementById("search-info")
  const resultsCounts = document.querySelectorAll("#search-results-count, #mobile-search-results-count")

  if (searchInfo) {
    searchInfo.style.display = "none"
  }

  resultsCounts.forEach((count) => {
    count.style.display = "none"
  })
}

// View mode functions
function setViewMode(mode) {
  currentViewMode = mode

  // Update button states
  document.querySelectorAll(".view-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".mobile-view-btn").forEach((btn) => btn.classList.remove("active"))

  if (mode === "generation") {
    document.querySelector(".view-btn:first-child").classList.add("active")
    document.querySelector(".mobile-view-btn:first-child").classList.add("active")
  } else {
    document.querySelector(".view-btn:last-child").classList.add("active")
    document.querySelector(".mobile-view-btn:last-child").classList.add("active")
  }

  // Show/hide expand all button
  const expandBtns = document.querySelectorAll(".expand-all-btn, .mobile-expand-btn")
  expandBtns.forEach((btn) => {
    btn.style.display = mode === "family" ? "flex" : "none"
  })

  renderFamilyTree()
}

function toggleAllFamilies() {
  const familyHeads = getFamilyHeads()
  const allHeadIds = familyHeads.map((head) => head.id)

  if (collapsedFamilies.size === allHeadIds.length) {
    collapsedFamilies.clear()
    updateExpandAllButton("Collapse All")
  } else {
    collapsedFamilies = new Set(allHeadIds)
    updateExpandAllButton("Expand All")
  }

  renderFamilyTree()
}

function updateExpandAllButton(text) {
  const expandBtns = document.querySelectorAll(".expand-all-btn span, .mobile-expand-btn")
  expandBtns.forEach((btn) => {
    if (btn.tagName === "SPAN") {
      btn.textContent = text
    } else {
      btn.innerHTML = `<i class="fas fa-eye"></i> ${text}`
    }
  })
}

function toggleFamilyCollapse(headId) {
  if (collapsedFamilies.has(headId)) {
    collapsedFamilies.delete(headId)
  } else {
    collapsedFamilies.add(headId)
  }
  renderFamilyTree()
}

// Mobile menu functions
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("mobile-menu-icon")

  if (mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show")
    menuIcon.className = "fas fa-bars"
  } else {
    mobileMenu.classList.add("show")
    menuIcon.className = "fas fa-times"
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("mobile-menu-icon")

  mobileMenu.classList.remove("show")
  menuIcon.className = "fas fa-bars"
}

// Data manipulation functions
function getGenerations() {
  const generations = {}
  filteredMembers.forEach((member) => {
    if (!generations[member.generation]) {
      generations[member.generation] = []
    }
    generations[member.generation].push(member)
  })
  return generations
}

function getFamilyHeads() {
  return filteredMembers.filter((member) => member.isHead && member.generation === 1)
}

function getAllDescendants(parentId) {
  const descendants = []
  const children = filteredMembers.filter((member) => member.parentId === parentId)

  children.forEach((child) => {
    descendants.push(child)
    if (child.spouse) {
      const spouse = filteredMembers.find(
        (member) => member.name === child.spouse && member.generation === child.generation,
      )
      if (spouse) {
        descendants.push(spouse)
      }
    }
    descendants.push(...getAllDescendants(child.id))
  })

  return descendants
}

function groupSpouses(members) {
  const grouped = []
  const processed = new Set()

  members.forEach((member) => {
    if (processed.has(member.id)) return

    if (member.spouse) {
      const spouse = members.find((m) => m.name === member.spouse && m.generation === member.generation)
      if (spouse && !processed.has(spouse.id)) {
        grouped.push([member, spouse])
        processed.add(member.id)
        processed.add(spouse.id)
      } else if (!processed.has(member.id)) {
        grouped.push(member)
        processed.add(member.id)
      }
    } else {
      grouped.push(member)
      processed.add(member.id)
    }
  })

  return grouped
}

// Rendering functions
function renderFamilyTree() {
  const container = document.getElementById("family-tree-container")
  const noResults = document.getElementById("no-results")

  if (filteredMembers.length === 0 && currentSearchTerm !== "") {
    // Show no results message
    container.style.display = "none"
    noResults.style.display = "flex"
    return
  } else {
    // Hide no results message
    container.style.display = "block"
    noResults.style.display = "none"
  }

  if (currentViewMode === "generation") {
    container.innerHTML = renderGenerationView()
  } else {
    container.innerHTML = renderFamilyView()
  }
}

function renderGenerationView() {
  const generations = getGenerations()
  const sortedGenerations = Object.keys(generations).sort((a, b) => Number(a) - Number(b))

  if (sortedGenerations.length === 0) {
    return '<div class="no-content">No family members found.</div>'
  }

  return sortedGenerations
    .map((genKey) => {
      const generation = Number(genKey)
      const members = generations[generation]
      const groupedMembers = groupSpouses(members)

      return `
            <div class="generation-section">
                <div class="generation-label">
                    <div class="generation-badge">
                        <div class="generation-badge-content">
                            <i class="fas fa-star"></i>
                            <span>GENERATION ${generation}</span>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="members-grid">
                    ${groupedMembers
                      .map((memberOrPair) => {
                        if (Array.isArray(memberOrPair)) {
                          return `
                                <div class="spouse-pair">
                                    ${memberOrPair.map((member) => renderMemberCard(member, true)).join("")}
                                    <div class="marriage-line"></div>
                                </div>
                            `
                        } else {
                          return renderMemberCard(memberOrPair)
                        }
                      })
                      .join("")}
                </div>
            </div>
        `
    })
    .join("")
}

function renderFamilyView() {
  const familyHeads = getFamilyHeads()

  if (familyHeads.length === 0) {
    return '<div class="no-content">No family heads found.</div>'
  }

  return familyHeads
    .map((head) => {
      const spouse = filteredMembers.find(
        (member) => member.name === head.spouse && member.generation === head.generation,
      )
      const descendants = getAllDescendants(head.id)
      const isCollapsed = collapsedFamilies.has(head.id)

      return `
            <div class="family-section">
                <div class="family-header">
                    <div class="family-title">
                        <div class="family-title-content">
                            <i class="fas fa-crown"></i>
                            <span>${head.name} FAMILY</span>
                            <i class="fas fa-crown"></i>
                        </div>
                    </div>
                    <button class="family-toggle" onclick="toggleFamilyCollapse('${head.id}')">
                        <i class="fas fa-chevron-${isCollapsed ? "down" : "up"}"></i>
                        ${isCollapsed ? "Expand Family" : "Collapse Family"}
                    </button>
                </div>
                
                ${
                  !isCollapsed
                    ? `
                    <div class="family-content">
                        <div class="family-heads">
                            <div class="spouse-pair">
                                ${renderMemberCard(head)}
                                ${
                                  spouse
                                    ? `
                                    <div class="marriage-line"></div>
                                    ${renderMemberCard(spouse)}
                                `
                                    : ""
                                }
                            </div>
                        </div>
                        
                        ${
                          descendants.length > 0
                            ? `
                            <div class="descendants">
                                ${renderDescendantsByGeneration(descendants)}
                            </div>
                        `
                            : ""
                        }
                    </div>
                `
                    : `
                    <div class="collapsed-state">
                        <div class="collapsed-info">
                            <div class="collapsed-info-content">
                                <i class="fas fa-eye-slash"></i>
                                <span>Family tree collapsed • ${descendants.length} members hidden</span>
                            </div>
                        </div>
                    </div>
                `
                }
            </div>
        `
    })
    .join("")
}

function renderDescendantsByGeneration(descendants) {
  const generations = {}
  descendants.forEach((descendant) => {
    if (!generations[descendant.generation]) {
      generations[descendant.generation] = []
    }
    generations[descendant.generation].push(descendant)
  })

  return [2, 3, 4, 5, 6]
    .map((gen) => {
      const genDescendants = generations[gen]
      if (!genDescendants || genDescendants.length === 0) return ""

      const groupedDescendants = groupSpouses(genDescendants)

      return `
            <div class="generation-group">
                <div class="generation-group-label">
                    <div class="generation-group-badge">
                        <span>Generation ${gen}</span>
                    </div>
                </div>
                <div class="members-grid">
                    ${groupedDescendants
                      .map((memberOrPair) => {
                        if (Array.isArray(memberOrPair)) {
                          return `
                                <div class="spouse-pair">
                                    ${memberOrPair.map((member) => renderMemberCard(member, true)).join("")}
                                    <div class="marriage-line"></div>
                                </div>
                            `
                        } else {
                          return renderMemberCard(memberOrPair, true)
                        }
                      })
                      .join("")}
                </div>
            </div>
        `
    })
    .join("")
}

function renderMemberCard(member, isSpousePair = false) {
  const branchColorClass = getBranchColorClass(member.branch)
  const isSearchMatch =
    currentSearchTerm &&
    (member.name.toLowerCase().includes(currentSearchTerm) ||
      member.profession.toLowerCase().includes(currentSearchTerm) ||
      member.qualification.toLowerCase().includes(currentSearchTerm) ||
      member.branch.toLowerCase().includes(currentSearchTerm))

  const cardClass = `member-card ${branchColorClass} ${member.isHead ? "family-head" : ""} ${member.isDeceased ? "deceased" : ""} ${isSpousePair ? "spouse-card" : ""} ${isSearchMatch ? "search-highlight" : ""}`

  return `
        <div class="${cardClass}">
            ${
              member.isHead
                ? `
                <div class="crown-badge">
                    <i class="fas fa-crown"></i>
                </div>
            `
                : ""
            }
            
            <div class="member-content">
                <div class="member-photo">
                    <div class="photo-frame ${member.isHead ? "family-head" : ""}">
                        <div class="photo-placeholder">
                            ${getInitials(member.name)}
                        </div>
                    </div>
                </div>
                
                <h3 class="member-name ${isSpousePair ? "spouse-name" : ""}">
                    ${member.name}
                    ${member.isDeceased ? '<span class="deceased-indicator">(Late)</span>' : ""}
                </h3>
                
                <div class="member-details">
                    ${
                      member.profession
                        ? `
                        <div class="detail-item profession">
                            <i class="fas fa-briefcase"></i>
                            ${member.profession}
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      member.qualification
                        ? `
                        <div class="detail-item qualification">
                            <i class="fas fa-graduation-cap"></i>
                            ${member.qualification}
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      member.contact
                        ? `
                        <div class="detail-item contact">
                            <i class="fas fa-phone"></i>
                            ${member.contact}
                        </div>
                    `
                        : ""
                    }
                </div>
                
                <div class="member-badges">
                    ${
                      member.isHead
                        ? `
                        <div class="badge head">
                            <i class="fas fa-crown"></i>
                            HEAD
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      member.spouse
                        ? `
                        <div class="badge married">
                            <i class="fas fa-heart"></i>
                            MARRIED
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      member.children.length > 0
                        ? `
                        <div class="badge children">
                            <i class="fas fa-users"></i>
                            ${member.children.length}
                        </div>
                    `
                        : ""
                    }
                </div>
                
                <div class="branch-info">
                    <div class="branch-label">FAMILY BRANCH</div>
                    <div class="branch-name">${member.branch}</div>
                </div>
            </div>
        </div>
    `
}
