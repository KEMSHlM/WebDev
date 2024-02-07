export {}

abstract class Entry {
    constructor(private code: string, private name: string) {}
    
    getCode(): string {
        return this.code;
    } 
    
    getName(): string {
        return this.name;
    }
    
    abstract getChildren(): Entry[];
    abstract accept(visitor: Visitor);
}

class Group extends Entry {
    private entries: Entry[] = [];
    
    add(entry: Entry) {
        this.entries.push(entry);
    } 
    
    getChildren(): Entry[] {
        return this.entries; 
    }
    
    accept(visitor: Visitor) {
        visitor.visit(this);
    }
}

class Employee extends Entry {
    getChildren(): Entry[] {
        return [];
    }
    
    accept(visitor: Visitor) {
        visitor.visit(this);
    }
}

interface Visitor {
    visit(entry: Entry);
}

class ListVisitor implements Visitor {
    visit(entry: Entry) {
        if (entry instanceof Group) {
            console.log(`${entry.getCode()}: ${entry.getName()}`);
        } else {
            console.log(` ${entry.getCode()}: ${entry.getName()}`);
        }
        
        entry.getChildren().forEach(child => child.accept(this));
    }
}

class CountVisitor implements Visitor {
    private groupCount = 0;
    private employeeCount = 0;
    
    visit(entry: Entry) {
        if(entry instanceof Group) {
            this.groupCount++;
        } else {
            this.employeeCount++;
        }
    }
    
    getGroupCount(): number {
        return this.groupCount;
    }
    
    getEmployeeCount(): number {
        return this.employeeCount;
    }
}

function run() {
    const rootEntry = new Group("01", "本社");
    rootEntry.add(new Employee("0101", "社長"));
    rootEntry.add(new Employee("0102", "副社長"));
    
    const group1 = new Group("10", "神奈川支部");
    group1.add(new Employee("1001", "支部長"));
    
    const group2 = new Group("11", "横浜営業所");
    group2.add(new Employee("1101", "営業部長"));
    group2.add(new Employee("1102", "Yamada"));
    group2.add(new Employee("1103", "Suzuki"));
    group2.add(new Employee("1104", "Tanaka"));
    
    group1.add(group2);
    rootEntry.add(group1);
    
    const listVisitor = new ListVisitor();
    const countVisitor = new CountVisitor();
    
    rootEntry.accept(listVisitor);
    rootEntry.accept(countVisitor);
    
    console.log(`グループ数: ${countVisitor.getGroupCount()}`);
    console.log(`社員数: ${countVisitor.getEmployeeCount()}`);
}

run();