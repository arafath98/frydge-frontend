import styled from "styled-components";

export default styled.button`
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
    font-weight: bold;
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    border: none;
`;