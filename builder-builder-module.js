(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["builder-builder-module"],{

/***/ "./src/app/content/pages/builder/builder.component.html":
/*!**************************************************************!*\
  !*** ./src/app/content/pages/builder/builder.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-cogwheel-2 m--font-brand'\">\n\t<p>\n\t\tThe layout builder helps to configure the layout with preferred options and preview it in real time. The configured layout options will be saved until you change or reset them. To use the layout builder choose the layout options and click the\n\t\t<code>Preview</code> button to preview the changes and click the\n\t\t<code>Export</code> to export your changes with following options:\n\t</p>\n</m-notice>\n\n<!--begin::Portlet-->\n<div class=\"m-portlet m-portlet--tabs\">\n\t<!--begin::Form-->\n\t<form class=\"m-form m-form--label-align-right m-form--fit\" novalidate #builderForm=\"ngForm\" (ngSubmit)=\"submitPreview(builderForm)\">\n\t\t<div class=\"m-portlet__body\">\n\n\t\t\t<mat-tab-group>\n\t\t\t\t<mat-tab label=\"Page\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Layout Type:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[self][layout]\" [(ngModel)]=\"model.self.layout\">\n\t\t\t\t\t\t\t\t\t<option value=\"fluid\">Fluid</option>\n\t\t\t\t\t\t\t\t\t<option value=\"boxed\">Boxed</option>\n\t\t\t\t\t\t\t\t\t<option value=\"boxed\">Wide</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<span class=\"m-form__help\">Select page layout type</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Page Loader:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[loader][type]\" [(ngModel)]=\"model.loader.type\">\n\t\t\t\t\t\t\t\t\t<option value=\"\">Disabled</option>\n\t\t\t\t\t\t\t\t\t<option value=\"default\">Default</option>\n\t\t\t\t\t\t\t\t\t<option value=\"spinner-message\">Spinner Message</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Select page loading indicator</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Content Skin:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[content][skin]\" [(ngModel)]=\"model.content.skin\">\n\t\t\t\t\t\t\t\t\t<option value=\"light\">White</option>\n\t\t\t\t\t\t\t\t\t<option value=\"light2\">Light Grey</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<span class=\"m-form__help\">Please select content skin</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Header\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Desktop Fixed Header:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][self][fixed][desktop]\" value=\"true\" [(ngModel)]=\"model.header.self.fixed.desktop\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Enable fixed header for desktop mode</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Mobile Fixed Header:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][self][fixed][mobile]\" value=\"true\" [(ngModel)]=\"model.header.self.fixed.mobile\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Enable fixed header for mobile mode</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\n\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Display Header Menu:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[menu][header][display]\" value=\"true\" [(ngModel)]=\"model.menu.header.display\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Display header menu</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Dropdown Skin(Desktop):</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[menu][header][desktop][submenu][skin]\" [(ngModel)]=\"model.menu.header.desktop.submenu.skin\">\n\t\t\t\t\t\t\t\t\t<option value=\"light\">Light</option>\n\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<span class=\"m-form__help\">Please select header menu dropdown skin</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Display Submenu Arrow(Desktop):</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[menu][header][desktop][submenu][arrow]\" value=\"true\" [(ngModel)]=\"model.menu.header.desktop.submenu.arrow\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Display header menu dropdown arrows on desktop mode</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\n\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Search Type:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][search][type]\" [(ngModel)]=\"model.header.search.type\">\n\t\t\t\t\t\t\t\t\t<option value=\"search-default\">Expandable Search</option>\n\t\t\t\t\t\t\t\t\t<option value=\"search-dropdown\">Dropdown Search</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<span class=\"m-form__help\">Please header search type</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Dropdown Skin:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][search][dropdown][skin]\" [(ngModel)]=\"model.header.search.dropdown.skin\">\n\t\t\t\t\t\t\t\t\t<option value=\"light\">Light</option>\n\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<span class=\"m-form__help\">Please select search results dropdown skin for dropdown search type</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Left Aside\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group row m--hide\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Display Aside:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][left][display]\" value=\"true\" [(ngModel)]=\"model.aside.left.display\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Display left aside</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Aside Skin:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[aside][left][skin]\" [(ngModel)]=\"model.aside.left.skin\">\n\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark</option>\n\t\t\t\t\t\t\t\t\t<option value=\"light\">Light</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Set left aside skin</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Fixed Aside:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][left][fixed]\" value=\"true\" [(ngModel)]=\"model.aside.left.fixed\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Set fixed aside layout</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Allow Aside Minimizing:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][left][minimize][toggle]\" value=\"true\" [(ngModel)]=\"model.aside.left.minimize.toggle\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Allow aside minimizing</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Default Minimized Aside:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][left][minimize][default]\" value=\"true\" [(ngModel)]=\"model.aside.left.minimize.default\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Set aside minimized by default</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\n\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Submenu Toggle:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[menu][aside][desktop_and_mobile][submenu][accordion]\" [(ngModel)]=\"model.menu.aside.desktop_and_mobile.submenu.accordion\">\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"false\">Dropdown</option>\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"true\">Accordion</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Select submenu toggle mode</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Dropdown Submenu Skin:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[menu][aside][submenu][skin]\" [(ngModel)]=\"model.menu.aside.desktop_and_mobile.submenu.skin\">\n\t\t\t\t\t\t\t\t\t<option value=\"inherit\">Inherit</option>\n\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark</option>\n\t\t\t\t\t\t\t\t\t<option value=\"light\">Light</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Select submenu skin. If\n\t\t\t\t\t\t\t\t\t<code>Inherit</code> is selected it will use the left aside's skin.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Dropdown Submenu Arrow:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[menu][aside][submenu][dropdown][arrow]\" value=\"true\" [(ngModel)]=\"model.menu.aside.desktop_and_mobile.submenu.dropdown.arrow\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Enable dropdown submenu arrow</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Right Aside\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Display Right Aside:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][right][display]\" value=\"true\" [(ngModel)]=\"model.aside.right.display\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Display right aside</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Footer\">\n\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Fixed Footer:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[footer][fixed]\" value=\"true\" [(ngModel)]=\"model.footer.fixed\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Set fixed header</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-lg-4 col-form-label\">Push Footer:</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-xl-4\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][left][push_footer]\" value=\"true\" [(ngModel)]=\"model.aside.left.push_footer\" />\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"m-form__help\">Push footer to the right</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t</mat-tab-group>\n\n\t\t</div>\n\n\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t<div class=\"m-form__actions\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4\"></div>\n\t\t\t\t\t<div class=\"col-lg-8 \">\n\t\t\t\t\t\t<button type=\"submit\" name=\"builder_submit\" data-demo=\"\" class=\"btn btn-primary m-btn m-btn--icon m-btn--wide m-btn--air m-btn--custom\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<i class=\"la la-eye\"></i>\n\t\t\t\t\t\t\t\t<span>Preview</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t\t\t<button type=\"submit\" name=\"builder_submit\" data-demo=\"\" class=\"btn btn-accent m-btn m-btn--icon m-btn--wide m-btn--air m-btn--custom\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<i class=\"la la-cog\"></i>\n\t\t\t\t\t\t\t\t<span>Export</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t\t\t<button type=\"submit\" (click)=\"resetPreview($event)\" name=\"builder_reset\" class=\"btn btn-secondary m-btn m-btn--icon m-btn--wide m-btn--air m-btn--custom\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<i class=\"la la-recycle\"></i>\n\t\t\t\t\t\t\t\t<span>Reset</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n<m-portlet>\n\t<ng-container mPortletHeadTitle>\n\t\t<div class=\"m-portlet__head-title\">\n\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\tGenerated Config <small>can be used for layout config in <code>/src/app/config/layout.ts</code></small>\n\t\t\t</h3>\n\t\t</div>\n\t</ng-container>\n\t<ng-container mPortletBody>\n\t\t<div perfectScrollbar style=\"max-height: 400px\">\n\t\t\t<pre><code highlight class=\"json\">{{model|json}}</code></pre>\n\t\t</div>\n\t</ng-container>\n</m-portlet>\n"

/***/ }),

