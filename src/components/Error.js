import React from 'react'
import { useRouteError } from 'react-router-dom'
export const Error = () => {

    const err = useRouteError()
console.log(err)
  return (
    <div>
        <h1>Oops !! </h1>
        <h1> Something gets wrong!!</h1>
        <h3>
            {err.error.message}: {err.statusText}
        </h3>
    </div>
  )
}
