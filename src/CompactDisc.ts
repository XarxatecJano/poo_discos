import { IReader } from "./IReader";
import { ISpinner } from "./ISpinner";
import { IWriter } from "./IWriter";
import { StorageDevice } from "./StorageDevice";

class CompactDisc extends StorageDevice implements IReader, IWriter, ISpinner{

    ejectCd():void{
        console.log("Abro la bandeja");
    }
    read():void{
        console.log(`Leyendo a velocidad de ${this.velocity} usando ${this.readAndWriteMode}`);
    }
    write(data:string):void{
        console.log(`Escribiendo los datos: ${data}`);
    }
    spin():void{
        console.log(`Estoy girando a esta velocidad ${this.velocity}`);
    }
}