import React from 'react'

export default function DetailsPage(props) {
    return (
        <div className="bd-example">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Code</th>
                        <th scope="col">space_available</th>
                        <th scope="col">type</th>
                        <th scope="col">cluster</th>
                        <th scope="col">is_registered</th>
                        <th scope="col">is_live</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">{props.data.data.id}</th>
                        <td>{props.data.data.name}</td>
                        <td>{props.data.data.city}</td>
                        <td>{props.data.data.code}</td>
                        <td>{props.data.data.space_available}</td>
                        <td>{props.data.data.type}</td>
                        <td>{props.data.data.cluster}</td>
                        <td>{props.data.data.is_registered ? "true" : "false"}</td>
                        <td>{props.data.data.is_live ? "true" : "false"}</td>
                        <td className="btn btn-danger">Edit</td>
                    </tr>
                    <tr className="table-active">
                        <td scope="row"><input /></td>
                        <td><input /></td>
                        <td><input /></td>
                        <td><input /></td>
                        <td><input /></td>
                        <td><input /></td>
                        <td><input /></td>
                        <td><input /></td>
                        <td className="btn btn-danger">Save</td>
                    </tr>
                </tbody>
            </table>
            <h1>{props.data.data.is_registered}</h1>
        </div>
    )
}
