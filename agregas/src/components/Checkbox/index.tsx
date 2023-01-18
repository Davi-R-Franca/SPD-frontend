import React from "react";

import { Container_check } from "./styles";
import { Checkboxx } from "./styles";
import { Text_1 } from "./styles";
import { Text_2 } from "./styles";


const Checkbox: React.FC = () => {
    return(
        <Container_check>
            <Checkboxx type='checkbox'></Checkboxx>
            {/* <Text_1>Lembre-me</Text_1>
            <Text_2>Esqueceu sua senha?</Text_2> */}
        </Container_check>
    )
}

export default Checkbox