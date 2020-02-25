'use strict'
// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import { css } from '@emotion/core';

export const fonts = {
    fontAeonikLight: () => css`@font-face{ font-family: fontAeonikLight;  src: url("/fonts/aeonik/aeonik-light.woff"); }`,
    fontAeonikRegular: () => css`@font-face{ font-family: fontAeonikRegular;  src: url("/fonts/aeonik/aeonik-regular.woff"); }`,
    fontAeonikMedium: () => css`@font-face{ font-family: fontAeonikMedium;  src: url("/fonts/aeonik/aeonik-medium.woff"); }`,
    fontAeonikBold: () => css`@font-face{ font-family: fontAeonikBold;  src: url("/fonts/aeonik/aeonik-bold.woff"); }`,
    fontAeonikBlack: () => css`@font-face{ font-family: fontAeonikBlack;  src: url("/fonts/aeonik/aeonik-black.woff"); }`,
    fontHeadingProExtraLight: () => css`@font-face{ font-family: fontHeadingProExtraLight;  src: url("/fonts/heading/heading-pro-extralight.woff2"); }`,
    fontHeadingProLight: () => css`@font-face{ font-family: fontHeadingProLight;  src: url("/fonts/heading/heading-pro-light.woff2"); }`,
    fontHeadingProBook: () => css`@font-face{ font-family: fontHeadingProBook;  src: url("/fonts/heading/heading-pro-book.woff2"); }`,
    fontHeadingProBold: () => css`@font-face{ font-family: fontHeadingProBold;  src: url("/fonts/heading/heading-pro-bold.woff2"); }`,
    fontHeadingProExtraBold: () => css`@font-face{ font-family: fontHeadingProExtraBold;  src: url("/fonts/heading/heading-pro-extrabold.woff2"); }`,
    fontHeadingProHeavy: () => css`@font-face{ font-family: fontHeadingProHeavy;  src: url("/fonts/heading/heading-proheavy.woff2"); }`,
    fontBahnschrift: () => css`@font-face{ font-family: fontBahnschrift;  src: url("/fonts/bahnschrift/bahnschrift.woff"); }`,
    fontSize: 10, fontSizeBasic1: 8, fontSizeBasic1: 12, fontSizeBasic1: 15, fontSizeBasic1: 17, fontSizeBasic1: 20,
    fontSizeBasic1: 22, fontSizeBasic1: 24, fontSizeBasic1: 26, fontSizeBasic1: 28, fontSizeBasic1: 32, fontSizeBasic1: 1,
}

export const colors = {
    rgbAlette: {
        rgb1: (opacity) => `rgba(255, 0, 67, ${opacity})`,
        rgb2: (opacity) => `rgba(73, 21, 92, ${opacity})`,
        rgb3: (opacity) => `rgba(41, 170, 225, ${opacity})`,
        rgb4: (opacity) => `rgba(42, 0, 92, ${opacity})`,
        rgb5: (opacity) => `rgba(63, 1, 98, ${opacity})`,
        rgb6: (opacity) => `rgba(101, 4, 104, ${opacity})`,
        rgb7: (opacity) => `rgba(163, 8, 114, ${opacity})`,
        rgb8: (opacity) => `rgba(229, 18, 126, ${opacity})`,
        rgb9: (opacity) => `rgba(206, 8, 25, ${opacity})`,
        rgb10: (opacity) => `rgba(252, 60, 166, ${opacity})`,
        rgb11: (opacity) => `rgba(255, 122, 195, ${opacity})`,
        rgb12Blanco: (opacity) => `rgba(255, 255, 255, ${opacity})`,
        rgb13Negro: (opacity) => `rgba(0, 0, 0, ${opacity})`,
        rgb14: (opacity) => `rgba(122, 20, 34, ${opacity})`,
        rgb15: (opacity) => `rgba(77, 77, 77, ${opacity})`,
        rgb16: (opacity) => `rgba(202, 202, 202, ${opacity})`,
        rgb17: (opacity) => `rgba(240, 244, 246, ${opacity})`,
        rgb18: (opacity) => `rgba(136, 3, 209, ${opacity})`,
        rgb19: (opacity) => `rgba(189, 0, 50, ${opacity})`,
        rgb20: (opacity) => `rgba(255, 56, 109, ${opacity})`,
        rgb21: (opacity) => `rgba(239, 243, 245, ${opacity})`,
        rgb22: (opacity) => `rgba(206, 210, 212, ${opacity})`,
        rgb23: (opacity) => `rgba(156, 160, 161, ${opacity})`,
        rgb24: (opacity) => `rgba(0, 113, 184, ${opacity})`,
        rgb25: (opacity) => `rgba(150, 187, 211, ${opacity})`,
        rgb26: (opacity) => `rgba(144, 219, 44, ${opacity})`,
        rgb27: (opacity) => `rgba(252, 207, 0, ${opacity})`,
        rgb28: (opacity) => `rgba(233, 241, 245, ${opacity})`,
    },
    hexGlobal: {
        hex1: '#FF0043', hex2: '#49155C', hex3: '#29AAE1', hex4: '#2A005C', hex5: '#3F0162',
        hex6: '#650468', hex7: '#A30872', hex8: '#E5127E', hex9: '#CE0819', hex10: '#FC3CA6',
        hex11: '#FF7AC3', hex12: '#000', hex13: '#fff', hex14: '#F0F4F6', hex15: '#5D0191',
        hex16: '#CBCBCB', hex17: '#F0F4F6', hex18: "#F8F6F6", hex19: '#006837', hex20: '#009145',
        hex21: '#39B44A', hex22: "#8BC53F", hex23: '#D8DF21', hex24: '#FBED21', hex25: '#2E3191',
        hex26: "#0071BB", hex27: '#1A1A1A', hex28: '#333333', hex29: '#EC6777', hex30: "#FFFF00",
        hex31: '#FF0000', hex32: '#9D005D', hex33: '#BCCBD3', hex34: "#F05A24", hex35: "#EC1C24",
        hex36: '#F6921E', hex37: '#FAAF3B', hex38: '#9D005D', hex39: "#92278E", hex40: '#C59B6D',
        hex41: '#534741', hex42: '#42210B'
    }

}

export const dimensions = {
    containers: {
        width: 100
    },
    containersChild: {
        width: 96,
        maxWidth: 1920
    },
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
}

export const imgs = {
    imgs$: (name) => `/images/${name}.png`,
}

export const svg = {
    svg$: (name) => `/svg/${name}.svg`,
}