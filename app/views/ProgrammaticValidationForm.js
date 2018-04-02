define([
    'dojo/_base/declare',
    'dijit/form/Form',
    'dijit/_WidgetsInTemplateMixin',
    //for whatever reason, this is looking in this directory, and not from the server root
    'dojo/text!./ValidationForm.html',
    'dojox/layout/TableContainer', 
    'dijit/form/ValidationTextBox',
    'dojox/validate/web'
], function(
    declare,
    Form, 
    _WidgetsInTemplateMixin, 
    template, 
    TableContainer,
    ValidationTextBox
) {
    //console.log("Template: " + template)
    return declare([Form, _WidgetsInTemplateMixin], {
        postCreate: function() {
            var tc = new TableContainer({
                cols:1
            });
            tc.addChild(new ValidationTextBox({
                required: true,
                title: 'First Name',
                name: 'firstName'
            }));
            tc.addChild(new ValidationTextBox({
                required: true,
                title: 'Last Name',
                name: 'lastName'
            }));
            tc.addChild(new ValidationTextBox({
                required: true,
                title: 'E-mail',
                name: 'email',
                validator: dojox.validate.isEmailAddress,
                invalidMessage: 'this is not a valid e-mail!'
            }));
            tc.addChild(new ValidationTextBox({
                required: true,
                title: 'Age',
                name: 'age',
                constraints: {min: 18, max: 120},
                validator: dojox.validate.isInRange,
                invalidMessage: 'this is not a valid age (18-120)'
            }));
            this.domNode.appendChild(tc.domNode);
        }
    });
});