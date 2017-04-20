
var app = function(app) {

    app.makePages = function(stage){

        var p = {};

        var logo = new zim.Rectangle(300,100,frame.blue)
            .addTo(stage);

        var content = new zim.Rectangle(700,600,frame.tin)
            .addTo(stage);

        var buttons = new zim.Container()
            .addTo(stage);
        var tabs = p.tabs = new zim.Tabs({
            width:430,
            tabs:["ONE", "TWO", "THREE"]
        }).addTo(buttons);


        // LAYOUT
        // holder, regions, lastMargin, backgroundColor,
        // vertical, regionShape, scalingObject, hideKey
        var layout = p.layout = new zim.Layout({
            holder:stage,
            regions:[
        {object:logo, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
        {object:content, marginTop:5, maxWidth:100, backgroundColor:frame.grey},
        {object:buttons, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            regionShape:new zim.Shape()
        });

        return p;
    }

    return app;
}(app || {});
