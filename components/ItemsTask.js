/* @jsx jsx */
'use strict'

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import  { jsx, css } from '@emotion/core';
import { colors, fonts, dimensions } from '../public/global.config';

const styles = {
    containerSalida: css `
        width: ${ dimensions.containers.width }%;
        height: auto;
        background-color: ${ colors.rgbAlette.rgb1( 0 ) };
        display: flex;
        justify-content: center;
        flex: auto;
    `,
    containerSalidaTareas: css `
        width: ${ 50 }%;
        height: auto;
        background-color: ${ colors.rgbAlette.rgb1( 0 ) };
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: none; 
    `,
    containerSalidaTareasItem: css `
        width: ${ 550 }px;
        height: 40px;
        background-color: ${ colors.rgbAlette.rgb12Blanco( 1 ) };
        border-radius: 3px;
        display: flex;
        align-items: center;
        flex: none; 
        margin-bottom: 6px;
    `,
    containerSalidaTareasVista: css `
        width: auto;
        height: 40px;
        background-color: ${ colors.rgbAlette.rgb12Blanco( 1 ) };
        border-radius: 3px;
        display: flex;
        flex: auto; 
    `,
    containerEntradaTitleTareas: css `
        ${ fonts.fontAeonikLight() }; 
        width: auto;
        height: 40px;
        font-family: fontAeonikLight, sans-serif;
        line-height: 40px;
        font-size: ${fonts.fontSize * 2}px;
        font-weight: 0;
        color: ${ colors.rgbAlette.rgb25( 1 ) };
        letter-spacing: 0px;
        margin-bottom: 0px;
        margin-left: 10px;
        margin-top: 0px;
        box-sizing: border-box;
        background-color: ${ colors.rgbAlette.rgb4( 0 ) };
    `,

    contactoFormInputItemTareas: css`
        ${ fonts.fontAeonikLight() };
        ${ fonts.fontAeonikRegular() };
        width: 100%;
        height: 40px;
        outline: none;
        border: none;
        font-family: fontAeonikLight, sans-serif;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        font-size: ${ fonts.fontSize * 1.7 }px;
        line-height: 40px;
        border-radius: 3px 0px 0px 3px;
        padding: 0px;
        padding-left: 10px;
        padding-right: 10px;
        flex: auto;
        transition: all 0.2s linear;
        &:focus{
            color: ${ colors.rgbAlette.rgb26(1) };
            font-family: fontAeonikRegular, sans-serif;
            background-color: ${ colors.rgbAlette.rgb12Blanco(1) };
        }
        &:disabled{
            background-color: ${ colors.rgbAlette.rgb12Blanco(1) };
        }
        &::placeholder{
            color: ${colors.rgbAlette.rgb13Negro(1)};
        }

    `,
    contactoFormBottonAtionEditar: css `
        ${ fonts.fontAeonikRegular() };;
        width: 70px;
        height: 25px;
        outline: none;
        font-family: fontAeonikRegular, sans-serif;
        color: ${ colors.rgbAlette.rgb25(1) };
        font-size: ${ fonts.fontSize* 1.6 }px;
        line-height: 20px;
        border: 0px;
        border: solid 1px ${ colors.rgbAlette.rgb25(1) };
        padding: 0px;
        margin-right: 10px;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: ${ colors.rgbAlette.rgb25(0) };
        flex: none;
        cursor: pointer;
        transition: all 0.3s ease;
        :hover{
            background-color: ${ colors.rgbAlette.rgb26(1) };
            color: ${ colors.rgbAlette.rgb12Blanco(1) };
            border: solid 1px ${ colors.rgbAlette.rgb1(0) };
        }
    `,

    contactoFormBottonAtionELiminar: css `
        ${ fonts.fontAeonikRegular() };;
        width: 70px;
        height: 25px;
        outline: none;
        font-family: fontAeonikRegular, sans-serif;
        color: ${ colors.rgbAlette.rgb25(1) };
        font-size: ${ fonts.fontSize* 1.3 }px;
        line-height: 20px;
        border: 0px;
        border: solid 1px ${ colors.rgbAlette.rgb25(1) };
        padding: 0px;
        margin-right: 10px;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: ${ colors.rgbAlette.rgb25(0) };
        flex: none;
        cursor: pointer;
        transition: all 0.3s ease;
        :hover{
            background-color: ${ colors.rgbAlette.rgb1(1) };
            color: ${ colors.rgbAlette.rgb12Blanco(1) };
            border: solid 1px ${ colors.rgbAlette.rgb1(0) };
        }
    `,
    
}

export default ( props ) => {
    return (
        <div css={styles.containerSalida}>
            <div css={styles.containerSalidaTareas}>
                <div css={styles.containerSalidaTareasItem} >
                    <div css={styles.containerSalidaTareasVista}> 
                        <input
                            type='text'
                            name=''
                            id={ props.uid }
                            disabled
                            placeholder={ props.value }
                            css={styles.contactoFormInputItemTareas}
                        />
                    </div>
                    <button
                        css={styles.contactoFormBottonAtionEditar}
                        name='editar'
                        type=""
                        onClick={ props.handleEditarTask }
                    > 
                        Editar
                    </button>
                    <button
                        css={styles.contactoFormBottonAtionELiminar}
                        name='eliminar' 
                        type=""
                        onClick={ props.handleRemoveTask }
                    > 
                        Eliminar
                    </button>

                </div>
            </div>
        </div>
    )
}
