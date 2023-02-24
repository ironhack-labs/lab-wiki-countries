import { Typography } from 'antd'
import React from 'react'


export default function Country({details}) {
    console.log (details) 
  return (
    <div>
          <h1>{details.name}</h1>
			<Typography.Text type="secondary">
				<p>{details.capital}</p>
            <p>{details.population}</p>
			</Typography.Text>
    </div>
  )
}
