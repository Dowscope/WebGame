(function (){
    
    const outerWorld = new OuterWorld({
        element: document.querySelector(".game-container"),
        startingWidth: 16,
        startingHeight: 16
    });
    outerWorld.init();
    outerWorld.draw();
})();