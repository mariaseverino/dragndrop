import styled from "styled-components";

interface Props {
    done: boolean;
}

export const Container = styled.div<Props>`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    opacity: ${(props) => (props.done ? 0.6 : 1)};

    /* flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 320px; */

    /* pula a primeira div */
    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2 {
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button {
            height: 42px;
            width: 42px;
            border-radius: 18px;
            background: #3b5bfc;
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 30px;
    }
`;
