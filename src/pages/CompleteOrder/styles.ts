import styled from "styled-components";


export const CompleteOrderContainer = styled.form`
margin: top;
display: flex;
align-items: center;
justify-content: space-between;
gap: 2rem;

`;

export const SectionBaseStyle = styled.div`
width: 100%;
background: ${({ theme }) => theme.colors["base-card"] };
border-radius: 6px;
padding: 2.5rem;


`;
