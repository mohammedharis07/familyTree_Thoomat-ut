"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Crown,
  Users,
  Phone,
  Briefcase,
  GraduationCap,
  Network,
  TreePine,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Sparkles,
  Heart,
  Star,
  Menu,
  X,
} from "lucide-react"
import { allFamilyData } from "./data"
import type { FamilyMember } from "./types/family-member"

export default function FamilyTreePage() {
  const [familyMembers] = useState<FamilyMember[]>(allFamilyData)
  const [viewMode, setViewMode] = useState<"generation" | "family">("generation")
  const [collapsedFamilies, setCollapsedFamilies] = useState<Set<string>>(new Set())
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleFamilyCollapse = useCallback((headId: string) => {
    console.log("🔄 Toggle called for headId:", headId)
    setCollapsedFamilies((prevCollapsed) => {
      const newCollapsed = new Set(prevCollapsed)
      const wasCollapsed = newCollapsed.has(headId)

      if (wasCollapsed) {
        newCollapsed.delete(headId)
        console.log("✅ Expanding family:", headId)
      } else {
        newCollapsed.add(headId)
        console.log("❌ Collapsing family:", headId)
      }

      console.log("📊 Updated collapsed families:", Array.from(newCollapsed))
      return newCollapsed
    })
  }, [])

  const toggleAllFamilies = () => {
    const allHeadIds = Object.keys(getFamilyHeadGroups())
    if (collapsedFamilies.size === allHeadIds.length) {
      setCollapsedFamilies(new Set())
    } else {
      setCollapsedFamilies(new Set(allHeadIds))
    }
  }

  const getGenerations = () => {
    const generations: { [key: number]: FamilyMember[] } = {}
    familyMembers.forEach((member) => {
      if (!generations[member.generation]) {
        generations[member.generation] = []
      }
      generations[member.generation].push(member)
    })
    return generations
  }

  const getFamilyHeadGroups = () => {
    const familyHeads = familyMembers.filter((member) => member.isHead && member.generation === 1)
    const familyGroups: { [key: string]: { head: FamilyMember; spouse?: FamilyMember; descendants: FamilyMember[] } } =
      {}

    familyHeads.forEach((head) => {
      const spouse = familyMembers.find(
        (member) => member.name === head.spouse && member.generation === head.generation,
      )

      const descendants = getAllDescendants(head.id)

      familyGroups[head.id] = {
        head,
        spouse: spouse || undefined,
        descendants,
      }
    })

    return familyGroups
  }

  const getAllDescendants = (parentId: string): FamilyMember[] => {
    const descendants: FamilyMember[] = []
    const children = familyMembers.filter((member) => member.parentId === parentId)

    children.forEach((child) => {
      descendants.push(child)
      if (child.spouse) {
        const spouse = familyMembers.find(
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

  const groupSpouses = (members: FamilyMember[]) => {
    const grouped: (FamilyMember | FamilyMember[])[] = []
    const processed = new Set<string>()

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

  const generations = getGenerations()
  const familyGroups = getFamilyHeadGroups()
  const maxGeneration = Math.max(...Object.keys(generations).map(Number))

  const getBranchColorClasses = (branch: string) => {
    const colorSets = [
      {
        gradient: "bg-gradient-to-br from-rose-600/80 via-pink-700/70 to-purple-800/80",
        border: "border-rose-400/80",
        shadow: "shadow-xl shadow-rose-500/30",
        textColor: "text-white",
      },
      {
        gradient: "bg-gradient-to-br from-blue-600/80 via-indigo-700/70 to-purple-800/80",
        border: "border-blue-400/80",
        shadow: "shadow-xl shadow-blue-500/30",
        textColor: "text-white",
      },
      {
        gradient: "bg-gradient-to-br from-emerald-600/80 via-teal-700/70 to-cyan-800/80",
        border: "border-emerald-400/80",
        shadow: "shadow-xl shadow-emerald-500/30",
        textColor: "text-white",
      },
      {
        gradient: "bg-gradient-to-br from-amber-600/80 via-orange-700/70 to-red-800/80",
        border: "border-amber-400/80",
        shadow: "shadow-xl shadow-amber-500/30",
        textColor: "text-white",
      },
      {
        gradient: "bg-gradient-to-br from-violet-600/80 via-purple-700/70 to-fuchsia-800/80",
        border: "border-violet-400/80",
        shadow: "shadow-xl shadow-violet-500/30",
        textColor: "text-white",
      },
      {
        gradient: "bg-gradient-to-br from-cyan-600/80 via-blue-700/70 to-indigo-800/80",
        border: "border-cyan-400/80",
        shadow: "shadow-xl shadow-cyan-500/30",
        textColor: "text-white",
      },
      {
        gradient: "bg-gradient-to-br from-lime-600/80 via-green-700/70 to-emerald-800/80",
        border: "border-lime-400/80",
        shadow: "shadow-xl shadow-lime-500/30",
        textColor: "text-white",
      },
      {
        gradient: "bg-gradient-to-br from-pink-600/80 via-rose-700/70 to-red-800/80",
        border: "border-pink-400/80",
        shadow: "shadow-xl shadow-pink-500/30",
        textColor: "text-white",
      },
    ]

    const hash = branch.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
    return colorSets[hash % colorSets.length]
  }

  const renderMemberCard = (member: FamilyMember, isSpousePair = false) => {
    const branchColors = getBranchColorClasses(member.branch)

    return (
      <Card
        key={member.id}
        className={`${isSpousePair ? "w-64 sm:w-72" : "w-72 sm:w-80"} ${branchColors.gradient} backdrop-blur-xl border-2 ${branchColors.border} ${branchColors.shadow} transition-all duration-500 hover:scale-105 hover:-translate-y-2 group ${
          member.isHead
            ? "ring-2 ring-amber-400/50 border-amber-300/90 shadow-2xl shadow-amber-400/40"
            : "hover:border-white/60"
        } ${member.isDeceased ? "opacity-90 grayscale-[0.2]" : ""} rounded-2xl overflow-hidden relative`}
      >
        <CardContent className="p-4 sm:p-6 relative">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 pointer-events-none rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

          {/* Family Head Crown */}
          {member.isHead && (
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-30">
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full p-2 sm:p-3 shadow-xl shadow-amber-400/60 border-2 border-amber-200/80">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-900" />
              </div>
              <div className="absolute inset-0 bg-amber-400/50 rounded-full blur-lg animate-pulse -z-10"></div>
            </div>
          )}

          {/* Photo Frame */}
          <div className="flex justify-center mb-3 sm:mb-4 relative z-10">
            <div
              className={`${isSpousePair ? "w-14 h-14 sm:w-16 sm:h-16" : "w-16 h-16 sm:w-20 sm:h-20"} rounded-full overflow-hidden border-3 ${
                member.isHead ? "border-amber-300/90" : "border-white/60"
              } shadow-lg relative group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-white/40 to-white/20`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30"></div>
              <img
                src={`/placeholder.svg?height=${isSpousePair ? 64 : 80}&width=${isSpousePair ? 64 : 80}&query=${member.name.replace(/\s+/g, "+")}`}
                alt={member.name}
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>

          {/* Name Display */}
          <h3
            className={`${isSpousePair ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold text-center mb-2 sm:mb-3 text-white drop-shadow-lg tracking-wide relative z-10`}
          >
            {member.name}
            {member.isDeceased && (
              <span className="text-red-300 ml-1 sm:ml-2 text-xs sm:text-sm font-medium">(Late)</span>
            )}
          </h3>

          {/* Data Fields */}
          {member.profession && (
            <div className="flex items-center justify-center mb-2 text-white bg-black/40 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-white/40 relative z-10">
              <Briefcase className="w-3 h-3 mr-1 sm:mr-2 text-blue-300 flex-shrink-0" />
              <span className={`${isSpousePair ? "text-xs" : "text-xs sm:text-sm"} text-center font-medium truncate`}>
                {member.profession}
              </span>
            </div>
          )}

          {member.qualification && (
            <div className="flex items-center justify-center mb-2 text-white bg-black/40 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-white/40 relative z-10">
              <GraduationCap className="w-3 h-3 mr-1 sm:mr-2 text-emerald-300 flex-shrink-0" />
              <span className={`${isSpousePair ? "text-xs" : "text-xs sm:text-sm"} text-center font-medium truncate`}>
                {member.qualification}
              </span>
            </div>
          )}

          {member.contact && (
            <div className="flex items-center justify-center mb-2 sm:mb-3 text-white bg-black/40 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-white/40 relative z-10">
              <Phone className="w-3 h-3 mr-1 sm:mr-2 text-purple-300 flex-shrink-0" />
              <span className={`${isSpousePair ? "text-xs" : "text-xs sm:text-sm"} font-mono font-medium truncate`}>
                {member.contact}
              </span>
            </div>
          )}

          {/* Badges */}
          <div className="flex flex-wrap gap-1 justify-center mb-2 sm:mb-3 relative z-10">
            {member.isHead && (
              <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-900 border border-amber-300/80 px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-bold shadow-lg">
                <Crown className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                HEAD
              </Badge>
            )}
            {member.spouse && (
              <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border border-pink-300/80 px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-bold shadow-lg">
                <Heart className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                MARRIED
              </Badge>
            )}
            {member.children.length > 0 && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border border-green-300/80 px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-bold shadow-lg">
                <Users className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                {member.children.length}
              </Badge>
            )}
          </div>

          {/* Branch Info */}
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/40 bg-black/30 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 relative z-10">
            <p className="text-xs text-white/90 text-center font-medium tracking-wider">FAMILY BRANCH</p>
            <p
              className={`text-white font-medium text-center mt-1 ${isSpousePair ? "text-xs" : "text-xs sm:text-sm"} truncate`}
            >
              {member.branch}
            </p>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-auto relative">
      {/* Enhanced Futuristic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Matrix Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(255, 0, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px, 50px 50px, 100px 100px, 100px 100px",
              animation: "matrix-scroll 20s linear infinite",
            }}
          />
        </div>

        {/* Holographic Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-400/60 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400/60 to-transparent animate-pulse delay-1500"></div>
        </div>

        {/* Floating Data Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 200}ms`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20"
                  stroke="cyan"
                  strokeWidth="0.3"
                  fill="none"
                  opacity="0.6"
                />
                <circle cx="10" cy="10" r="0.8" fill="cyan" opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Hexagonal Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300ffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 p-4 sm:p-8 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Header */}
          <div className="flex justify-between items-center lg:hidden">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl border border-white/20 shadow-xl">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  THOOMAT FAMILY TREE
                </h1>
              </div>
            </div>
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="p-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl border border-white/20 shadow-2xl">
                  <TreePine className="w-12 h-12 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>

              <div>
                <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-wide">
                  THOOMAT FAMILY TREE
                </h1>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-300" />
                    <span className="text-purple-200/80 text-sm font-medium">Digital Heritage</span>
                  </div>
                  <div className="w-1 h-1 bg-purple-300 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <Network className="w-4 h-4 text-pink-300" />
                    <span className="text-pink-200/80 text-sm font-medium">Connected Generations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-xl p-1 border border-white/20 backdrop-blur-xl">
                <Button
                  onClick={() => setViewMode("generation")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === "generation"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "bg-transparent text-white/70 hover:bg-white/10"
                  }`}
                >
                  <Network className="w-4 h-4 mr-2" />
                  Generations
                </Button>
                <Button
                  onClick={() => setViewMode("family")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === "family"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "bg-transparent text-white/70 hover:bg-white/10"
                  }`}
                >
                  <TreePine className="w-4 h-4 mr-2" />
                  Families
                </Button>
              </div>

              {viewMode === "family" && (
                <Button
                  onClick={toggleAllFamilies}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-lg px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl"
                >
                  {collapsedFamilies.size === Object.keys(familyGroups).length ? (
                    <>
                      <Eye className="w-4 h-4 mr-2" />
                      Expand All
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-4 h-4 mr-2" />
                      Collapse All
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xl">
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Button
                    onClick={() => {
                      setViewMode("generation")
                      setIsMobileMenuOpen(false)
                    }}
                    className={`w-full justify-start px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      viewMode === "generation"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "bg-transparent text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <Network className="w-4 h-4 mr-2" />
                    Generation View
                  </Button>
                  <Button
                    onClick={() => {
                      setViewMode("family")
                      setIsMobileMenuOpen(false)
                    }}
                    className={`w-full justify-start px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      viewMode === "family"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "bg-transparent text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <TreePine className="w-4 h-4 mr-2" />
                    Family View
                  </Button>
                </div>

                {viewMode === "family" && (
                  <Button
                    onClick={() => {
                      toggleAllFamilies()
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-lg px-4 py-3 rounded-xl transition-all duration-300"
                  >
                    {collapsedFamilies.size === Object.keys(familyGroups).length ? (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Expand All Families
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-4 h-4 mr-2" />
                        Collapse All Families
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Family Tree Content */}
      <div className="p-4 sm:p-8 relative">
        <div className="max-w-7xl mx-auto">
          {viewMode === "generation" ? (
            // Generation View
            Object.keys(generations)
              .sort((a, b) => Number(a) - Number(b))
              .map((genKey) => {
                const generation = Number(genKey)
                const members = generations[generation]
                const groupedMembers = groupSpouses(members)

                return (
                  <div key={generation} className="mb-16 sm:mb-20 relative">
                    {/* Generation Label */}
                    <div className="flex items-center justify-center mb-8 sm:mb-12 relative">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-white/30 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-xl shadow-xl relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            <span className="text-white font-bold text-lg sm:text-xl tracking-wide relative z-10">
                              GENERATION {generation}
                            </span>
                            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Members Grid */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 relative z-10">
                      {groupedMembers.map((memberOrPair, index) => (
                        <div key={index} className="relative group">
                          {Array.isArray(memberOrPair) ? (
                            // Spouse Pair
                            <div className="flex gap-2 sm:gap-4 items-center">
                              {memberOrPair.map((member) => renderMemberCard(member, true))}
                              {/* Marriage Connection */}
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 sm:w-6 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 shadow-lg z-10 rounded-full"></div>
                            </div>
                          ) : (
                            // Single Member
                            renderMemberCard(memberOrPair)
                          )}

                          {/* Connection Lines */}
                          {generation > 1 && !Array.isArray(memberOrPair) && memberOrPair.parentId && (
                            <div className="absolute -top-12 sm:-top-16 left-1/2 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-white/40 to-transparent transform -translate-x-1/2 rounded-full"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Generation Bridge */}
                    {generation < maxGeneration && (
                      <div className="absolute bottom-0 left-1/2 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-white/40 to-transparent transform -translate-x-1/2 rounded-full"></div>
                    )}
                  </div>
                )
              })
          ) : (
            // Family Headwise View
            <div className="space-y-16 sm:space-y-24">
              {Object.entries(familyGroups).map(([headId, { head, spouse, descendants }]) => {
                const isCollapsed = collapsedFamilies.has(headId)

                return (
                  <div key={headId} className="relative">
                    {/* Family Head Section */}
                    <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 relative">
                      <div className="relative mb-3 sm:mb-4">
                        {/* Family Head Display */}
                        <div className="bg-gradient-to-r from-amber-500/30 to-orange-500/30 border border-amber-300/50 rounded-2xl px-6 sm:px-12 py-4 sm:py-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                          <div className="flex items-center space-x-2 sm:space-x-4">
                            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300" />
                            <span className="text-white font-bold text-lg sm:text-2xl tracking-wide relative z-10">
                              {head.name} FAMILY
                            </span>
                            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300" />
                          </div>
                        </div>
                      </div>

                      {/* Clickable Minimize/Expand Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleFamilyCollapse(headId)
                        }}
                        className="bg-gradient-to-r from-purple-500/60 to-pink-500/60 hover:from-purple-400/80 hover:to-pink-400/80 border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                      >
                        <div className="flex items-center space-x-2">
                          {isCollapsed ? (
                            <>
                              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              <span className="text-white font-medium text-sm sm:text-base">Expand Family</span>
                            </>
                          ) : (
                            <>
                              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              <span className="text-white font-medium text-sm sm:text-base">Collapse Family</span>
                            </>
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Family Content */}
                    {!isCollapsed && (
                      <div className="animate-in fade-in duration-500">
                        {/* Family Head and Spouse Cards */}
                        <div className="flex justify-center mb-12 sm:mb-16">
                          <div className="relative flex items-center gap-4 sm:gap-6">
                            {renderMemberCard(head)}
                            {spouse && (
                              <>
                                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 shadow-lg rounded-full"></div>
                                {renderMemberCard(spouse)}
                              </>
                            )}
                          </div>
                        </div>

                        {/* Descendants by Generation */}
                        {descendants.length > 0 && (
                          <div className="space-y-12 sm:space-y-16">
                            {[2, 3, 4, 5, 6].map((gen) => {
                              const genDescendants = descendants.filter((d) => d.generation === gen)
                              if (genDescendants.length === 0) return null

                              const groupedDescendants = groupSpouses(genDescendants)

                              return (
                                <div key={gen} className="relative">
                                  {/* Generation Label */}
                                  <div className="flex items-center justify-center mb-6 sm:mb-8">
                                    <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/20 rounded-xl px-4 sm:px-6 py-2 backdrop-blur-xl shadow-lg">
                                      <span className="text-white font-medium text-base sm:text-lg">
                                        Generation {gen}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Connection Line */}
                                  <div className="absolute -top-4 sm:-top-6 left-1/2 w-0.5 h-4 sm:h-6 bg-gradient-to-b from-white/30 to-transparent transform -translate-x-1/2 rounded-full"></div>

                                  {/* Members */}
                                  <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                                    {groupedDescendants.map((memberOrPair, index) => (
                                      <div key={index} className="relative">
                                        {Array.isArray(memberOrPair) ? (
                                          <div className="flex gap-2 sm:gap-4 items-center">
                                            {memberOrPair.map((member) => renderMemberCard(member, true))}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 sm:w-6 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 shadow-lg z-10 rounded-full"></div>
                                          </div>
                                        ) : (
                                          renderMemberCard(memberOrPair, true)
                                        )}
                                        {/* Connection to parent */}
                                        <div className="absolute -top-8 sm:-top-12 left-1/2 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-white/30 to-transparent transform -translate-x-1/2 rounded-full"></div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Collapsed State */}
                    {isCollapsed && (
                      <div className="flex justify-center py-6 sm:py-8">
                        <div className="bg-white/10 border border-white/20 rounded-xl px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-xl">
                          <div className="flex items-center space-x-3">
                            <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                            <span className="text-white/80 font-medium text-sm sm:text-base">
                              Family tree collapsed • {descendants.length} members hidden
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes matrix-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100px);
          }
        }
      `}</style>
    </div>
  )
}
