import { CourseGrid } from '@/components/common'
import CourseItem from '@/components/course/CourseItem'
import Headiing from '@/components/typography/Headiing'
import React from 'react'

const page = () => {
  return (
    <>
      <Headiing>Khu vực học tập</Headiing>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </>
  )
}

export default page