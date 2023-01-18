import React from "react";

import { Grid } from "./styles";
import Image from "../Image";
import Login from "../Login";
import Welcome from "../Welcome";
import Subtitle from "../Subtitle";
import Form from "../Form";
import Button from "../Button";
import Google_button from "../Google_button";
import CreateAccount from "../CreateAccount";

const Layout: React.FC = () => {
    return (
        <Grid>
            <Image/>
            <Login/>
            <Welcome/>
            <Subtitle/>
            <Form/>
            <Button/>
            <CreateAccount/>
            <Google_button/>
        </Grid>
    )
}

export default Layout