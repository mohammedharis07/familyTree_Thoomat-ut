export interface FamilyMember {
  id: string
  name: string
  profession?: string
  qualification?: string
  contact?: string
  isHead: boolean
  generation: number
  parentId?: string
  spouse?: string
  children: string[]
  branch: string
  isDeceased?: boolean
}
