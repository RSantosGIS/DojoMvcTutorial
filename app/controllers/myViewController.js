require([
    'dojo/query',
    'dojo/ready',
    'dojo/on',
    'stores/myStore'
    
], function(query, ready, on, myStore) {
    //this ready waits for all widget loading in addition to the DOM
    //the controller binds functionality
    ready(function() {
        var button = query('#myViewForm .dijitButton');
        myViewForm = dijit.byId('myViewForm');
        myViewGrid = dijit.byId('myViewGrid');

        on(button, 'click', function(event) {
            var value = myViewForm.get('value');
            value.id = parseInt(value.id); //this gets rid of the integer / string mismatch
            myStore.put(value);
        });

        myViewGrid.on('RowClick', function(event) {
            myViewForm.set('value', myStore.get(event.rowId));
        });
    });
});