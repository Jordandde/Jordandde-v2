import React from "react";
import {
    FlexCol,
    Banner
} from "../App.components";
const JordanddeBanner = (stay, stick, offset) => (
    <FlexCol>
        {stay !== "" ? <Banner style={offset}>{stay}</Banner>: null}
        <Banner>{stick}</Banner>
    </FlexCol>
)

export default JordanddeBanner;