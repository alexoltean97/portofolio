import React from 'react';
import Table from 'react-bootstrap/Table'; // Ensure you have react-bootstrap installed

const FeaturesTable = ({ items }) => {
  return (
    <div>
      <p>What’s Included?</p>
      <Table striped bordered hover>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.feature}</td>
              <td>{item.mark}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FeaturesTable;