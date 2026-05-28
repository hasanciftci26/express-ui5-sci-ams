import UIComponent from "sap/ui/core/UIComponent";
import { createDeviceModel } from "sap/sci/ams/ui/model/models";

/**
 * @namespace sap.sci.ams.ui
 */
export default class Component extends UIComponent {
    public static readonly metadata = {
        manifest: "json"
    };

    public override init() {
        super.init();
        this.getRouter().initialize();
        this.setModel(createDeviceModel(), "device");
    }
}