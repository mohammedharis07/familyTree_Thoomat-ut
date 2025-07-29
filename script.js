// Global state
let currentViewMode = "generation"
let collapsedFamilies = new Set()
let currentSearchTerm = ""
let filteredMembers = []
let isMobileMenuOpen = false
let familyData = [] // Declare familyData variable

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
  // Use the global familyData if available
  if (window.familyData) {
    familyData = window.familyData
    filteredMembers = [...familyData]
  }

  initializeEventListeners()
  createDataParticles()
  renderFamilyTree()
})

// Initialize all event listeners
function initializeEventListeners() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu)
  }

  // Search functionality
  const searchInput = document.getElementById("search-input")
  const mobileSearchInput = document.getElementById("mobile-search-input")
  const searchClear = document.getElementById("search-clear")
  const mobileSearchClear = document.getElementById("mobile-search-clear")

  if (searchInput) {
    searchInput.addEventListener("input", (e) => handleSearch(e.target.value))
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", (e) => handleSearch(e.target.value))
  }
  if (searchClear) {
    searchClear.addEventListener("click", clearSearch)
  }
  if (mobileSearchClear) {
    mobileSearchClear.addEventListener("click", clearSearch)
  }

  // View mode toggle
  const viewBtns = document.querySelectorAll(".view-btn, .mobile-view-btn")
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const mode = e.currentTarget.dataset.mode
      setViewMode(mode)
      if (isMobileMenuOpen) {
        toggleMobileMenu()
      }
    })
  })

  // Expand all buttons
  const expandAllBtn = document.getElementById("expand-all-btn")
  const mobileExpandBtn = document.getElementById("mobile-expand-btn")

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      toggleAllFamilies()
    })
  }
  if (mobileExpandBtn) {
    mobileExpandBtn.addEventListener("click", () => {
      toggleAllFamilies()
      if (isMobileMenuOpen) {
        toggleMobileMenu()
      }
    })
  }
}

// Create animated data particles
function createDataParticles() {
  const particlesContainer = document.querySelector(".data-particles")
  if (!particlesContainer) return

  // Clear existing particles
  particlesContainer.innerHTML = ""

  // Create 30 particles
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div")
    particle.className = "data-particle"
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(6, 182, 212, 0.6);
      border-radius: 50%;
      animation: ping ${2 + Math.random() * 3}s ease-in-out infinite;
      animation-delay: ${i * 200}ms;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
    `
    particlesContainer.appendChild(particle)
  }
}

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
    filteredMembers = [...familyData]
    hideSearchInfo()
  } else {
    // Filter members based on search term
    filteredMembers = familyData.filter(
      (member) =>
        member.name.toLowerCase().includes(currentSearchTerm) ||
        (member.profession && member.profession.toLowerCase().includes(currentSearchTerm)) ||
        (member.qualification && member.qualification.toLowerCase().includes(currentSearchTerm)) ||
        member.branch.toLowerCase().includes(currentSearchTerm),
    )
    showSearchInfo()
  }

  renderFamilyTree()
}

function clearSearch() {
  currentSearchTerm = ""
  filteredMembers = [...familyData]

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
    document.querySelector(".view-btn[data-mode='generation']")?.classList.add("active")
    document.querySelector(".mobile-view-btn[data-mode='generation']")?.classList.add("active")
  } else {
    document.querySelector(".view-btn[data-mode='family']")?.classList.add("active")
    document.querySelector(".mobile-view-btn[data-mode='family']")?.classList.add("active")
  }

  // Show/hide expand all button
  const expandBtns = document.querySelectorAll("#expand-all-btn, #mobile-expand-btn")
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
  const expandBtns = document.querySelectorAll("#expand-all-btn span, #mobile-expand-btn")
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

  if (mobileMenu && menuIcon) {
    if (mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show")
      menuIcon.className = "fas fa-bars"
      isMobileMenuOpen = false
    } else {
      mobileMenu.classList.add("show")
      menuIcon.className = "fas fa-times"
      isMobileMenuOpen = true
    }
  }
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

  if (!container || !noResults) return

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
      (member.profession && member.profession.toLowerCase().includes(currentSearchTerm)) ||
      (member.qualification && member.qualification.toLowerCase().includes(currentSearchTerm)) ||
      member.branch.toLowerCase().includes(currentSearchTerm))

  const cardClass = `member-card ${branchColorClass} ${member.isHead ? "family-head" : ""} ${
    member.isDeceased ? "deceased" : ""
  } ${isSpousePair ? "spouse-card" : ""} ${isSearchMatch ? "search-highlight" : ""}`

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
              <span>${member.profession}</span>
            </div>
          `
              : ""
          }
          
          ${
            member.qualification
              ? `
            <div class="detail-item qualification">
              <i class="fas fa-graduation-cap"></i>
              <span>${member.qualification}</span>
            </div>
          `
              : ""
          }
          
          ${
            member.contact
              ? `
            <div class="detail-item contact">
              <i class="fas fa-phone"></i>
              <span>${member.contact}</span>
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
            member.children && member.children.length > 0
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

// Make functions globally available for onclick handlers
window.toggleFamilyCollapse = toggleFamilyCollapse
window.clearSearch = clearSearch

// Function to set familyData
function setFamilyData(data) {
  familyData = data
  filteredMembers = [...familyData]
  renderFamilyTree()
}

// Make setFamilyData globally available
window.setFamilyData = setFamilyData
