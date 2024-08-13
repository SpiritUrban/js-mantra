import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  cursor: pointer;
  background: green;
  border-radius: 1rem;
  padding: 0 0.5rem;
  width: fit-content;
`;

interface IStatusBadge {
  title: string;
}

const StatusBadge: React.FC<IStatusBadge> = ({ title }) => {
  return <Badge>{title}</Badge>;
};

export default StatusBadge;
