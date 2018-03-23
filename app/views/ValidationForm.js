define([
    'dojo/_base/declare',
    'dijit/form/Form',
    'dijit/_WidgetsInTemplateMixin',
    //for whatever reason, this is looking in this directory, and not from the server root
    'dojo/text!./ValidationForm.html',

    //ONLY LOADED, no instantiation
    'dojox/layout/TableContainer', 
    'dijit/form/ValidationTextBox',
    'dojox/validate/web'
], function(
    declare,
    Form, 
    _WidgetsInTemplateMixin, 
    template, 
) {
    console.log("Template: " + template)
    return declare([Form, _WidgetsInTemplateMixin], {
        templateString: template
    });
});