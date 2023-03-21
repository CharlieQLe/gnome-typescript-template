/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GtkLayerShell-0.1
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

declare namespace GtkLayerShell {

enum Edge {
    /**
     * The left edge of the screen.
     */
    LEFT,
    /**
     * The right edge of the screen.
     */
    RIGHT,
    /**
     * The top edge of the screen.
     */
    TOP,
    /**
     * The bottom edge of the screen.
     */
    BOTTOM,
    /**
     * Should not be used except to get the number of entries. (NOTE: may change in
     * future releases as more entries are added)
     */
    ENTRY_NUMBER,
}
/**
 * GTK_LAYER_SHELL_KEYBOARD_MODE_NONE: This window should not receive keyboard events.
 * GTK_LAYER_SHELL_KEYBOARD_MODE_EXCLUSIVE: This window should have exclusive focus if it is on the top or overlay layer.
 * GTK_LAYER_SHELL_KEYBOARD_MODE_ON_DEMAND: The user should be able to focus and unfocues this window in an implementation
 * defined way. Not supported for protocol version < 4.
 * GTK_LAYER_SHELL_KEYBOARD_MODE_ENTRY_NUMBER: Should not be used except to get the number of entries. (NOTE: may change in
 * future releases as more entries are added)
 */
enum KeyboardMode {
    NONE,
    EXCLUSIVE,
    ON_DEMAND,
    ENTRY_NUMBER,
}
enum Layer {
    /**
     * The background layer.
     */
    BACKGROUND,
    /**
     * The bottom layer.
     */
    BOTTOM,
    /**
     * The top layer.
     */
    TOP,
    /**
     * The overlay layer.
     */
    OVERLAY,
    /**
     * Should not be used except to get the number of entries. (NOTE: may change in
     * future releases as more entries are added)
     */
    ENTRY_NUMBER,
}
/**
 * When auto exclusive zone is enabled, exclusive zone is automatically set to the
 * size of the `window` + relevant margin. To disable auto exclusive zone, just set the
 * exclusive zone to 0 or any other fixed value.
 * 
 * NOTE: you can control the auto exclusive zone by changing the margin on the non-anchored
 * edge. This behavior is specific to gtk-layer-shell and not part of the underlying protocol
 * @param window A layer surface.
 */
function auto_exclusive_zone_enable(window: any): void
function auto_exclusive_zone_is_enabled(window: any): boolean
function get_anchor(window: any, edge: Edge): boolean
function get_exclusive_zone(window: any): number
function get_keyboard_interactivity(window: any): boolean
function get_keyboard_mode(window: any): KeyboardMode
function get_layer(window: any): Layer
function get_major_version(): number
function get_margin(window: any, edge: Edge): number
function get_micro_version(): number
function get_minor_version(): number
/**
 * NOTE: To get which monitor the surface is actually on, use
 * gdk_display_get_monitor_at_window().
 * @param window A layer surface.
 * @returns the monitor this surface will/has requested to be on, can be %NULL.
 */
function get_monitor(window: any): any
/**
 * NOTE: this function does not return ownership of the string. Do not free the returned string.
 * Future calls into the library may invalidate the returned string.
 * @param window A layer surface.
 * @returns a reference to the namespace property. If namespace is unset, returns the default namespace ("gtk-layer-shell"). Never returns %NULL.
 */
function get_namespace(window: any): string | null
/**
 * May block for a Wayland roundtrip the first time it's called.
 * @returns version of the zwlr_layer_shell_v1 protocol supported by the compositor or 0 if the protocol is not supported.
 */
function get_protocol_version(): number
function get_zwlr_layer_surface_v1(window: any): any | null
/**
 * Set the `window` up to be a layer surface once it is mapped. this must be called before
 * the `window` is realized.
 * @param window A #GtkWindow to be turned into a layer surface.
 */
function init_for_window(window: any): void
function is_layer_window(window: any): boolean
/**
 * May block for a Wayland roundtrip the first time it's called.
 * @returns %TRUE if the platform is Wayland and Wayland compositor supports the zwlr_layer_shell_v1 protocol.
 */
function is_supported(): boolean
/**
 * Set whether `window` should be anchored to `edge`.
 * - If two perpendicular edges are anchored, the surface with be anchored to that corner
 * - If two opposite edges are anchored, the window will be stretched across the screen in that direction
 * 
 * Default is %FALSE for each #GtkLayerShellEdge
 * @param window A layer surface.
 * @param edge A #GtkLayerShellEdge this layer suface may be anchored to.
 * @param anchor_to_edge Whether or not to anchor this layer surface to `edge`.
 */
function set_anchor(window: any, edge: Edge, anchor_to_edge: boolean): void
/**
 * Has no effect unless the surface is anchored to an edge. Requests that the compositor
 * does not place other surfaces within the given exclusive zone of the anchored edge.
 * For example, a panel can request to not be covered by maximized windows. See
 * wlr-layer-shell-unstable-v1.xml for details.
 * 
 * Default is 0
 * @param window A layer surface.
 * @param exclusive_zone The size of the exclusive zone.
 */
function set_exclusive_zone(window: any, exclusive_zone: number): void
/**
 * Whether the `window` should receive keyboard events from the compositor.
 * 
 * Default is %FALSE
 * @param window A layer surface.
 * @param interactivity Whether the layer surface should receive keyboard events.
 */
function set_keyboard_interactivity(window: any, interactivity: boolean): void
/**
 * Sets if/when `window` should receive keyboard events from the compositor, see
 * GtkLayerShellKeyboardMode for details.
 * 
 * Default is %GTK_LAYER_SHELL_KEYBOARD_MODE_NONE
 * @param window A layer surface.
 * @param mode The type of keyboard interactivity requested.
 */
function set_keyboard_mode(window: any, mode: KeyboardMode): void
/**
 * Set the "layer" on which the surface appears (controls if it is over top of or below other surfaces). The layer may
 * be changed on-the-fly in the current version of the layer shell protocol, but on compositors that only support an
 * older version the `window` is remapped so the change can take effect.
 * 
 * Default is %GTK_LAYER_SHELL_LAYER_TOP
 * @param window A layer surface.
 * @param layer The layer on which this surface appears.
 */
function set_layer(window: any, layer: Layer): void
/**
 * Set the margin for a specific `edge` of a `window`. Effects both surface's distance from
 * the edge and its exclusive zone size (if auto exclusive zone enabled).
 * 
 * Default is 0 for each #GtkLayerShellEdge
 * @param window A layer surface.
 * @param edge The #GtkLayerShellEdge for which to set the margin.
 * @param margin_size The margin for `edge` to be set.
 */
function set_margin(window: any, edge: Edge, margin_size: number): void
/**
 * Set the output for the window to be placed on, or %NULL to let the compositor choose.
 * If the window is currently mapped, it will get remapped so the change can take effect.
 * 
 * Default is %NULL
 * @param window A layer surface.
 * @param monitor The output this layer surface will be placed on (%NULL to let the compositor decide).
 */
function set_monitor(window: any, monitor: any): void
/**
 * Set the "namespace" of the surface.
 * 
 * No one is quite sure what this is for, but it probably should be something generic
 * ("panel", "osk", etc). The `name_space` string is copied, and caller maintians
 * ownership of original. If the window is currently mapped, it will get remapped so
 * the change can take effect.
 * 
 * Default is "gtk-layer-shell" (which will be used if set to %NULL)
 * @param window A layer surface.
 * @param name_space The namespace of this layer surface.
 */
function set_namespace(window: any, name_space: string | null): void
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
export default GtkLayerShell;