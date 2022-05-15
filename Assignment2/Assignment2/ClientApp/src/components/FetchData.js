import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { manager: [], loading: true };
  }

  componentDidMount() {
    this.populateManagerData();
  }

  static renderManagersTable(manager) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {manager.map(manger =>
            <tr key={manager.efManagerId}>
              <td>{manager.firstName}</td>
              <td>{manager.lastName}</td>
              <td>{manager.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderManagersTable(this.state.manager);

    return (
      <div>
        <h1 id="tabelLabel" >Manager Data</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateManagerData() {
      const response = await fetch('https://localhost:7181/api/Managers/0',
          {
              method: 'Get',
              credentials: 'include',
              headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token"),
                  'Content-Type': 'application/json'
              }
          });
    const data = await response.json();
    this.setState({ manager: data, loading: false });
  }
}
