export type Talent = {
    id: string
    brand: string
    legalName: string
    gender: string
    attributes: Attributes
    location: string
    profile: string
    age: number
    isElite: boolean
    isNew: boolean
    instagram: string
    tiktok: string
    facebook: string
}

export type Booking = {
    type: string | undefined
    startHour: number | undefined
    startMin: number | undefined
    endHour: number | undefined
    endMin: number | undefined
    date: Date
}

export interface Model extends Talent {
    portfolio: string[]
    digitals: string[]
}

export interface Actor extends Talent {
    headshots: string[]
}
  
export type Attributes = {
    height: string
    waist: string
    chest: string
    hips: string
    dress: string
    shoe: string
    hair: string
    eyes: string
}