import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RoorState } from "../store";

export const useSelectorType: TypedUseSelectorHook<RoorState> = useSelector