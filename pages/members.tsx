"use client";

import React from "react";
import Table from "react-bootstrap/Table";
import { members, Member, Contact } from "@/data/members";

interface MemberRowsProps {
  members: Member[];
}

interface ContactItemsProps {
  contacts: Contact[];
}

const ContactItems: React.FC<ContactItemsProps> = ({ contacts }) =>
  contacts.map((contact, contactIndex) => (
    <div key={contactIndex}>
      <a href={contact.link} target="_blank" rel="noopener noreferrer">
        {contact.type}
      </a>
    </div>
  ));

const MemberRows: React.FC<MemberRowsProps> = ({ members }) => (
  <>
    {members.map((member, index) => (
      <tr key={index + "table-member"}>
        <td>{index + 1}</td>
        <td>{member.name}</td>
        <td>
          <ContactItems contacts={member.contacts} />
        </td>
        <td>{member.status}</td>
        <td>
          <a
            href={member.github.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {member.github.title || "GitHub"}
          </a>
        </td>
        <td>
          {member.portfolioLink && (
            <a
              href={member.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          )}
        </td>
      </tr>
    ))}
  </>
);

export default function Members() {
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
          <MemberRows members={members} />
        </tbody>
      </Table>
    </main>
  );
}
