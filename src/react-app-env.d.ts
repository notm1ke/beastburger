/// <reference types="react-scripts" />

export interface Restaurant {
    acceptsordersbeforeopening: boolean;
    acceptsordersuntilclosing: boolean;
    advanceonly: boolean;
    advanceorderdays: number;
    allowhandoffchoiceatmanualfire: boolean;
    attributes: any[];
    availabilitymessage: any;
    brand: string;
    calendars: any;
    candeliver: boolean;
    canpickup: boolean;
    streetaddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    contextualpricing: any;
    crossstreet: string;
    customerfacingmessage: string;
    customfields: any;
    deliveryarea: string;
    deliveryfee: number;
    deliveryfeetiers: any[];
    distance: number;
    extref: string;
    hasolopass: boolean;
    id: number;
    isavailable: boolean;
    iscurrentlyopen: boolean;
    labels: [
        {
            key: string;
            value: string;
        }
    ];
    latitude: number;
    longitude: number;
    maximumpayinstoreorder: number;
    metadata: any;
    minimumdeliveryorder: number;
    minimumpickuporder: number;
    mobileurl: string;
    name: string;
    productrecipientnamelabel: string;
    requiresphonenumber: boolean;
    showcalories: boolean;
    slug: string;
    specialinstructionsmaxlength: number;
    storename: string;
    suggestedtippercentage: number;
    supportedcardtypes: string;
    supportedcountries: string[];
    supportedtimemodes: string[];
    supportsbaskettransfers: boolean;
    supportscoupons: boolean;
    supportscurbside: boolean;
    supportsdinein: boolean;
    supportsdispatch: boolean;
    supportsfeedback: boolean;
    supportsgrouporders: boolean;
    supportsguestordering: boolean;
    supportsloyalty: boolean;
    supportsmanualfire: boolean;
    supportsnationalmenu: boolean;
    supportsproductrecipientnames: boolean;
    supportsspecialinstructions: boolean;
    supportssplitpayments: boolean;
    supportstip: boolean;
    telephone: string;
    url: string;
    utcoffset: string;
}
