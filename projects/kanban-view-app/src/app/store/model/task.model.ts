export class Task {

    public rowNumber: number;

    public id:string;

    public state: string;

    public responsible: string;

    public title: string;

    public description: string

    public fieldsData: string[];

    constructor(){
        this.fieldsData = [];
    }
}