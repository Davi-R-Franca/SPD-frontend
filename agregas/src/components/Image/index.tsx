import React from "react";

import agregas from '../../assets/agregas.png'
import { Container } from "./styles";

const Image: React.FC = () => {
    return (
        <Container src={agregas} alt="logo">
        </Container>
    )
}

export default Image