import React from 'react';
import {Button, TextField, Grid, Divider} from '@material-ui/core';
import Navbar from './components/Navbar';
import MeuCard from './components/MeuCard';
import './Principal.css';

export default 	function Principal() {
	return <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
				<Navbar/>

				<Divider style={{marginTop: 20, marginBottom: 20}}/>

				<Grid container spacing="6">
					<Grid item md="4"><MeuCard conteudoCor="#fff" titulo="Entrada" cor="#2196f3" valor="2500"/></Grid>
					<Grid item md="4"><MeuCard conteudoCor="#fff" titulo="Saída" cor="#3f51b5" valor="2800"/></Grid>
					<Grid item md="4"><MeuCard conteudoCor="#fff" titulo="Balanço" cor="#673ab7" valor={2500 - 2800}/></Grid>
				</Grid>
			</div>;
}