import React from "react";
import ReactStars from "react-rating-stars-component";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import { Container, Fab } from "@mui/material";
import Button from '@mui/material/Button';
import frLocale from 'date-fns/locale/fr';
import { NavLink, useNavigate  } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const NewMovie = (props) => {
  
  const fabStyle = {
    position: 'absolute',
    top: 2,
    zIndex: 9999,
    left: 16,
    backgroundColor: '#5e5353'
  };

  const navigate = useNavigate();
  var avaliacao = 0;
  const ratingChanged = (newRating) => {
    avaliacao = newRating;
  };

  // função para adicionar
// verifica se os campos obrigatórios (descrição e data) estão preenchidos e salva no localstorage caso estejam
// logo em seguida, redireciona de volta para a página principal
function adicionar() {
  var nome = document.getElementById("nome").value;
  var rate = avaliacao;
  var data = value;
  let filmografia = JSON.parse(localStorage.getItem('filmografia')) || [];

  if (nome && data) {
      filmografia.push({
          id: criaUUID(),
          descricao: nome,
          rate: rate,
          data: data.toLocaleDateString()
      });
      localStorage.setItem('filmografia', JSON.stringify(filmografia));
      avaliacao = 0;
      setValue(new Date());
      navigate('/');
  }
}
// cria número aleatório para ser o id unico daquele registro
function criaUUID() {
  var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

  const [value, setValue] = React.useState(new Date());
  return (
    <div>
      <Container>
      <NavLink
            to="/"
          >
            <Fab color="primary" aria-label="add" sx={fabStyle}>
                <ArrowBackIosNewIcon/>
            </Fab>
          </NavLink>
        <Stack>
            <TextField type="text" label="Nome" id="nome" style={{margin: '2%'}}/>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
        <DatePicker
          disableFuture
          label="Assistido em:"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} style={{margin: '2%'}}/>}
        />
        </LocalizationProvider>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={55}
                classNames="tamanho"
                activeColor="#ffd700"
            />
        </Stack>
        <Button variant="contained" onClick={adicionar} sx={{backgroundColor: '#7d6e6e'}}>Cadastrar</Button>
        </Container>
    </div>
  );
};

export default NewMovie;
