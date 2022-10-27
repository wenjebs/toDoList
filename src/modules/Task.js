// Task constructor
class Task {
    constructor(title, details, date, priority) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
    };
    
    setTitle(title) {
        this.title = title;
    };
    getTitle(){
        return this.title;
    }
    
}

export default Task;