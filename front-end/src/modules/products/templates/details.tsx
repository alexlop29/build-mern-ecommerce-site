import React from 'react'
import { useParams } from 'react-router-dom';

export const Details = ( props: any) => {
  const { id } = useParams();

  return (
    <div>{id}</div>
  )
}
