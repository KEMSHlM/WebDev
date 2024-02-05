class Patient {
    constructor (public id: number, public name: string) {}
}

interface Aggregate<T> {
    getIterator(): IIterator<T>;
}

interface IIterator<T> {
    hasNext(): boolean;
    next(): T | undefined;
}

class WatingRoom implements Aggregate<Patient> {
    private patients: Patient[] = [];
    
    getPatients(): Patient[] {
        return this.patients;
    }
    
    getCount(): number {
        return this.patients.length;
    }
    
    checkIn(patient: Patient) {
        this.patients.push(patient);
    }
    
    getIterator(): IIterator<Patient> {
        return new WatigingRoomIterator(this);
    }
}

class WatigingRoomIterator implements IIterator<Patient> {
    private position: number = 0;
    
    constructor(private aggregate: WatingRoom) {}
    
    hasNext(): boolean {
        return this.position < this.aggregate.getCount();
    }
    
    next(): Patient | undefined {
        if (!this.hasNext()) {
            console.log("患者はいません");
            return;
        }
        
        const patient = this.aggregate.getPatients()[this.position];
        this.position++;
        return patient;
    }
}

function run() {
    const watingRoom = new WatingRoom();
    watingRoom.checkIn(new Patient(1, "Yamada"));
    watingRoom.checkIn(new Patient(2, "Tanaka"));
    watingRoom.checkIn(new Patient(3, "Suzuki"));
    
    const iterator = watingRoom.getIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

run();