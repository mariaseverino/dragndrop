import { loadLists } from "../../services/api";
import { List } from "../List";
import { Container } from "./styles";

export type IContent = {
    title: string;
    creatable: boolean;
    done: boolean;
    cards: ICard[];
};

export type ICard = {
    id: number;
    content: string;
    labels: string[];
    user?: string;
};

const lists = loadLists();

export function Board() {
    return (
        <Container>
            {lists.map((list) => (
                <List key={list.title} data={list} />
            ))}
        </Container>
    );
}
