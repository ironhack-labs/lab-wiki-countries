import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Countries extends Component {
	render() {
		return (
			<div className="list-group">
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ABW"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇼 Aruba
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/AFG"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇫 Afghanistan
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/AGO"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇴 Angola
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/AIA"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇮 Anguilla
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ALA"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇽 Åland Islands
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ALB"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇱 Albania
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/AND"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇩 Andorra
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ARE"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇪 United Arab Emirates
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ARG"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇷 Argentina
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ARM"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇲 Armenia
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ASM"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇸 American Samoa
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ATA"
					onClick={() => {
						this.props.update();
					}}
				>
					🇦🇶 Antarctica
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/FLK"
					onClick={() => {
						this.props.update();
					}}
				>
					🇫🇰 Falkland Islands
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action "
					activeclass="active"
					to="/FRA"
					onClick={() => {
						this.props.update();
					}}
				>
					🇫🇷 France
				</NavLink>
				<NavLink
					className="list-group-item list-group-item-action"
					activeclass="active"
					to="/ZWE"
					onClick={() => {
						this.props.update();
					}}
				>
					🇿🇼 Zimbabwe
				</NavLink>
			</div>
		);
	}
}

export default Countries;
