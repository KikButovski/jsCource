const handlers = (() => {
    return {
        addDeveloper() {
            document.querySelector("#add-junior").onclick = () => {
                workers.developers.juniors.push(new Developer("junior"));
                document.querySelector("#juniors-cound").innerText = workers.developers.juniors.length;
            }
            
            document.querySelector("#add-middle").onclick = () => {
                workers.developers.middles.push(new Developer("middle"));
                document.querySelector("#middles-cound").innerText = workers.developers.middles.length;
            
            }
            
            document.querySelector("#add-senior").onclick = () => {
                workers.developers.seniors.push(new Developer("senior"));
                document.querySelector("#seniors-cound").innerText = workers.developers.seniors.length;
            }

        },

        addManager() {
            document.querySelector("#add-rare-manager").onclick = () => {
                workers.managers.rare.push(new Manager("rare"));
                document.querySelector("#rare-cound").innerText = workers.managers.rare.length;
            }
            
            document.querySelector("#add-epic-manager").onclick = () => {
                workers.managers.epic.push(new Manager("epic"));
                document.querySelector("#epic-cound").innerText = workers.managers.epic.length;
            }
            
            document.querySelector("#add-legendary-manager").onclick = () => {
                workers.managers.legendary.push(new Manager("legendary"));
                document.querySelector("#legendary-cound").innerText = workers.managers.legendary.length;
            }
        },

        addProject() {
    
            document.querySelector("#easy").onclick = () => {
                start(new Project("easy"))
            }
            
            document.querySelector("#normal").onclick = () => {
                start(new Project("normal"))
            }
            
            document.querySelector("#hard").onclick = () => {
                start(new Project("hard"))
            }
          
        }
    }
})()