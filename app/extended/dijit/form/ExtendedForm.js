define([
    'dojo/_base/declare',
    'dijit/form/Form',
    'dijit/_Container'
], function(
    declare,
    Form,
    _Container
) {
    return declare([Form, _Container], {
        postCreate: function(params, srcNodeRef) {
            this.inherited(arguments);
        }
    });
});