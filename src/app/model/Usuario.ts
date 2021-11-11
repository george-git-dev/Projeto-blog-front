import { Postagem } from "./Postagem";

export class Usuario {
    public email: string;
    public foto: string;
    public idUsuario: number;
    public minhasPostagens: Postagem[];
    public nome: string;
    public senha: string;
    public tipo: string;
}