import MainLayout from '@/Layout/MainLayout'
import { getMatchJobs } from '@/redux/slices/search'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function FilterPage({ params }) {
  const { isLoading, matchJobs } = useSelector(state => state.search)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMatchJobs(params.search))
  }, [params.search])
  return (
    <MainLayout>

    </MainLayout>
  )
}
