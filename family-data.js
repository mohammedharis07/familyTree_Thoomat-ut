// Main Family Data File - Combines all 10 families
console.log("Loading main family data file...")

// Function to load all family data files
function loadAllFamilyData() {
  // Wait for all individual family files to load
  const checkDataLoaded = () => {
    if (
      typeof window !== "undefined" &&
      window.family1Data &&
      window.family2Data &&
      window.family3Data &&
      window.family4Data &&
      window.family5Data &&
      window.family6Data &&
      window.family7Data &&
      window.family8Data &&
      window.family9Data &&
      window.family10Data
    ) {
      // Combine all families into one array
      const allFamilyData = [
        ...window.family1Data,
        ...window.family2Data,
        ...window.family3Data,
        ...window.family4Data,
        ...window.family5Data,
        ...window.family6Data,
        ...window.family7Data,
        ...window.family8Data,
        ...window.family9Data,
        ...window.family10Data,
      ]

      // Set the global family data
      window.familyData = allFamilyData

      // Function to set family data (for compatibility)
      window.setFamilyData = (data) => {
        window.familyData = data
        console.log("Family data updated:", data.length, "members")
      }

      console.log("All 10 families data combined successfully:", allFamilyData.length, "members total")

      // Log family breakdown with current and target counts
      console.log("=== FAMILY BREAKDOWN ===")
      console.log("1. A T Mohamed unny (Late) & P.M Kochu Rabiya:", window.family1Data.length, "/ 23 members")
      console.log("2. A T kunjupathumma (Late) & P.K Athakutty (Late):", window.family2Data.length, "/ 147 members")
      console.log("3. A T Pathayu (Late) & Weetiparambil Ayyutty (Late):", window.family3Data.length, "/ 50 members")
      console.log("4. A T Nafeesakutty & M.A Bappu Moulavi (Late):", window.family4Data.length, "/ 39 members")
      console.log("5. A.T AliKunji (Late) & P.K Kunhipathunni:", window.family5Data.length, "/ 22 members")
      console.log("6. A.T Kunjaisu (Late) & R.V Mohammed Haji (Late):", window.family6Data.length, "/ 52 members")
      console.log("7. A.T Aminakutty (Late) & A.M Bayu (Late):", window.family7Data.length, "/ 29 members")
      console.log("8. A T Aboobakker (Late) & Rasiya .P.N:", window.family8Data.length, "/ 18 members")
      console.log("9. A.T Zainba & Abdul Kadar:", window.family9Data.length, "/ 25 members")
      console.log("10. A T Ibrahim Kutty & Zohra Ibrahim:", window.family10Data.length, "/ 16 members")
      console.log("=========================")
      console.log("Current Total:", allFamilyData.length, "members")
      console.log("Target Total: 421 members")
      console.log("Remaining to add:", 421 - allFamilyData.length, "members")

      return true
    }
    return false
  }

  // Try to load data immediately
  if (!checkDataLoaded()) {
    // If not loaded, wait a bit and try again
    setTimeout(() => {
      if (!checkDataLoaded()) {
        console.warn("Some family data files may not have loaded properly")
        // Create empty arrays for missing data
        window.family1Data = window.family1Data || []
        window.family2Data = window.family2Data || []
        window.family3Data = window.family3Data || []
        window.family4Data = window.family4Data || []
        window.family5Data = window.family5Data || []
        window.family6Data = window.family6Data || []
        window.family7Data = window.family7Data || []
        window.family8Data = window.family8Data || []
        window.family9Data = window.family9Data || []
        window.family10Data = window.family10Data || []

        // Try loading again
        checkDataLoaded()
      }
    }, 100)
  }
}

// Load all family data when this script runs
if (typeof window !== "undefined") {
  loadAllFamilyData()
}

console.log("Main family data file loaded successfully")
