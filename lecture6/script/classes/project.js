function Project (lvl) {
    this.lvl = lvl;
    this.linesCount = this.getLinesCount();
    this.cost = this.getCost();
}

Project.prototype.constructor = Project;
Project.prototype.getLinesCount = function () {
    switch (this.lvl) {
        case "easy":
            return 5000;
        case "normal":
            return 50000;
        case "hard":
            return 100000;  
    }
}

Project.prototype.getCost = function () {
    switch (this.lvl) {
        case "easy":
            return 5000;
        case "normal":
            return 10000;
        case "hard":
            return 50000;
    }
}