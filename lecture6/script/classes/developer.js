function Developer (lvl) {
    this.lvl = lvl;
    this.salary = this.getSalarySize();
    this.linesCount = this.getLinesCodeCount();
}

Developer.prototype.constructor = Developer;
Developer.prototype.getSalarySize = function () {
    switch (this.lvl) {
        case "junior": 
            return 200;
        case "middle":
            return 800;
        case "senior":
            return 2000;    
    }
}

Developer.prototype.getLinesCodeCount = function () {
    switch (this.lvl) {
        case "junior": 
            return 1000;
        case "middle":
            return 3000;
        case "senior":
            return 10000;    
    }
}