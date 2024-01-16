import { Dispatch, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export interface ProductType {
    id: string;
    name: string;
    price: number;
    user_id: string;
}
