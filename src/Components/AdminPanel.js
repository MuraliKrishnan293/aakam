import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Styles/AdminPanel.css';
import { Table, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import moment from 'moment';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AdminPanel = () => {

    const auth = localStorage.getItem("token");
    const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // if (auth) {
    //   axios.get('/api/all-appointments')
    //     .then(response => {
    //       setAppointments(response.data);
    //       setLoading(false);
    //     })
    //     .catch(error => {
    //       console.error("Error fetching appointments:", error);
    //       setLoading(false);
    //     });
    // }



    const resp = async()=>{
        const response = await axios.get('http://localhost:5000/app/reviews',{
            headers: {
                'Authorization': `Bearer ${auth}`,
            },
        });
        setAppointments(response.data);
        console.log(response.data);
        setLoading(false);
    }


    const res = async()=>{
        const response = await axios.get('http://localhost:5000/app/all-appointments',{
            headers: {
                'Authorization': `Bearer ${auth}`,
            },
        });
        setAppointments(response.data);
        console.log(response.data);
        setLoading(false);

    }
    res();
  }, [auth]);

  console.log(appointments);
//   console.log("Created At:", appointment.createdAt);


    if (!auth) {
        return <h1 style={{ marginTop: "200px", textAlign: 'center', color: 'red' }}>Unauthorized</h1>;
      }
  return (
    <>
    {auth && (
        <Tabs
        // defaultActiveKey="profile"
        // id="uncontrolled-tab-example"
        className="container" style={{ marginTop: "100px"}}
      >
        <Tab eventKey="appointments" title="Appointments">
          <Container fluid className="admin-dashboard mt-5">
            
        <Row>
          <Col className="text-center">
            <h2>Appointment Dashboard</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="shadow">
              <Card.Header className="bg-primary text-white text-center">
                <h4>Appointments</h4>
              </Card.Header>
              <Card.Body>
                {loading ? (
                  <div className="text-center">
                    <Spinner animation="border" variant="primary" />
                  </div>
                ) : (
                  <Table responsive bordered hover className="appointments-table table table-striped table-bordered">
                    <thead className='text-center'>
                      <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Phonenumber</th>
                        <th>Address</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    {/* <tbody> */}
                        {appointments.length > 0 ? (appointments.map((appointment) => (
                        <tr className='text-center' key={appointment._id}>
                          <td>{appointment.name}</td>
                          <td>{appointment.email}</td>

                          {/* <td>{new Date(Date.parse(appointment.createdAt)).toLocaleDateString()}</td> */}
                          <td>{moment(appointment.createdAt).format('DD-MM-YYYY')}</td>
                          <td>{appointment.phoneNumber}</td>
                          <td>{appointment.address}</td>
                          <td>{appointment.message}</td>
                        </tr>
                      ))):(<h1 className='text-center w-100 bg-info'></h1>)}
                      
                    {/* </tbody> */}
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </Tab>
        <Tab eventKey="Reviews" title="Reviews">
          Reviews
        </Tab>
      </Tabs>
        
    )}
    </>
  )
}

export default AdminPanel;