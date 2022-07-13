import React from "react";
import { Container } from "./styled";

export default function Navbar(props) {
// const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <Container>
        <div className="pagination-container">
            <button onClick={onLeftClick}><div>◀️</div></button>
            <div>{page} / {totalPages}</div>
            <button onClick={onRightClick}><div>▶️</div></button>
        </div>
        </Container>
    )
}