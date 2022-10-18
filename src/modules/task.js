// Task constructor
class Task {
    constructor(title, details, date, priority) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
    };
    
    sayBook() {
        alert(this.title);
    };
}

export default Task;