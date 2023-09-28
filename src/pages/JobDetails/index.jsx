"use client"
import { useSelector } from 'react-redux'
import MainLayout from '@/Layout/MainLayout'
import JobModal from '@/modals/JobModal'
import { ContainerLayOut } from '@/components/atoms/ContainerLayOut/style'

export default function JobDetailsPage({ params }) {
  const { isLoading } = useSelector(state => state.jobs)
  return (
    <MainLayout>
      <ContainerLayOut>
        <JobModal id={+params.id} details />
      </ContainerLayOut>
    </MainLayout>
  )
}
