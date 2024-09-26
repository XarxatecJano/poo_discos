import { IReader } from "./IReader.js";
import { ISpinner } from "./ISpinner.js";
import { IWriter } from "./IWriter.js";
import { StorageDevice } from "./StorageDevice.js";

export class HardDisk extends StorageDevice implements IReader, IWriter, ISpinner{

    #formatType: string;

    constructor(name: string, velocity: number, capacity: number, readAndWriteMode: string, formatType: string){
        super(name,velocity, capacity, readAndWriteMode);
        this.#formatType = formatType;
    }
    
    public get formatType(): string {
        return this.#formatType;
    }
    
    format():void{
        console.log(`El disco duro se formateó con éxito con formato ${this.#formatType}`);
    }

    read():void{
        console.log("hola");
    }

    write(data:string):void{
        console.log("He escrito los datos en el disco duro");
    }

    spin():void{
        console.log("El disco duro está girando");
    }
}