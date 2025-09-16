"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type UserType = "investor" | "organization" | null

interface UserContextType {
  userType: UserType
  setUserType: (type: UserType) => void
  isLoggedIn: boolean
  setIsLoggedIn: (loggedIn: boolean) => void
  organizationData?: {
    id: string
    name: string
    email: string
  }
  investorData?: {
    id: string
    name: string
    email: string
  }
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const organizationData = {
    id: "org-1",
    name: "Green Future Institute",
    email: "contact@greenfuture.org",
  }

  const investorData = {
    id: "inv-1",
    name: "Maria Silva",
    email: "maria@email.com",
  }

  return (
    <UserContext.Provider
      value={{
        userType,
        setUserType,
        isLoggedIn,
        setIsLoggedIn,
        organizationData,
        investorData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
