export class ContentRemoveFromArray{
    removeAtPosition(array: any[], index:number):void{
        array.splice(index,1);
    }
}