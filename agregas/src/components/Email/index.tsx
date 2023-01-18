import React from "react";

import { Container_email } from "./styles";
import {Text_email} from "./styles"
import { Form_Text_email } from "./styles";

const Email: React.FC = () => {
    return (
        <Container_email>
            <Text_email>Email ou celular</Text_email>
            <Form_Text_email></Form_Text_email>
        </Container_email>
    )
}

export default Email