export {}

class Context {
    constructor(
        public expression: string,
        public date: Date,
    ) {
        this.validate(expression); 
        this.expression = expression;
    }
    
    // 対応する構文になっているかの確認．
    validate(expression: string) {
        if (expression.length != 10 || 
            !/^(?=.*YYYY)(?=.*MM)(?=.*DD)/.test(expression)
        ) {
            throw new Error("Exressionが不正です.");
        }
    }
}

interface AbstractionExpression {
    interpret(context: Context);
}

// MMMM/YY/DD を置換していくイメージ．
class YearExpression implements AbstractionExpression {
    private child: AbstractionExpression = null;
    
    setChild(child: AbstractionExpression) {
        this.child = child;
    }
    
    interpret(context: Context) {
        const expression = context.expression;
        const year = context.date.getFullYear();
        context.expression = expression.replace("YYYY", year.toString());
        
        if (this.child) {
            this.child.interpret(context);
        }
        
        return context;
    }
}

class MonthExpression implements AbstractionExpression {
    private child: AbstractionExpression = null;
    
    setChild(child: AbstractionExpression) {
        this.child = child;
    }
    
    interpret(context: Context) {
        const expression = context.expression;
        const month = context.date.getMonth() + 1;
        context.expression = expression.replace("MM", month.toString());
        
        if (this.child) {
            this.child.interpret(context);
        }
        
        return context;
    }
}

class DayExpression implements AbstractionExpression {
    private child: AbstractionExpression = null;
    
    setChild(child: AbstractionExpression) {
        this.child = child;
    }
    
    interpret(context: Context) {
        const expression = context.expression;
        const day = context.date.getDate();
        context.expression = expression.replace("DD", day.toString());
        
        if (this.child) {
            this.child.interpret(context);
        }
        
        return context;
    }
}

function run() {
    const now = new Date();
    const expression = "YYYY/MM/DD"
    
    const context = new Context(expression, now);
    const yearExpression = new YearExpression();
    const monthExpression = new MonthExpression();
    const dayExpression = new DayExpression();
    
    monthExpression.setChild(dayExpression);
    yearExpression.setChild(monthExpression);
    
    const result = yearExpression.interpret(context);
    console.log(now.toLocaleDateString());
    console.log(result.expression);
}

run();