import React from "react";

import { Container } from "./styles";
import Email from "../Email";
import Senha from "../Senha";
import Checkbox from "../Checkbox";

const Form: React.FC = () => {
    return (
        <Container>
            <Email/>
            <Senha/>
        </Container>
    )
}

export default Form