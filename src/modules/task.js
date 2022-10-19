// Task constructor
class Task {
    constructor(title, details, date, priority, index) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
        this.index = index;
    };
    
    sayBook() {
        alert(this.title);
    };
}

export default Task;