// src/typings.d.ts

// Declare QRCode variable from qrcode.min.js
declare var QRCode: {
    new(element: HTMLElement, options: { text: string, width: number, height: number }): any;
};

// Declare KHQR variable from khqr-1.0.15.min.js
declare var KHQR: any;

// Declare myFun function from script.js
declare function myFun(): void;
