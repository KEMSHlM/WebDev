// 利用者用のインターフェース
interface Target {
    getCsvData(): string;
}

// adaptee
class NewLibrary {
    getJsonData(): any[] {
        return [
            {
                "data1": "json_dataA",
                "data2": "json_dataB",
            },
            {
                "data3": "json_dataC",
                "data4": "json_dataD",
            }
        ];
    }
}

// adapter
class JsonToCsvAdapter implements Target {
    constructor(private adaptee: NewLibrary) {}
    getCsvData(): string {
        const jsonData = this.adaptee.getJsonData();
        
        const header = Object.keys(jsonData[0]).join(',') + '\n';
        const body = jsonData.map(d => {
            return Object.keys(d).map(key => d[key]).join(',');
        }).join('\n');
        
        return header + body; 
    }
}

function run() {
    const adaptee = new NewLibrary();
    console.log('=== Adaptee が提供するデータ ===');
    console.log(adaptee.getJsonData());

    console.log("");
    const adapter = new JsonToCsvAdapter(adaptee);
    console.log('=== Adapterに変換されたデータ ===')
    console.log(adapter.getCsvData());
}

run();