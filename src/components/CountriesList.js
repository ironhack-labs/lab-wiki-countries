import React from 'react'
import { Link } from 'react-router-dom'
import { List, Divider } from 'antd'

const CountriesList = ({ countries }) => {
    return (
        <div style={{ width: 300, marginTop: 65 }}>
            <List
                bordered
                dataSource={countries}
                renderItem={country => (
                    <List.Item>
                        <Link to={`/${country.cca3}`}>{country.name.official}</Link>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default CountriesList
