import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import FlightList from '../../components/Flight/FlightList'

export default function fsearch() {
  return (
    <div>
      <FlightList />
    </div>
  )
}
