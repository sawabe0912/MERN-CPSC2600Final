import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import api from "../api";
import "./TshirtsList.css";
import "react-table/react-table.css";
import { ThemeContext } from "../context/ThemeContext";

export function UpdateTshirt(props) {
	const updateUser = (event) => {
		event.preventDefault();
		window.location.href = `/tshirts/update/${props.id}`;
	};

	return <button onClick={updateUser}>Update</button>;
}

export function DeleteTshirt(props) {
	const deleteUser = (event) => {
		event.preventDefault();
		api.deleteTshirtById(props.id);
		window.location.reload();
	};
	return <button onClick={deleteUser}>Delete</button>;
}

function TshirtsList(props) {
	const [tshirts, setTshirts] = useState({});

	useEffect(() => {
		fetch(`http://localhost:3000/api/tshirts`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				setTshirts(data);
			})
			.catch(() => {
				console.log("No data");
			});
	}, []);

	const { toggle } = React.useContext(ThemeContext);

	const columns = [
		{
			Header: "Name",
			accessor: "name",
		},
		{
			Header: "Rating",
			accessor: "rating",
		},
		{
			Header: "",
			accessor: "",
			Cell: function (props) {
				return (
					<span>
						<DeleteTshirt id={props.original._id} />
					</span>
				);
			},
		},
		{
			Header: "",
			accessor: "",
			Cell: function (props) {
				return (
					<span>
						<UpdateTshirt id={props.original._id} />
					</span>
				);
			},
		},
	];

	return (
		<div
			className="listPage"
			style={toggle ? { background: "Darkblue", color: "white" } : {}}
		>
			<ReactTable
				data={tshirts.data}
				columns={columns}
				showPageSizeOptions={true}
				minRows={0}
				maxRows={10}
			/>
		</div>
	);
}

export default TshirtsList;
