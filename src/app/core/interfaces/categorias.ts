import { Producto } from "./productos"

export interface Categoria{
    nombre: String
    id: number
    imgUrl: String
    productos: Producto []
}