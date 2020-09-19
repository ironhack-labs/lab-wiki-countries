import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Card, Spin, Typography } from "antd"
const { Title } = Typography;


function Detail({ match: { params: { cca3 } } }) {
    const [countryDetail, setCountryDetail] = useState({})

    async function getData(code){
       const { data } = await axios.get(`https://countries.tech-savvy.tech/countries/${code}`)
       console.log(data[0].name.official)
       setCountryDetail(data[0])
    }

    useEffect(() => {
        getData(cca3)
        console.log(countryDetail.name)
    }, [cca3])


    return (
        <div className="site-card-border-less-wrapper">
            {countryDetail?
                <Card title="Official name:" bordered={false} style={{ width: "90%" }}>
                <Title level={5}>Capital: {countryDetail.capital}</Title>
                <Title level={5}>Region: {countryDetail.region}</Title>
                <Title level={5}>Area: {countryDetail.area} km2</Title>
                </Card> :
                <div className="example">
                    <Spin />
                </div>
            }
      </div>
    )
}

export default Detail
