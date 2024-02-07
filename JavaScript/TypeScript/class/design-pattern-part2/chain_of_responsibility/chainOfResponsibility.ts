export {}

// エラー伝播でかけたらいいな
abstract class ValidationHandler {
    private nextHandler: ValidationHandler | null = null;
    
    setHandler(handler: ValidationHandler) {
        this.nextHandler = handler;
    }
    
    protected abstract execValidation(input: string): boolean;
    protected abstract getErrorMessage(): void;

    validate(input: string): boolean {
        const result = this.execValidation(input);
        if (!result) {
            this.getErrorMessage();
            return false;
        } else if (this.nextHandler) {
            return this.nextHandler.validate(input);
        } else {
            return true;
        }
    }
}

class NotNullValidationHandler extends ValidationHandler {
    protected execValidation(input: string): boolean {
        let result = false;
        if (input) {
            result = true;
        }
        console.log("NotNullValidationの結果:" + result);
        return result;
    }
    
    protected getErrorMessage() {
        console.log("何も入力されていません．")
    }
}

class AlphabetValidationHandler extends ValidationHandler {
    protected execValidation(input: string): boolean {
        let reg = new RegExp(/^[a-zA-Z]+$/);
        const result = reg.test(input);
        console.log("AlphabetValidationの結果:" + result);
        return result;
    }
    
    protected getErrorMessage() {
        console.log("半角英字で入力してください．")
    }
}

class MinLengthValidationHandler extends ValidationHandler {
    protected execValidation(input: string): boolean {
        const result = input.length >= 8;
        console.log("MinLengthValidationの結果:" + result);
        return result;
    }
    
    protected getErrorMessage() {
        console.log("8文字以上で入力してください．")
    }
}

function run() {
   const notNullHandler = new NotNullValidationHandler(); 
   const alphabetHandler = new AlphabetValidationHandler(); 
   const minLengthHandler = new MinLengthValidationHandler(); 
   
   alphabetHandler.setHandler(minLengthHandler);
   notNullHandler.setHandler(alphabetHandler)
   
   const result = notNullHandler.validate("unko");
   if (result) {
        console.log("すべてのValidationに成功");
   }
}

run();