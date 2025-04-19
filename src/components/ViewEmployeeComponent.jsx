
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewEmployeeComponent = () => {
  const { id } = useParams(); // Access route parameters

  useEffect(() => {
    // Logic for componentDidMount, e.g., fetching data using `id`
  }, [id]);

  return (
    <div>
      <h2> view Employee page for Employee ID: {id}</h2>
    </div>
  );
};

export default ViewEmployeeComponent;

