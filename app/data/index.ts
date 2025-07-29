import { mohamedunnyFamily } from "./family-1-mohamedunny"
import { kunjupathummaFamily } from "./family-2-kunjupathumma"
import { pathavuFamily } from "./family-3-pathavu"
import { nafeesakuttyFamily } from "./family-4-nafeesakutty"
import { alikunjiFamiy } from "./family-5-alikunji"
import { kunjaisuFamily } from "./family-6-kunjaisu"
import { aminakuttyFamily } from "./family-7-aminakutty"
import { aboobackerFamily } from "./family-8-aboobacker"
import { zainbaFamily } from "./family-9-zainba"
import { ibrahimkuttyFamily } from "./family-10-ibrahimkutty"
import type { FamilyMember } from "../types/family-member"

// Combine all families
export const allFamilyData: FamilyMember[] = [
  ...mohamedunnyFamily,
  ...kunjupathummaFamily,
  ...pathavuFamily,
  ...nafeesakuttyFamily,
  ...alikunjiFamiy,
  ...kunjaisuFamily,
  ...aminakuttyFamily,
  ...aboobackerFamily,
  ...zainbaFamily,
  ...ibrahimkuttyFamily,
]

// Export individual families for easy access
export {
  mohamedunnyFamily,
  kunjupathummaFamily,
  pathavuFamily,
  nafeesakuttyFamily,
  alikunjiFamiy,
  kunjaisuFamily,
  aminakuttyFamily,
  aboobackerFamily,
  zainbaFamily,
  ibrahimkuttyFamily,
}
