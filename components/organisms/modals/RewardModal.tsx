import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import styled from 'styled-components';
import { playSound } from '@/utils';

const Inside = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    .left {
        flex: 2; /* This will take up 1 part of the remaining space */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right {
        flex: 2; /* This will take up 2 parts of the remaining space */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
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

    useEffect(() => {
        if (props.show) {
            playSound('/sound/pop.mp3');
        }
    }, [props.show]);

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
                            width={300}  // Adjusted to fit better
                            height={300} // Adjusted to fit better
                            priority
                            style={{
                                borderRadius: "3rem",
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                    <div className="right">
                        <h4>{heading}</h4>
                        <p>{description}</p>
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
