/* @jsx jsx */
'use strict'

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Head from 'next/head';
import  { jsx, css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import uniqid from 'uniqid';
import { colors, fonts, svg, dimensions } from '../public/global.config';
import ItemsTask from '../components/ItemsTask';


// Styles css;
const styles = {
    containerApp: css `
        width: ${ dimensions.containers.width }%;
        height: 100vh;
        background-color: ${ colors.rgbAlette.rgb25( 0.5 ) };
        display: flex;
        flex-direction: column;
    `,
    containerHead: css `
        width: auto;
        height: auto;
        background-color: ${ colors.rgbAlette.rgb12Blanco( 0 ) };
        flex: none;
    `,
    containerHeadLogotipo: css `
        width: ${ dimensions.containers.width }%;
        height: 70px;
        background-color: ${ colors.rgbAlette.rgb12Blanco( 1 ) };
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    containerHeadLogotipoSvg: css `
        width: ${ 150 }px;
        height: 30px;
        background-color: ${ colors.rgbAlette.rgb2( 0 ) };
        flex: none;
    `,
    containerMain: css `
        width: ${ dimensions.containers.width }%;
        height: auto;
        background-color: ${ colors.rgbAlette.rgb5( 0 ) };
        flex: auto;
        display: flex;
        flex-direction: column;
    `,
    containerEntrada: css `
        width: ${ dimensions.containers.width }%;
        height: 184px;
        background-color: ${ colors.rgbAlette.rgb5( 0 ) };
        flex: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    containerEntradaTitle: css `
        ${ fonts.fontAeonikRegular() }; 
        width: auto;
        height: auto;
        font-family: fontAeonikRegular, sans-serif;
        line-height: auto;
        font-size: ${fonts.fontSize * 3}px;
        font-weight: 0;
        color: ${ colors.rgbAlette.rgb13Negro( 1 ) };
        letter-spacing: 0px;
        margin-bottom: 0px;
        margin-top: 40px;
        box-sizing: border-box;
        background-color: ${ colors.rgbAlette.rgb4( 0 ) };
    `,
    containerEntradaInput: css `
        width: ${ dimensions.containers.width }%;
        height: 40px;
        background-color: ${ colors.rgbAlette.rgb1( 0 ) };
        flex: none;
        display: flex;
        justify-content: center;
        margin-top: 40px;
    `,
    containerEntradaInputAgregar: css `
        width: ${ 550 }px;
        height: 40px;
        background-color: ${ colors.rgbAlette.rgb12Blanco( 1 ) };
        display: flex;
        flex: none;
        border: none 1px ${ colors.rgbAlette.rgb25( 0 ) };
        border-radius: 20px;
        box-sizing: border-box;
    `,
    contactoFormBottonSubmit: css `
        ${ fonts.fontAeonikRegular() };;
        width: 130px;
        height: 40px;
        outline: none;
        font-family: fontAeonikRegular, sans-serif;
        color: ${ colors.rgbAlette.rgb12Blanco(1) };
        font-size: ${ fonts.fontSize*1.7 }px;
        line-height: 40px;
        border: 0px;
        padding: 0px;
        box-sizing: border-box;
        border-radius: 0px 20px 20px 0px;
        background-color: ${ colors.rgbAlette.rgb27(2) };
        flex: none;
        cursor: pointer;
        transition: all 0.8s ease;
        :hover{
            background-color: ${ colors.rgbAlette.rgb26(1) };
        }
    `,
    contactoFormInput: css`
        ${ fonts.fontAeonikRegular() };
        width: 100%;
        height: 40px;
        outline: none;
        border: none;
        border-radius: 20px 0px 0px 20px;
        font-family: fontAeonikRegular, sans-serif;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        font-size: ${fonts.fontSize * 1.7 }px;
        line-height: 40px;
        padding: 0px;
        padding-left: 20px;
        padding-right: 20px;
        flex: auto;
        transition: all 0.2s linear;
        &:focus{
            background-color: ${ colors.rgbAlette.rgb25(0.07) };
        }
        &:-internal-autofill-selected {
            background-color: transparent  !important;
        }
        &::placeholder{
            color: ${colors.rgbAlette.rgb25(1)};
        }
    `,
    containerTass: css `
        width: auto;
        height: auto;
        background-color: ${ colors.rgbAlette.rgb1( 0 ) };
    `,
    
}

class Deehk extends Component {
    static getInitialProps( { query } ) {
        return { query };
    }

    constructor ( props ) {
        super( props );
        this.state = {
            task: this.props.query.task,
            entradaInput: ''
        }
        this.appFirebase = null;

        this.pintarTask = this.pintarTask.bind( this );
        this.copyState = this.copyState.bind( this );
        this.agregarTask = this.agregarTask.bind( this );
        this.recogerInputValue = this.recogerInputValue.bind( this );
        this.removerTask = this.removerTask.bind( this );
        this.editarTask = this.editarTask.bind( this );
        this._editarTask = this._editarTask.bind( this );
        this._guardarTask = this._guardarTask.bind( this );
        this.fetchSend = this.fetchSend.bind( this );
    }

    async fetchSend ( url, opc ) {
        const res = await fetch( url, opc );
        const json = await res.json();
        return json;
    }

    pintarTask () {
        return this.state.task.map ( salidaText => 
            <div css={ styles.containerTask } key={ uniqid() }>
                <ItemsTask 
                    value={ salidaText.task } 
                    uid={ salidaText._id }
                    handleRemoveTask={ this.removerTask }
                    handleEditarTask={ this.editarTask }
                />
            </div>
        ).reverse();
    }
    
    copyState ( state ) {
        const [ ...newState ] = state;
        return newState;
    }

    recogerInputValue ( event ) {
        this.setState( { [ event.target.name ]: event.target.value } )
    }

    async agregarTask () {
            event.preventDefault()
            let data = await this.fetchSend( 
                    'http://localhost:3000/add', {
                    method: 'POST',    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { task:  this.state.entradaInput } )
                })
            this.setState( { task: [ ...data.task ] } ); 
    }
    
    editarTask ( event ) {
        event.target.innerText === 'Editar' ? 
            this._editarTask( event.target ) :
            this._guardarTask( event.target );
    }

    _editarTask ( target ) {
        let element, input;
            element = [].slice.call( target.parentNode.children );
            input = element
                    .filter( ( node ) => node.tagName === 'DIV' )
                    .filter( ( input ) => input.firstChild.type === 'text' )[ 0 ].firstChild
            target.innerText = 'Guardar'
            input.disabled = false;
            input.value = input.placeholder;
            input.focus();
    }

   async _guardarTask ( target ) {
        let  element = [].slice.call( target.parentNode.children ),
            input = element
                    .filter( ( node ) => node.tagName === 'DIV' )
                    .filter( ( input ) => input.firstChild.type === 'text' )[ 0 ].firstChild;
            target.innerText = 'Editar';
            input.disabled = true;
            let data = await this.fetchSend ( 
                    'http://localhost:3000/update', { 
                    method: 'PUT',   headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { task: input.value, _id: input.id } )
                })
            this.setState( { task: [ ...data.task ] } ); 
    }

    async removerTask ( event ) {
        let element =  [].slice.call( event.target.parentNode.children ),
            input = element
                    .filter( ( node ) => node.tagName === 'DIV' )
                    .filter( ( input ) => input.firstChild.type === 'text' )[ 0 ].firstChild
            let data = await this.fetchSend( 
                    'http://localhost:3000/remove', { 
                    method: 'DELETE',   headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( { task: input.value, _id: input.id } )
                })
            this.setState( { task: [ ...data.task ] } ); 
    }

    render ( ) {
        
        return (
            
            <div css={styles.containerApp}>
                <Head>
                    <title> Deehk </title>
                </Head>
                { /* Barra logotipo App Deehk*/ }
                <header css={styles.containerHead}>
                    <div css={styles.containerHeadLogotipo}>
                        <div css={styles.containerHeadLogotipoSvg} > <ReactSVG src={ svg.svg$('deehk') } /> </div>
                    </div>
                </header>
                <main css={styles.containerMain}>
                    <div css={styles.containerEntrada}>
                        <h1 css={styles.containerEntradaTitle}> Ok, epecemos con las algo </h1>
                        <div css={styles.containerEntradaInput}>
                            <form>
                                <div css={styles.containerEntradaInputAgregar}>
                                    <input
                                        type='text'
                                        name='entradaInput'
                                        id='entradaInput'
                                        placeholder='Ok, escribenos tu nombre'
                                        onChange={ this.recogerInputValue }
                                        css={styles.contactoFormInput} 
                                    />

                                    <button
                                        css={styles.contactoFormBottonSubmit}
                                        id= 'submit'
                                        name='submit'
                                        type=""
                                        onClick={ this.agregarTask }
                                    > 
                                        Agregar
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                    {
                        this.pintarTask()
                    }
                </main>

            </div>
        )
    }
}

export default Deehk; 