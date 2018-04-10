define([
    'dojo/_base/declare',
    'views/First2',
    'dijit/layout/BorderContainer',
    'dijit/layout/ContentPane', 
    'dijit/layout/AccordionContainer',
    'dijit/layout/TabContainer',
    'views/ProgrammaticValidationForm',
    'gridx/Grid',
    'stores/myStore',
    'extended/dijit/form/ExtendedForm',
    'dijit/form/TextBox',
    'dijit/form/Button',
    'dojox/layout/TableContainer',
    'views/myView/Grid',
    'controllers/myViewController',
    'dojo/domReady!'
], function(
    declare,
    First,
    BorderContainer,
    ContentPane,
    AccordionContainer,
    TabContainer,
    ValidationForm,
    Grid,
    myStore,
    Form,
    TextBox,
    Button,
    TableContainer,
    MyViewGrid,
) {
    var form;
    return declare([
        BorderContainer
    ], {
        postCreate: function() {
            //calls parent constructor
            this.inherited(arguments);

            this.addChild(new ContentPane({
                region: 'top',
                title: 'top', content: 'Top'
            }));

            //create accordion
            var ac = new AccordionContainer({
                region: 'left', 'title': 'left', content: 'Left'
            });
                ac.addChild(new ContentPane({
                    title: 'acTop', content: 'AC Top'
                }));
                ac.addChild(new ContentPane({
                title: 'acMid', content: 'AC Mid'
                }));
                ac.addChild(new ContentPane({
                    title: 'acTop', content: 'AC Top'
                }));
            this.addChild(ac);

                //create center tab container
                var tc = new TabContainer({
                    region: 'center',
                    title: 'center',
                    content: "Center tab Container"
                });

                //left tab
                var leftContentPane = new ContentPane({
                    title: 'Left'
                });
                leftContentPane.addChild(new First({
                    title: 'Title for Lesson 3: click me'
                }));
                tc.addChild(leftContentPane);

                //center tab
                var ccp = new ContentPane({
                    title: 'Middle'
                });
                ccp.addChild(new ValidationForm());
                tc.addChild(ccp);

                //right tab
                var grid = (new ContentPane({
                    region: 'right',
                    title: 'right', content: 'Click the top grid to choose a row to edit.  Changes will appear on both'
                }));   
                    grid.addChild(new MyViewGrid({id: 'myViewGrid'}));
                    formTable = new TableContainer({

                    });
                    form = new Form({
                        id: 'myViewForm'
                    });
                    form.addChild(new TextBox({
                        label: 'id',
                        name: 'id'
                    }));
                    form.addChild(new TextBox({
                        label: 'title',
                        name: 'title'
                    }));
                    form.addChild(new TextBox({
                        label: 'artist',
                        name: 'artist'
                    }));
                    form.addChild(new Button({
                        label: 'Save',
                    }));
                    formTable.addChild(form);
                    grid.addChild(formTable);
                    //this grid will mirror the changes to the top one
                    grid.addChild(new MyViewGrid({id: 'myViewGrid2'}));
                tc.addChild(grid);
            this.addChild(tc);


            
            this.addChild(new ContentPane({
                region: 'right',
                title: 'right', content: 'right'
            }));
            this.addChild(new ContentPane({
                region: 'bottom',
                title: 'bottom', content: 'bottom'
            }));
        }
    });
});