import React from "react"
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import Navbar from "../components/Navbar"
const { Content } = Layout



function Root() {
	return (
		<Layout>
			<Navbar/>
			<Content
				style={{
					height: "100vh",
					maxHeight: "calc(100vh - 128.09px)",
					padding: "1em 2em"
				}}
			>
				<Outlet />
			</Content>

			{/* <Footer>Wiki Countries</Footer> */}
		</Layout>
	)
}

export default Root