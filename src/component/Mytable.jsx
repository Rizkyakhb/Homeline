import React from 'react';

const MyTable = () => {
  const tableData = [
    { id: 1, col1: 'Data 1', col2: 'Data A', col3: 'Data X' },
    { id: 2, col1: 'Data 2', col2: 'Data B', col3: 'Data Y' },
    { id: 3, col1: 'Data 3', col2: 'Data C', col3: 'Data Z' },
    { id: 3, col1: 'Data 3', col2: 'Data C', col3: 'Data Z' },
    { id: 3, col1: 'Data 3', col2: 'Data C', col3: 'Data Z' },
    { id: 3, col1: 'Data 3', col2: 'Data C', col3: 'Data Z' },
    { id: 3, col1: 'Data 3', col2: 'Data C', col3: 'Data Z' },
    { id: 3, col1: 'Data 3', col2: 'Data C', col3: 'Data Z' },
    { id: 3, col1: 'Data 3', col2: 'Data C', col3: 'Data Z' },
    { id: 3, col1: 'Data 3', col2: 'Data C', col3: 'Data Z' },
    // ...Tambahkan data sesuai kebutuhan
  ];

  return (
    <table className="table mt-5 border">
      <thead>
        <tr>
          <th>ID</th>
          <th>Kolom 1</th>
          <th>Kolom 2</th>
          <th>Kolom 3</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.col1}</td>
            <td>{item.col2}</td>
            <td>
              <button className="btn btn-primary mr-2">Tombol 1</button>
              <button className="btn btn-secondary">Tombol 2</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
