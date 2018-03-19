define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_OnDijitClickMixin',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    //for whatever reason, this is looking in this directory, and not from the server root
    'dojo/text!./First2.html',
    'dijit/form/Button',
], function(
    declare,
    _WidgetBase, 
    _OnDijitClickMixin, 
    _TemplatedMixin, 
    _WidgetsInTemplateMixin, 
    template, 
    Button
) {
    //declare is like a static class
    //define is a non-static class

    //first param: what classes you are extending
    //second: public object definition
    return declare([
        _WidgetBase, 
        _OnDijitClickMixin, 
        _TemplatedMixin, 
        _WidgetsInTemplateMixin,], {
            templateString: template,
            title: 'default title',
            widgetNumber: '',

            postCreate: function() {
                //this binds the data element that was passed in to the dataNode
                this.titleNode.innerHTML = this.title;
            },

            _onClick: function(event) {
                console.log('Widget: ' + this.widgetNumber+ ' was clicked');
            }
        });
});