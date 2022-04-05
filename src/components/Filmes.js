import { Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import Review from "./Review";
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';

const fabStyle = {
    position: 'fixed',
    bottom: 40,
    zIndex: 9999,
    right: 16,
    backgroundColor: '#beb5b5'
};

const Filmes = (props) => {
    let filmes = JSON.parse(localStorage.getItem("filmografia"));
    if (!filmes) filmes = [];
    const [filmografia, setFilmografia] = useState(filmes);
    const [open, setOpen] = React.useState(false);
    const apagaTarefa = (id) => {
        setFilmografia(filmografia.filter((tarefa) => tarefa.id !== id));
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    };

    const listaVazia = () => filmografia.length === 0;

    useEffect(() => localStorage.setItem("filmografia", JSON.stringify(filmografia)));
    

    return (
        <div className="component">
            <ul className={`list ${listaVazia() ? "hidden" : ""}`}>
            {filmografia.map((t, i) => (
                <Review
                key={t+i}
                nome={t.descricao}
                data={t.data}
                avaliacao={t.rate}
                id={t.id}
                onApaga={apagaTarefa}
                />
            ))}
            </ul>
            <div id="blank" className={listaVazia() ? "" : "hidden"}>
                <p>Não há dados.</p>
            </div>            
          <NavLink
            to="/add"
          >
            <Fab color="secondary" aria-label="add" sx={fabStyle}>
                <AddIcon sx={{color: 'black'}}/>
            </Fab>
          </NavLink>
          <Snackbar
            anchorOrigin={{ 
          vertical: 'top',
          horizontal: 'right' }}
            open={open}
            onClose={handleClose}
            message="Registro excluído com sucesso."
            key={1}
        />
        </div>
    );
};

export default Filmes;