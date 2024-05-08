import { Tag } from "./Tag";

export interface Projeto{
    id: number;
    name: string;
    resumo: string;
    descricao: string;
    linkProjeto: string;
    imagens: string[];
    tags: Tag[];
}