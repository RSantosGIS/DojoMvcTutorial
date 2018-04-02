define([
    'dojo/_base/declare',
    location.href+'dijit/_Container.js',
], function(declare, Container) {
    console.log("Custom container Module was initialized");
    declare([_Container], {
        children: [],
        postCreate: function(params, srcNodeRef) {
            console.log("Custom container module was instantiated");
            this.inherited(arguments);

            for (var i in this.children) {
                this.addChild(this.children[i]);
            }
        }
    });
});