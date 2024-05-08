export class Tag{
    //Enum
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly SPRING_BOOT = new Tag('Spring Boot', 'green');
    static readonly PHYTON = new Tag('Phyton', 'grey');
    static readonly CSHARP = new Tag('C#', 'brown');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'purple');
    static readonly NODEJS = new Tag('Node.Js', 'black');
    

    constructor(private readonly key: string, public readonly cor: string){}

    toString(){
        return this.key;
    }

}