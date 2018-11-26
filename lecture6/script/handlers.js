var handlers = (function() {
    return {
        addDeveloper: function() {
            document.querySelector("#add-junior").onclick = function () {
                workers.developers.juniors.push(new Developer("junior"));
                document.querySelector("#juniors-cound").innerText = workers.developers.juniors.length;
            }
            
            document.querySelector("#add-middle").onclick = function () {
                workers.developers.middles.push(new Developer("middle"));
                document.querySelector("#middles-cound").innerText = workers.developers.middles.length;
            
            }
            
            document.querySelector("#add-senior").onclick = function () {
                workers.developers.seniors.push(new Developer("senior"));
                document.querySelector("#seniors-cound").innerText = workers.developers.seniors.length;
            }

        },

        addManager: function() {
            document.querySelector("#add-rare-manager").onclick = function () {
                workers.managers.rare.push(new Manager("rare"));
                document.querySelector("#rare-cound").innerText = workers.managers.rare.length;
            }
            
            document.querySelector("#add-epic-manager").onclick = function () {
                workers.managers.epic.push(new Manager("epic"));
                document.querySelector("#epic-cound").innerText = workers.managers.epic.length;
            }
            
            document.querySelector("#add-legendary-manager").onclick = function () {
                workers.managers.legendary.push(new Manager("legendary"));
                document.querySelector("#legendary-cound").innerText = workers.managers.legendary.length;
            }
        },

        addProject: function() {
    
            document.querySelector("#easy").onclick = function() {
                start(new Project("easy"))
            }
            
            document.querySelector("#normal").onclick = function() {
                start(new Project("normal"))
            }
            
            document.querySelector("#hard").onclick = function() {
                start(new Project("hard"))
            }
          
        }
    }
})()