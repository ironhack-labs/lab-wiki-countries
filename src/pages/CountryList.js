import { Col, Row } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import CountryList from '../components/CountriesList'

function Countries() {
  return (
    <Row
			gutter={16}
			style={{ maxHeight: "calc(100vh - 128.09px)", height: "100%" }}
		>
      <Col span={8} style={{ height: "100%", overflow: "scroll" }}>
      <CountryList/>
      </Col>

      <Col>
        <Outlet/>
      </Col>

    </Row>


  )
}

export default Countries