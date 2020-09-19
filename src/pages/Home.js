import React from 'react'
import { Typography, Space } from 'antd';

const { Title, Text } = Typography;

function Home() {
    return (
        <div>
        <Title>Welcome to IronConutries</Title>
        <Space direction="vertical">
            <Text>Here you can learn a little about all the conutries in the world.</Text>
            <Text>Click on any name on the sidebar to start.</Text>
        </Space>
        </div>
    )
}

export default Home
