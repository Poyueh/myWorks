// TypeScript file
class DataProxy extends puremvc.Proxy {

    public static NAME: string = "DataProxy";
    public count: number = 0;
    private testData: any;

    public constructor() {
        super(DataProxy.NAME);
    }

    public setInfo(data: any): void {
        this.testData = data;
        console.log('this.testData: ' + this.testData);
    }
    public getCount(): number {
        this.count++;
        return this.count;
    }
}