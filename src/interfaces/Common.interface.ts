export interface CommonTextInterface {
    title: string;
    content?: string;
}


export interface CountryInterface {
    id: string | number;
    name: string;
} 


export interface FieldDataInterface {
    [fieldName: string]: any;
}