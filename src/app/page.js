"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import useAuth from "@/hooks/useAuth"

import { PATH } from "@/router/path"
import { ROLES } from "@/constants/role"

export default function Home() {
  const { role } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (role === ROLES.GUEST|| role===null)
      router.replace(PATH.LOGIN)
    else router.replace(PATH.HOME)
  }, [role])
  return (
    <></>
  )
}
