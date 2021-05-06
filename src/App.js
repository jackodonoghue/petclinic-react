import pivotal from './images/spring-pivotal-logo.png';
import './css/petclinic.css';
import React from 'react';
import Amplify, { API } from 'aws-amplify';

const myInit = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  }
};

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "VetsMicroserviceAPI",
        endpoint: "https://prfia0cqtf.execute-api.eu-west-1.amazonaws.com/tst",
        region: 'eu-west-1'
      }
    ]
  }
});

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    API.get('VetsMicroserviceAPI', '/vets', myInit).then((response) => {
      let data = [];
      console.log("res" + response)
      for (let item in response) {
        data.push(response[item]);
      }
      this.setState({ data });
    })
  }

  renderTableData() {
    return this.state.data.map(function (item) {
      const { id, Name, Speciality } = item //destructuring
      return (
        <tr key={id}>
          <td><span>{Name}</span></td>
          <td><span>{Speciality}</span></td>
        </tr>
      )

    });
  }

  render() {
    return (
      <div>

        <div>
          <nav className="navbar navbar-default" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="/"><span></span></a>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navbar">
                  <span className="sr-only">
                  </span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse" id="main-navbar">
                <ul className="nav navbar-nav navbar-right">
                  <li >
                    <a href='/'>
                      <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                      <span>Home</span>
                    </a>
                  </li>

                  <li>
                    <a href='/owners/find'>
                      <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                      <span>Find owners</span>
                    </a>
                  </li>

                  <li>
                    <a href='/vets.html'>
                      <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                      <span>Veterinarians</span>
                    </a>
                  </li>

                  <li>
                    <a href='/oups'>
                      <span className="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
                      <span>Error</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="container xd-container">
              <h1 id='title'>Veterinarians</h1>
              <table id='vets' className="table table-striped">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Specialties</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderTableData()}
                </tbody>
              </table>
              <br />
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <img src={pivotal} alt="Sponsored by Pivotal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Table;
