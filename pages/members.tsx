"use client";
import Table from "react-bootstrap/Table";

export default function Members() {
  const members = [
    {
      name: "Maksym Pryshchepa",
      contacts: "",
      status: "source community developer",
      github:{
        title:"Maks-Mm",
        link:"https://github.com/Maks-Mm"
      },
      portfolioLink:"http://meinportfolio.com",
    },
    {
      name: "Weronika",
      contacts: "",
      status: "source community developer",
      github:{
        title:"",
        link:"https://github.com/Putinica",
      },
      portfolioLink:"",
    },
  ];

  return (
    <main>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Members of Community</th>
            <th>Contacts</th>
            <th>Status</th>
            <th>GitHub</th>
            <th>Portfolio</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => {
            return (
              <tr key={index + "table-member"}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{}</td>
                <td>{member.status}</td>
                <td><a href={member.github.link} target="_blank">{member.github.title}</a></td>
                <td><a href={member.portfolioLink} target="_blank">Link</a></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </main>
  );
}
