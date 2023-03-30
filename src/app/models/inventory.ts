export interface Inventory{
    id:number,
    name:string,
    amount?:number,
    //define as optional. 
    department_id?:number //fk 
}