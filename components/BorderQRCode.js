import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const TopLeftCorner = () => (
    <Svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.602 0H0v50.274h9.479v-39.8h34.123V0Z"
            fill="#1B8DE4"
        />
    </Svg>
);

export const TopRightCorner = () => (
    <Svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44 50.273V0H.398v10.929h34.518v39.344H44Z"
            fill="#1B8DE4"
        />
    </Svg>
);

export const BottomLeftCorner = () => (
    <Svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 .727V51H43.602V40.071H9.084V.727H0Z"
            fill="#1B8DE4"
        />
    </Svg>
);

export const BottomRightCorner = () => (
    <Svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.398 51H44V.726h-9.479v39.8H.398V51Z"
            fill="#1B8DE4"
        />
    </Svg>
);
