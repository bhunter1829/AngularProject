export interface Inventory{
    id:number,
    name:string,
    amount?:number,
    //define as optional. 
    departmentFK?:number //fk 
}