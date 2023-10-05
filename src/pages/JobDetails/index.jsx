"use client"

import MainLayout from '@/Layout/MainLayout'
import JobModal from '@/modals/JobModal'

import { ContainerLayOut } from '@/components/atoms/ContainerLayOut/style'

export default function JobDetailsPage({ params }) {
  return (
    <MainLayout>
      <ContainerLayOut>
        <JobModal id={+params.id} details />
      </ContainerLayOut>
    </MainLayout>
  )
}
