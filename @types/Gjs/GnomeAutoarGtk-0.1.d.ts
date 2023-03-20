/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GnomeAutoarGtk-0.1
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="Gtk-3.0.d.ts" />
import type Gtk from './Gtk-3.0.js';
/// <reference path="xlib-2.0.d.ts" />
import type xlib from './xlib-2.0.js';
/// <reference path="Gdk-3.0.d.ts" />
import type Gdk from './Gdk-3.0.js';
/// <reference path="cairo-1.0.d.ts" />
import type cairo from './cairo-1.0.js';
/// <reference path="Pango-1.0.d.ts" />
import type Pango from './Pango-1.0.js';
/// <reference path="HarfBuzz-0.0.d.ts" />
import type HarfBuzz from './HarfBuzz-0.0.js';
/// <reference path="freetype2-2.0.d.ts" />
import type freetype2 from './freetype2-2.0.js';
/// <reference path="GObject-2.0.d.ts" />
import type GObject from './GObject-2.0.js';
/// <reference path="GLib-2.0.d.ts" />
import type GLib from './GLib-2.0.js';
/// <reference path="Gio-2.0.d.ts" />
import type Gio from './Gio-2.0.js';
/// <reference path="GdkPixbuf-2.0.d.ts" />
import type GdkPixbuf from './GdkPixbuf-2.0.js';
/// <reference path="GModule-2.0.d.ts" />
import type GModule from './GModule-2.0.js';
/// <reference path="Atk-1.0.d.ts" />
import type Atk from './Atk-1.0.js';
/// <reference path="GnomeAutoar-0.1.d.ts" />
import type GnomeAutoar from './GnomeAutoar-0.1.js';

declare namespace GnomeAutoarGtk {

/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_advanced_new().
 * @param advanced a #GtkGrid returned by autoar_gtk_chooser_advanced_new()
 * @param format the place to store the #AutoarFormat selected by the user
 * @param filter the place to store the #AutoarFilter selected by the user
 * @returns %TRUE if @format and @filter are set. %FALSE if there is no selected item on @advanced, so @format and @filter are not modified.
 */
function chooser_advanced_get(advanced: any, format: number, filter: number): boolean
/**
 * Create a #GtkGrid with two lists. One list shows all available formats,
 * and the other list shows all available filters.
 * @param default_format an #AutoarFormat
 * @param default_filter an #AutoarFilter
 * @returns a new #GtkGrid widget
 */
function chooser_advanced_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): any
/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_simple_new().
 * @param simple a #GtkComboBox returned by autoar_gtk_chooser_simple_new()
 * @param format the place to store the #AutoarFormat selected by the user
 * @param filter the place to store the #AutoarFilter selected by the user
 * @returns %TRUE if @format and @filter are set. %FALSE if there is no selected item on @simple, so @format and @filter are not modified.
 */
function chooser_simple_get(simple: any, format: number, filter: number): boolean
/**
 * Create a #GtkComboBox with a list of common archive format. There is also
 * an option called "Other format…", which will use
 * autoar_gtk_chooser_advanced_new() and
 * autoar_gtk_chooser_advanced_get() to select less common archive
 * format. Arguments `default_format` and `default_filter` are the default archive
 * format selected on the returned widget. You may want to get the preferred
 * format of users using autoar_pref_get_default_format() and
 * autoar_pref_get_default_filter(), or just set them to 1 to select
 * the default archive format.
 * @param default_format an #AutoarFormat
 * @param default_filter an #AutoarFilter
 * @returns a new #GtkComboBox widget
 */
function chooser_simple_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): any
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}
export default GnomeAutoarGtk;