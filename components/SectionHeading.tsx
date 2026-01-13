import styled from "styled-components";

interface HeaderProps {
    title?: string;
    text?: string | React.ReactNode;
}

export const SectionHeading = ({ title, text }: HeaderProps) => {
    return (
        <Header>
            <h2>{title}</h2>
            <p>{text}</p>
        </Header>
    );
};

const Header = styled.div`
    text-align: center;

    h2 {
        font-size: 2.4rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 12px;
    }
    p {
        margin-bottom: 20px;
    }
`;
