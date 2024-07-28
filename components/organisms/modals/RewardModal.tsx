import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import { styled } from 'styled-components';

const Inside = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

interface RewardModalProps {
    show: boolean;
    onHide: () => void;
    content: {
        title: string;
        heading: string;
        description: string;
        img: string;
    };
}

const RewardModal: React.FC<RewardModalProps> = (props) => {
    const { title, heading, description, img } = props.content;
    return (
        <Modal
            data-bs-theme="dark"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Inside>

                    <div className="left">
                        <Image
                            src={img}
                            alt="JS Mantra"
                            className="test"
                            width={1000}
                            height={1000}
                            priority
                            style={{
                                borderRadius: "3rem",
                            }}
                        />
                    </div>
                    <div className="right">

                        <h4>{heading}</h4>

                        <p> {description} </p>

                    </div>

                </Inside>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RewardModal;