/***/ "./src/app/content/pages/builder/builder.component.ts":
/*!************************************************************!*\
  !*** ./src/app/content/pages/builder/builder.component.ts ***!
  \************************************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var _core_services_layout_config_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/layout-config-storage.service */ "./src/app/core/services/layout-config-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/layout-config.service */ "./src/app/core/services/layout-config.service.ts");
/* harmony import */ var _core_services_class_init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/class-init.service */ "./src/app/core/services/class-init.service.ts");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/layout */ "./src/app/config/layout.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuilderComponent = /** @class */ (function () {
    function BuilderComponent(layoutConfigService, classInitService, layoutConfigStorageService) {
        var _this = this;
        this.layoutConfigService = layoutConfigService;
        this.classInitService = classInitService;
        this.layoutConfigStorageService = layoutConfigStorageService;
        this.layoutConfigService.onLayoutConfigUpdated$.subscribe(function (config) {
            _this.model = config.config;
        });
    }
    BuilderComponent.prototype.ngOnInit = function () { };
    BuilderComponent.prototype.submitPreview = function (form) {
        this.layoutConfigService.setModel(new _config_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfig"](this.model));
    };
    BuilderComponent.prototype.resetPreview = function (event) {
        event.preventDefault();
        this.layoutConfigStorageService.resetConfig();
        location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], BuilderComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('builderForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], BuilderComponent.prototype, "form", void 0);
    BuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'm-builder',
            template: __webpack_require__(/*! ./builder.component.html */ "./src/app/content/pages/builder/builder.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _core_services_class_init_service__WEBPACK_IMPORTED_MODULE_4__["ClassInitService"],
            _core_services_layout_config_storage_service__WEBPACK_IMPORTED_MODULE_0__["LayoutConfigStorageService"]])
    ], BuilderComponent);
    return BuilderComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/builder/builder.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/content/pages/builder/builder.module.ts ***!
  \*********************************************************/
/*! exports provided: BuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderModule", function() { return BuilderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/layout.module */ "./src/app/content/layout/layout.module.ts");
/* harmony import */ var _builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builder.component */ "./src/app/content/pages/builder/builder.component.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BuilderModule = /** @class */ (function () {
    function BuilderModule() {
    }
    BuilderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"].forRoot({ theme: 'googlecode' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]
                    }
                ])
            ],
            providers: [],
            declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]]
        })
    ], BuilderModule);
    return BuilderModule;
}());



/***/ })

}]);
//# sourceMappingURL=builder-builder-module.js.map