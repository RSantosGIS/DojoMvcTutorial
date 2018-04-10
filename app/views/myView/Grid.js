define ([
    'dojo/_base/declare',
    'gridx/Grid',
    'stores/myStore',
    'gridx/modules/extendedSelect/Row'
], function(declare, Grid, myStore, SelectRow) {
    return declare([Grid], {
        store: myStore,
        selectRowTriggerOnCell: true,
        modules: [
            SelectRow
        ],
        onRowClick: function(event) {
            //form.set('value', myStore.get(event.rowId));
        },
        structure: [
            {field: 'id', name: 'Obj Identity'},
            {field: 'title', name: 'Song title'},
            {field: 'artist', name: 'Artist Name'},
        ]
    });
});