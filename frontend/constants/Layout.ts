import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export const isSmallDevice = width < 375;
export const singleSideMargin = (width - 0.87 * width) / 2;
