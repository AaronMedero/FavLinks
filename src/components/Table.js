import React from 'react';

const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

// const linkData = [];

const TableBody = props => { 
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.Name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { linkData, removeLink } = props;
     //add <TableBody /> to the bottom of <TableHeader>
 
     return (
         <div>
             <table>
                 <TableHeader />
                 <TableBody linkData = {linkData} removeLink = {removeLink}/>
             </table>
         </div>
 
     )
 
 }
 
 export default Table;


/* Code for making table from W3 schools
[<table> 
                <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
                </tr>
                <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
                </tr>
                <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                </tr>
            </table>]

        */