/*
#title Click to Nav
#description adds click handler to navigate to a new scene
*/
({
    // defines a target property. must be a scene
    properties: {
        scene: {
            type:'enum',
            title: 'target scene',
            value:null,
            hints: {
                type:'node',
                nodeType:'scene'
            }
        },
    },
    
    //called when object is clicked on
    click: function(e) {
        e.system.navigateScene(e.props.scene)
    }
})
