import React from "react";

import { Container } from "./styles";
import { Text } from "./styles";
import { Form_Text } from "./styles";
import Checkbox from "../Checkbox";

const Senha: React.FC = () => {
    return (
        <Container>
            <Text>Senha</Text>
            <Form_Text type='password'></Form_Text>
            <Checkbox/>

        </Container>
    )
}

export default Senha