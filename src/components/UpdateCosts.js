import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cost from "./Cost";
import { Container, Navbar } from "react-bootstrap";
import CostForm from "./CostForm";
import "./App.css";

function UpdateCosts({ activities, costs, setCosts, employees }) {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:9292/project_cost`)
      .then((r) => r.json())
      .then((total) => setTotalCost(total));
  }, [costs]);

  function handleDelete(id) {
    fetch(`http://localhost:9292/costs/${id}`, {
      method: "DELETE",
    });
    const updatedCosts = costs.filter((cost) => cost.id !== id);
    setCosts(updatedCosts);
  }

  const costElems = costs.map((cost) => {
    const employee = employees.find(
      (employee) => employee.id === cost.employee_id
    );
    const activity = activities.find(
      (activity) => activity.id === cost.activity_id
    );

    return (
      <Cost
        key={cost.id}
        id={cost.id}
        name={cost.name}
        cost={cost.total_cost}
        handleDelete={handleDelete}
        category={cost.category}
        employee={employee.name}
        activity={activity.name}
        time={cost.created_at}
      />
    );
  });

  return (
    <Container>
      <Navbar className="navbar" fixed="top">
        <Navbar.Brand
          style={{ marginLeft: "10px", color: "#f68657", fontSize: "1em" }}
        >
          Update Costs
        </Navbar.Brand>
        <NavLink style={{ color: "#999", textDecoration: "none" }} exact to="/">
          Home
        </NavLink>
        <NavLink
          style={{ color: "#999", marginLeft: "10px", textDecoration: "none" }}
          to="/schedule"
        >
          Schedule
        </NavLink>
      </Navbar>
      <br></br>
      <h1
        className="d-flex justify-content-center"
        style={{ marginTop: "50px", backgroundColor: 'cyan', borderRadius: '0.3em'}}
      >
        Total Project Cost: KES {totalCost}
      </h1>
      <br></br>
      <Container>
        <CostForm
          costs={costs}
          setCosts={setCosts}
          activities={activities}
          employees={employees}
        />
      </Container>
      <br></br>
      <Container>{costElems}</Container>
    </Container>
  );
}

export default UpdateCosts;
