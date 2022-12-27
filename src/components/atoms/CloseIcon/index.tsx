import Svg, { Line } from "react-native-svg";

type Pros={
    width:string,
    height:string,
}

export const CloseIcon = ({height,width}:Pros) => {
    return (
        <>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 14 14"
                fill="none"
            >
                <Line
                    x1="0.883883"
                    y1="1"
                    x2="13"
                    y2="13.1161"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                />
                <Line
                    x1="13.0023"
                    y1="0.88388"
                    x2="0.951995"
                    y2="12.9977"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                />
            </Svg>
        </>
    );
};
