import pivotal from './images/spring-pivotal-logo.png';
import './css/petclinic.css';
import React from 'react';
//import ReactDOM from 'react-dom';


class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        {
          id: 0,
          Name: "Linda Douglas",
          Speciality: "dentistry"
        },
        {
          id: 1,
          Name: "Helen Leary",
          Speciality: "radiology"
        },
        {
          id: 2,
          Name: "Henry Stevens",
          Speciality: "radiology"
        },
        {
          id: 3,
          Name: "Linda Douglas",
          Speciality: "surgery"
        },
        {
          id: 4,
          Name: "Rafael Ortega",
          Speciality: "surgery"
        }
      ]
    }
  }

  renderTableHeader() {
    console.log(typeof (this.state.students[0]))
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
      if (key !== 'id') {
        return <th key={index}>{key.toUpperCase()}</th>
      }
    })
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      console.log(student)
      const { id, Name, Speciality } = student //destructuring
      console.log(Name)
      return (
        <tr key={id}>
          <td><span>{Name}</span></td>
          <td><span>{Speciality}</span></td>
        </tr>
      )
    })
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
        <tbody>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialties</th>
            </tr>
          </thead>
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
