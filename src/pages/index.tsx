import React, {FC} from "react";
import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import Thoughts from "../components/Thoughts";
import {PropsThoughts} from "../interfaces/PropsThoughts";

const Index = ({ thoughts }: PropsThoughts) => {
    return (
        <Container>
            <Thoughts thoughts={thoughts} />
        </Container>
    );
}

Index.getInitialProps = async ({ req }: { req: { protocol: string; get: (value: string) => string } }) => {
    const baseURL: string = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseURL}/api/thoughts`);
    return {
        thoughts: await res.json()
    };
};

export default Index;