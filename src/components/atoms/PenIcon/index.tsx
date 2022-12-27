import Svg, { Path } from "react-native-svg";

type Pros = {
    width: string;
    height: string;
};

export const PenIcon = ({ width, height }: Pros) => {
    return (
        <>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.652 4.751L16.249 3.348C15.858 2.957 15.225 2.957 14.835 3.348L4 14.182V17H6.818L17.652 6.166C18.043 5.775 18.043 5.142 17.652 4.751Z"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M3 21H21"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M15.87 7.95L13.05 5.13"
                    stroke="#B2B2B2"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </>
    );
};
