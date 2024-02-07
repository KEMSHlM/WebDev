export {}

interface Button {
    press(): void;
}

interface Checkbox {
    switch(): void;
}

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

class WindowButton implements Button {
    press() {
        console.log("Windows用のボタンが押されました")
    }
}

class WindowCheckbox implements Checkbox {
    switch() {
        console.log("Windows用のスイッチが変更されました")
    }
}

class WindowGUIFactory implements GUIFactory {
    createButton(): Button {
        return new WindowButton();
    }
    createCheckbox(): Checkbox {
        return new WindowCheckbox();
    }
}

class MacButton implements Button {
    press() {
        console.log("mac用のボタンが押されました")
    }
}

class MacCheckbox implements Checkbox {
    switch() {
        console.log("mac用のスイッチが変更されました")
    }
}

class MacGUIFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }
    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

function run(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    button.press();
    checkbox.switch();
}

run(new WindowGUIFactory());
run(new MacGUIFactory());