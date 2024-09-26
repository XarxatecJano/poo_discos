import { ContentRemoveFromArray } from "./ContentRemoverFromArray.js";

export abstract class StorageDevice {
    #name: string;
    #velocity: number;
    #capacity: number;
    #readAndWriteMode: string;
    #content: string[] = [];
    
    constructor(name: string, velocity: number, capacity: number, readAndWriteMode: string){
        this.#capacity = capacity;
        this.#name = name;
        this.#readAndWriteMode = readAndWriteMode;
        this.#velocity = velocity;
    }


    public get name(): string {
        return this.#name;
    }
    public set name(value: string) {
        this.#name = value;
    }
    public get velocity(): number {
        return this.#velocity;
    }

    public get capacity(): number {
        return this.#capacity;
    }

    public get readAndWriteMode(): string {
        return this.#readAndWriteMode;
    }

    public get content(): string[] {
        return this.#content;
    }

    public addContentFile (fileName: string):void{
        this.#content.push(fileName)
    }

    public removeContent (fileName:string):void{
        const index = this.#content.indexOf(fileName);
        const remover = new ContentRemoveFromArray();
        remover.removeAtPosition(this.#content,index);
    }
}