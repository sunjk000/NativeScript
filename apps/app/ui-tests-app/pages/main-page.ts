import { EventData } from "tns-core-modules/data/observable";
import { MainPageViewModel } from "../mainPage";
import { WrapLayout } from "tns-core-modules/ui/layouts/wrap-layout";
import { Page } from "tns-core-modules/ui/page";

export function pageLoaded(args: EventData) {
    let page = <Page>args.object;
    let view = require("ui/core/view");

    let wrapLayout = view.getViewById(page, "wrapLayoutWithExamples");

    let examples: Map<string, string> = new Map<string, string>();

    examples.set("gestures", "pages/gestures");
    examples.set("touch", "pages/touch-event");
    examples.set("pan", "pages/pan-event");
    examples.set("handlers", "pages/handlers");
    examples.set("console", "pages/console");
    examples.set("i61", "pages/i61");
    examples.set("i73", "pages/i73");
    examples.set("i86", "pages/i86");
    examples.set("asdf", "pages/asdf");

    let viewModel = new SubMainPageViewModel(wrapLayout, examples);
    page.bindingContext = viewModel;
}

export class SubMainPageViewModel extends MainPageViewModel {
    constructor(container: WrapLayout, examples: Map<string, string>) {
        super(container, examples);
    }
}
