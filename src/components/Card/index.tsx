import { ICard } from "../Board";
import { Container, Label } from "./styles";
import { useDrag } from "react-dnd";

interface CardProps {
    data: ICard;
}

export function Card({ data }: CardProps) {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "CARD",
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <Container ref={dragRef} isDragging={isDragging}>
            <header>
                {data.labels.map((label) => (
                    <Label key={label} color={label} />
                ))}
            </header>
            <p>{data.content}</p>
            {data.user && <img src={data.user} alt="avatr" />}
        </Container>
    );
}
