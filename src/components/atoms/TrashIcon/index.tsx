import Svg, { Path } from "react-native-svg";

type Pros = {
    width: string;
    height: string;
};


export const TrashIcon = ({ height, width }: Pros) => {
    return (
        <>
            <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
                <Path
                    d="M5 7H19"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M18 7V18C18 19.105 17.105 20 16 20H8C6.895 20 6 19.105 6 18V7"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M15 3.75H9"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M10 11V16"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M14 11V16"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </>
    );
};
