import { Dispatch, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export interface VideoType {
    id: string;
    name: string;
    category: string;
}
