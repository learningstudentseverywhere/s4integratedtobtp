sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.s4integtobtp.s4integratedtobtp.controller.Home", {
        onInit: function () {

        },
        GetDataFroms4 : function(){
            var oModel = this.getView().getModel();
            oModel.read("/ZPRACTICE_RAP_MARA",{
                success:function(oData){
                      console.log(oData);
                },
                error:function(error){
                    console.log(error);
                }
            })
        }
    });
});
