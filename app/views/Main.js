define([
    'dojo/_base/declare',
    'views/First2',
    'dijit/layout/BorderContainer',
    'dijit/layout/ContentPane', 
    'dijit/layout/AccordionContainer',
    'dijit/layout/TabContainer',
    'views/ProgrammaticValidationForm'
], function(
    declare,
    First,
    BorderContainer,
    ContentPane,
    AccordionContainer,
    TabContainer,
    ValidationForm
) {
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

                //left tab
                tc.addChild(new ContentPane({
                    title: 'Right', content: 'Right'
                }));
            this.addChild(tc);


            this.addChild(new ContentPane({
                region: 'right',
                title: 'right', content: 'Right'
            }));
            this.addChild(new ContentPane({
                region: 'bottom',
                title: 'bottom', content: 'bottom'
            }));
        }
    });
});