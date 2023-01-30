/**
 * GtkSource 5
 *
 * Generated from 5.0
 */

import * as Gio from "gio2";
import * as GObject from "gobject2";
import * as Gtk from "gtk4";
import * as GLib from "glib2";
import * as Pango from "pango1";
import * as Gdk from "gdk4";
import * as GdkPixbuf from "gdkpixbuf2";

export function encoding_get_all(): Encoding[];
export function encoding_get_current(): Encoding;
export function encoding_get_default_candidates(): Encoding[];
export function encoding_get_from_charset(charset: string): Encoding | null;
export function encoding_get_utf8(): Encoding;
export function file_loader_error_quark(): GLib.Quark;
export function file_saver_error_quark(): GLib.Quark;
export function finalize(): void;
export function init(): void;
export function scheduler_add(callback: SchedulerCallback): number;
export function scheduler_add_full(callback: SchedulerCallback): number;
export function scheduler_remove(handler_id: number): void;
export function utils_escape_search_text(text: string): string;
export function utils_unescape_search_text(text: string): string;
export type SchedulerCallback = (deadline: number) => boolean;

export namespace BackgroundPatternType {
    export const $gtype: GObject.GType<BackgroundPatternType>;
}

export enum BackgroundPatternType {
    NONE = 0,
    GRID = 1,
}

export namespace BracketMatchType {
    export const $gtype: GObject.GType<BracketMatchType>;
}

export enum BracketMatchType {
    NONE = 0,
    OUT_OF_RANGE = 1,
    NOT_FOUND = 2,
    FOUND = 3,
}

export namespace ChangeCaseType {
    export const $gtype: GObject.GType<ChangeCaseType>;
}

export enum ChangeCaseType {
    LOWER = 0,
    UPPER = 1,
    TOGGLE = 2,
    TITLE = 3,
}

export namespace CompletionActivation {
    export const $gtype: GObject.GType<CompletionActivation>;
}

export enum CompletionActivation {
    NONE = 0,
    INTERACTIVE = 1,
    USER_REQUESTED = 2,
}

export namespace CompletionColumn {
    export const $gtype: GObject.GType<CompletionColumn>;
}

export enum CompletionColumn {
    ICON = 0,
    BEFORE = 1,
    TYPED_TEXT = 2,
    AFTER = 3,
    COMMENT = 4,
    DETAILS = 5,
}

export namespace CompressionType {
    export const $gtype: GObject.GType<CompressionType>;
}

export enum CompressionType {
    NONE = 0,
    GZIP = 1,
}

export class FileLoaderError extends GLib.Error {
    static $gtype: GObject.GType<FileLoaderError>;

    constructor(options: { message: string; code: number });
    constructor(copy: FileLoaderError);

    // Fields
    static TOO_BIG: number;
    static ENCODING_AUTO_DETECTION_FAILED: number;
    static CONVERSION_FALLBACK: number;

    // Members
    static quark(): GLib.Quark;
}

export class FileSaverError extends GLib.Error {
    static $gtype: GObject.GType<FileSaverError>;

    constructor(options: { message: string; code: number });
    constructor(copy: FileSaverError);

    // Fields
    static INVALID_CHARS: number;
    static EXTERNALLY_MODIFIED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace GutterRendererAlignmentMode {
    export const $gtype: GObject.GType<GutterRendererAlignmentMode>;
}

export enum GutterRendererAlignmentMode {
    CELL = 0,
    FIRST = 1,
    LAST = 2,
}

export namespace NewlineType {
    export const $gtype: GObject.GType<NewlineType>;
}

export enum NewlineType {
    LF = 0,
    CR = 1,
    CR_LF = 2,
}

export namespace SmartHomeEndType {
    export const $gtype: GObject.GType<SmartHomeEndType>;
}

export enum SmartHomeEndType {
    DISABLED = 0,
    BEFORE = 1,
    AFTER = 2,
    ALWAYS = 3,
}

export namespace ViewGutterPosition {
    export const $gtype: GObject.GType<ViewGutterPosition>;
}

export enum ViewGutterPosition {
    LINES = -30,
    MARKS = -20,
}

export namespace FileSaverFlags {
    export const $gtype: GObject.GType<FileSaverFlags>;
}

export enum FileSaverFlags {
    NONE = 0,
    IGNORE_INVALID_CHARS = 1,
    IGNORE_MODIFICATION_TIME = 2,
    CREATE_BACKUP = 4,
}

export namespace SortFlags {
    export const $gtype: GObject.GType<SortFlags>;
}

export enum SortFlags {
    NONE = 0,
    CASE_SENSITIVE = 1,
    REVERSE_ORDER = 2,
    REMOVE_DUPLICATES = 4,
}

export namespace SpaceLocationFlags {
    export const $gtype: GObject.GType<SpaceLocationFlags>;
}

export enum SpaceLocationFlags {
    NONE = 0,
    LEADING = 1,
    INSIDE_TEXT = 2,
    TRAILING = 4,
    ALL = 7,
}

export namespace SpaceTypeFlags {
    export const $gtype: GObject.GType<SpaceTypeFlags>;
}

export enum SpaceTypeFlags {
    NONE = 0,
    SPACE = 1,
    TAB = 2,
    NEWLINE = 4,
    NBSP = 8,
    ALL = 15,
}
export module Buffer {
    export interface ConstructorProperties extends Gtk.TextBuffer.ConstructorProperties {
        [key: string]: any;
        highlightMatchingBrackets: boolean;
        highlightSyntax: boolean;
        implicitTrailingNewline: boolean;
        language: Language;
        styleScheme: StyleScheme;
    }
}
export class Buffer extends Gtk.TextBuffer {
    static $gtype: GObject.GType<Buffer>;

    constructor(properties?: Partial<Buffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Buffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get highlightMatchingBrackets(): boolean;
    set highlightMatchingBrackets(val: boolean);
    get highlightSyntax(): boolean;
    set highlightSyntax(val: boolean);
    get implicitTrailingNewline(): boolean;
    set implicitTrailingNewline(val: boolean);
    get language(): Language;
    set language(val: Language);
    get styleScheme(): StyleScheme;
    set styleScheme(val: StyleScheme);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "bracket-matched",
        callback: (_source: this, iter: Gtk.TextIter | null, state: BracketMatchType) => void
    ): number;
    connect_after(
        signal: "bracket-matched",
        callback: (_source: this, iter: Gtk.TextIter | null, state: BracketMatchType) => void
    ): number;
    emit(signal: "bracket-matched", iter: Gtk.TextIter | null, state: BracketMatchType): void;
    connect(signal: "cursor-moved", callback: (_source: this) => void): number;
    connect_after(signal: "cursor-moved", callback: (_source: this) => void): number;
    emit(signal: "cursor-moved"): void;
    connect(
        signal: "highlight-updated",
        callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter) => void
    ): number;
    connect_after(
        signal: "highlight-updated",
        callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter) => void
    ): number;
    emit(signal: "highlight-updated", start: Gtk.TextIter, end: Gtk.TextIter): void;
    connect(signal: "source-mark-updated", callback: (_source: this, mark: Gtk.TextMark) => void): number;
    connect_after(signal: "source-mark-updated", callback: (_source: this, mark: Gtk.TextMark) => void): number;
    emit(signal: "source-mark-updated", mark: Gtk.TextMark): void;

    // Constructors

    static ["new"](table?: Gtk.TextTagTable | null): Buffer;
    static new_with_language(language: Language): Buffer;

    // Members

    backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [boolean, Gtk.TextIter];
    change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void;
    create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark;
    ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;
    forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [boolean, Gtk.TextIter];
    get_context_classes_at_iter(iter: Gtk.TextIter): string[];
    get_highlight_matching_brackets(): boolean;
    get_highlight_syntax(): boolean;
    get_implicit_trailing_newline(): boolean;
    get_language(): Language | null;
    get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): Mark[];
    get_source_marks_at_line(line: number, category?: string | null): Mark[];
    get_style_scheme(): StyleScheme | null;
    iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];
    iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];
    iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;
    join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
    remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void;
    set_highlight_matching_brackets(highlight: boolean): void;
    set_highlight_syntax(highlight: boolean): void;
    set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
    set_language(language?: Language | null): void;
    set_style_scheme(scheme?: StyleScheme | null): void;
    sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void;
    vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;
}
export module Completion {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        buffer: Gtk.TextView;
        pageSize: number;
        rememberInfoVisibility: boolean;
        selectOnShow: boolean;
        showIcons: boolean;
        view: View;
    }
}
export class Completion extends GObject.Object {
    static $gtype: GObject.GType<Completion>;

    constructor(properties?: Partial<Completion.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Completion.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffer(): Gtk.TextView;
    get pageSize(): number;
    set pageSize(val: number);
    get rememberInfoVisibility(): boolean;
    set rememberInfoVisibility(val: boolean);
    get selectOnShow(): boolean;
    set selectOnShow(val: boolean);
    get showIcons(): boolean;
    set showIcons(val: boolean);
    get view(): View;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "hide", callback: (_source: this) => void): number;
    connect_after(signal: "hide", callback: (_source: this) => void): number;
    emit(signal: "hide"): void;
    connect(signal: "provider-added", callback: (_source: this, provider: CompletionProvider) => void): number;
    connect_after(signal: "provider-added", callback: (_source: this, provider: CompletionProvider) => void): number;
    emit(signal: "provider-added", provider: CompletionProvider): void;
    connect(signal: "provider-removed", callback: (_source: this, provider: CompletionProvider) => void): number;
    connect_after(signal: "provider-removed", callback: (_source: this, provider: CompletionProvider) => void): number;
    emit(signal: "provider-removed", provider: CompletionProvider): void;
    connect(signal: "show", callback: (_source: this) => void): number;
    connect_after(signal: "show", callback: (_source: this) => void): number;
    emit(signal: "show"): void;

    // Members

    add_provider(provider: CompletionProvider): void;
    block_interactive(): void;
    get_buffer(): Buffer;
    get_page_size(): number;
    get_view(): View;
    hide(): void;
    remove_provider(provider: CompletionProvider): void;
    set_page_size(page_size: number): void;
    show(): void;
    unblock_interactive(): void;
    static fuzzy_highlight(haystack: string, casefold_query: string): Pango.AttrList | null;
    static fuzzy_match(haystack: string | null, casefold_needle: string): [boolean, number];
}
export module CompletionCell {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;
        column: CompletionColumn;
        markup: string;
        paintable: Gdk.Paintable;
        text: string;
        widget: Gtk.Widget;
    }
}
export class CompletionCell extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
    static $gtype: GObject.GType<CompletionCell>;

    constructor(properties?: Partial<CompletionCell.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CompletionCell.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get column(): CompletionColumn;
    get markup(): string;
    set markup(val: string);
    get paintable(): Gdk.Paintable;
    set paintable(val: Gdk.Paintable);
    get text(): string;
    set text(val: string);
    get widget(): Gtk.Widget;
    set widget(val: Gtk.Widget);

    // Implemented Properties

    get accessibleRole(): Gtk.AccessibleRole;
    set accessibleRole(val: Gtk.AccessibleRole);

    // Members

    get_column(): CompletionColumn;
    get_widget(): Gtk.Widget | null;
    set_gicon(gicon: Gio.Icon): void;
    set_icon_name(icon_name: string): void;
    set_markup(markup: string): void;
    set_paintable(paintable: Gdk.Paintable): void;
    set_text(text?: string | null): void;
    set_text_with_attributes(text: string, attrs: Pango.AttrList): void;
    set_widget(child: Gtk.Widget): void;

    // Implemented Members

    get_accessible_role(): Gtk.AccessibleRole;
    reset_property(property: Gtk.AccessibleProperty): void;
    reset_relation(relation: Gtk.AccessibleRelation): void;
    reset_state(state: Gtk.AccessibleState): void;
    update_property(properties: Gtk.AccessibleProperty[], values: GObject.Value[]): void;
    update_relation(relations: Gtk.AccessibleRelation[], values: GObject.Value[]): void;
    update_state(states: Gtk.AccessibleState[], values: GObject.Value[]): void;
    get_buildable_id(): string | null;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, Gtk.BuildableParser, any];
    vfunc_get_id(): string;
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_id(id: string): void;
}
export module CompletionContext {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        busy: boolean;
        completion: Completion;
        empty: boolean;
    }
}
export class CompletionContext<A extends GObject.Object = GObject.Object>
    extends GObject.Object
    implements Gio.ListModel<A>
{
    static $gtype: GObject.GType<CompletionContext>;

    constructor(properties?: Partial<CompletionContext.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<CompletionContext.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get busy(): boolean;
    get completion(): Completion;
    get empty(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "provider-model-changed",
        callback: (_source: this, provider: CompletionProvider, model: Gio.ListModel | null) => void
    ): number;
    connect_after(
        signal: "provider-model-changed",
        callback: (_source: this, provider: CompletionProvider, model: Gio.ListModel | null) => void
    ): number;
    emit(signal: "provider-model-changed", provider: CompletionProvider, model: Gio.ListModel | null): void;

    // Members

    get_activation(): CompletionActivation;
    get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
    get_buffer(): Buffer | null;
    get_busy(): boolean;
    get_completion(): Completion | null;
    get_empty(): boolean;
    get_language(): Language | null;
    get_proposals_for_provider(provider: CompletionProvider): Gio.ListModel | null;
    get_view(): View | null;
    get_word(): string;
    list_providers(): Gio.ListModel;
    set_proposals_for_provider(provider: CompletionProvider, results?: Gio.ListModel | null): void;

    // Implemented Members

    get_item_type(): GObject.GType;
    get_n_items(): number;
    get_item(position: number): A | null;
    items_changed(position: number, removed: number, added: number): void;
    vfunc_get_item(position: number): A | null;
    vfunc_get_item_type(): GObject.GType;
    vfunc_get_n_items(): number;
}
export module CompletionSnippets {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        priority: number;
        title: string;
    }
}
export class CompletionSnippets extends GObject.Object implements CompletionProvider {
    static $gtype: GObject.GType<CompletionSnippets>;

    constructor(properties?: Partial<CompletionSnippets.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CompletionSnippets.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get priority(): number;
    set priority(val: number);
    get title(): string;
    set title(val: string);

    // Constructors

    static ["new"](): CompletionSnippets;

    // Implemented Members

    activate(context: CompletionContext, proposal: CompletionProposal): void;
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
    get_priority(context: CompletionContext): number;
    get_title(): string | null;
    is_trigger(iter: Gtk.TextIter, ch: number): boolean;
    key_activates(
        context: CompletionContext,
        proposal: CompletionProposal,
        keyval: number,
        state: Gdk.ModifierType
    ): boolean;
    list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
    populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null): Promise<Gio.ListModel>;
    populate_async(
        context: CompletionContext,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    populate_async(
        context: CompletionContext,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.ListModel> | void;
    populate_finish(result: Gio.AsyncResult): Gio.ListModel;
    refilter(context: CompletionContext, model: Gio.ListModel): void;
    vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;
    vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
    vfunc_get_priority(context: CompletionContext): number;
    vfunc_get_title(): string | null;
    vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean;
    vfunc_key_activates(
        context: CompletionContext,
        proposal: CompletionProposal,
        keyval: number,
        state: Gdk.ModifierType
    ): boolean;
    vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
    vfunc_populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null): Promise<Gio.ListModel>;
    vfunc_populate_async(
        context: CompletionContext,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_populate_async(
        context: CompletionContext,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.ListModel> | void;
    vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;
    vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
}
export module CompletionWords {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        minimumWordSize: number;
        priority: number;
        proposalsBatchSize: number;
        scanBatchSize: number;
        title: string;
    }
}
export class CompletionWords extends GObject.Object implements CompletionProvider {
    static $gtype: GObject.GType<CompletionWords>;

    constructor(properties?: Partial<CompletionWords.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CompletionWords.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get minimumWordSize(): number;
    set minimumWordSize(val: number);
    get priority(): number;
    set priority(val: number);
    get proposalsBatchSize(): number;
    set proposalsBatchSize(val: number);
    get scanBatchSize(): number;
    set scanBatchSize(val: number);
    get title(): string;
    set title(val: string);

    // Constructors

    static ["new"](title?: string | null): CompletionWords;

    // Members

    register(buffer: Gtk.TextBuffer): void;
    unregister(buffer: Gtk.TextBuffer): void;

    // Implemented Members

    activate(context: CompletionContext, proposal: CompletionProposal): void;
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
    get_priority(context: CompletionContext): number;
    get_title(): string | null;
    is_trigger(iter: Gtk.TextIter, ch: number): boolean;
    key_activates(
        context: CompletionContext,
        proposal: CompletionProposal,
        keyval: number,
        state: Gdk.ModifierType
    ): boolean;
    list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
    populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null): Promise<Gio.ListModel>;
    populate_async(
        context: CompletionContext,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    populate_async(
        context: CompletionContext,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.ListModel> | void;
    populate_finish(result: Gio.AsyncResult): Gio.ListModel;
    refilter(context: CompletionContext, model: Gio.ListModel): void;
    vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;
    vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
    vfunc_get_priority(context: CompletionContext): number;
    vfunc_get_title(): string | null;
    vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean;
    vfunc_key_activates(
        context: CompletionContext,
        proposal: CompletionProposal,
        keyval: number,
        state: Gdk.ModifierType
    ): boolean;
    vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
    vfunc_populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null): Promise<Gio.ListModel>;
    vfunc_populate_async(
        context: CompletionContext,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_populate_async(
        context: CompletionContext,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.ListModel> | void;
    vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;
    vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
}
export module File {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        compressionType: CompressionType;
        encoding: Encoding;
        location: Gio.File;
        newlineType: NewlineType;
        readOnly: boolean;
    }
}
export class File extends GObject.Object {
    static $gtype: GObject.GType<File>;

    constructor(properties?: Partial<File.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<File.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get compressionType(): CompressionType;
    get encoding(): Encoding;
    get location(): Gio.File;
    set location(val: Gio.File);
    get newlineType(): NewlineType;
    get readOnly(): boolean;

    // Constructors

    static ["new"](): File;

    // Members

    check_file_on_disk(): void;
    get_compression_type(): CompressionType;
    get_encoding(): Encoding;
    get_location(): Gio.File;
    get_newline_type(): NewlineType;
    is_deleted(): boolean;
    is_externally_modified(): boolean;
    is_local(): boolean;
    is_readonly(): boolean;
    set_location(location?: Gio.File | null): void;
}
export module FileLoader {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        buffer: Buffer;
        file: File;
        inputStream: Gio.InputStream;
        location: Gio.File;
    }
}
export class FileLoader extends GObject.Object {
    static $gtype: GObject.GType<FileLoader>;

    constructor(properties?: Partial<FileLoader.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileLoader.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffer(): Buffer;
    get file(): File;
    get inputStream(): Gio.InputStream;
    get location(): Gio.File;

    // Constructors

    static ["new"](buffer: Buffer, file: File): FileLoader;
    static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;

    // Members

    get_buffer(): Buffer;
    get_compression_type(): CompressionType;
    get_encoding(): Encoding;
    get_file(): File;
    get_input_stream(): Gio.InputStream | null;
    get_location(): Gio.File | null;
    get_newline_type(): NewlineType;
    load_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
        progress_callback_notify?: GLib.DestroyNotify | null
    ): Promise<boolean>;
    load_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        progress_callback: Gio.FileProgressCallback | null,
        progress_callback_notify: GLib.DestroyNotify | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    load_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
        progress_callback_notify?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    load_finish(result: Gio.AsyncResult): boolean;
    set_candidate_encodings(candidate_encodings: Encoding[]): void;
}
export module FileSaver {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        buffer: Buffer;
        compressionType: CompressionType;
        encoding: Encoding;
        file: File;
        flags: FileSaverFlags;
        location: Gio.File;
        newlineType: NewlineType;
    }
}
export class FileSaver extends GObject.Object {
    static $gtype: GObject.GType<FileSaver>;

    constructor(properties?: Partial<FileSaver.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileSaver.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffer(): Buffer;
    get compressionType(): CompressionType;
    set compressionType(val: CompressionType);
    get encoding(): Encoding;
    set encoding(val: Encoding);
    get file(): File;
    get flags(): FileSaverFlags;
    set flags(val: FileSaverFlags);
    get location(): Gio.File;
    get newlineType(): NewlineType;
    set newlineType(val: NewlineType);

    // Constructors

    static ["new"](buffer: Buffer, file: File): FileSaver;
    static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

    // Members

    get_buffer(): Buffer;
    get_compression_type(): CompressionType;
    get_encoding(): Encoding;
    get_file(): File;
    get_flags(): FileSaverFlags;
    get_location(): Gio.File;
    get_newline_type(): NewlineType;
    save_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
        progress_callback_notify?: GLib.DestroyNotify | null
    ): Promise<boolean>;
    save_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        progress_callback: Gio.FileProgressCallback | null,
        progress_callback_notify: GLib.DestroyNotify | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    save_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
        progress_callback_notify?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    save_finish(result: Gio.AsyncResult): boolean;
    set_compression_type(compression_type: CompressionType): void;
    set_encoding(encoding?: Encoding | null): void;
    set_flags(flags: FileSaverFlags): void;
    set_newline_type(newline_type: NewlineType): void;
}
export module Gutter {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;
        view: View;
        windowType: Gtk.TextWindowType;
    }
}
export class Gutter extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
    static $gtype: GObject.GType<Gutter>;

    constructor(properties?: Partial<Gutter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Gutter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get view(): View;
    get windowType(): Gtk.TextWindowType;

    // Implemented Properties

    get accessibleRole(): Gtk.AccessibleRole;
    set accessibleRole(val: Gtk.AccessibleRole);

    // Members

    get_view(): View;
    insert(renderer: GutterRenderer, position: number): boolean;
    remove(renderer: GutterRenderer): void;
    reorder(renderer: GutterRenderer, position: number): void;

    // Implemented Members

    get_accessible_role(): Gtk.AccessibleRole;
    reset_property(property: Gtk.AccessibleProperty): void;
    reset_relation(relation: Gtk.AccessibleRelation): void;
    reset_state(state: Gtk.AccessibleState): void;
    update_property(properties: Gtk.AccessibleProperty[], values: GObject.Value[]): void;
    update_relation(relations: Gtk.AccessibleRelation[], values: GObject.Value[]): void;
    update_state(states: Gtk.AccessibleState[], values: GObject.Value[]): void;
    get_buildable_id(): string | null;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, Gtk.BuildableParser, any];
    vfunc_get_id(): string;
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_id(id: string): void;
}
export module GutterLines {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class GutterLines extends GObject.Object {
    static $gtype: GObject.GType<GutterLines>;

    constructor(properties?: Partial<GutterLines.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GutterLines.ConstructorProperties>, ...args: any[]): void;

    // Members

    add_class(line: number, name: string): void;
    add_qclass(line: number, qname: GLib.Quark): void;
    get_buffer(): Gtk.TextBuffer;
    get_first(): number;
    get_iter_at_line(line: number): Gtk.TextIter;
    get_last(): number;
    get_line_yrange(line: number, mode: GutterRendererAlignmentMode): [number, number];
    get_view(): Gtk.TextView;
    has_any_class(line: number): boolean;
    has_class(line: number, name: string): boolean;
    has_qclass(line: number, qname: GLib.Quark): boolean;
    is_cursor(line: number): boolean;
    is_prelit(line: number): boolean;
    is_selected(line: number): boolean;
    remove_class(line: number, name: string): void;
    remove_qclass(line: number, qname: GLib.Quark): void;
}
export module GutterRenderer {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;
        alignmentMode: GutterRendererAlignmentMode;
        lines: GutterLines;
        view: Gtk.TextView;
        xalign: number;
        xpad: number;
        yalign: number;
        ypad: number;
    }
}
export abstract class GutterRenderer extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
    static $gtype: GObject.GType<GutterRenderer>;

    constructor(properties?: Partial<GutterRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GutterRenderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alignmentMode(): GutterRendererAlignmentMode;
    set alignmentMode(val: GutterRendererAlignmentMode);
    get lines(): GutterLines;
    get view(): Gtk.TextView;
    get xalign(): number;
    set xalign(val: number);
    get xpad(): number;
    set xpad(val: number);
    get yalign(): number;
    set yalign(val: number);
    get ypad(): number;
    set ypad(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "activate",
        callback: (
            _source: this,
            iter: Gtk.TextIter,
            area: Gdk.Rectangle,
            button: number,
            state: Gdk.ModifierType,
            n_presses: number
        ) => void
    ): number;
    connect_after(
        signal: "activate",
        callback: (
            _source: this,
            iter: Gtk.TextIter,
            area: Gdk.Rectangle,
            button: number,
            state: Gdk.ModifierType,
            n_presses: number
        ) => void
    ): number;
    emit(
        signal: "activate",
        iter: Gtk.TextIter,
        area: Gdk.Rectangle,
        button: number,
        state: Gdk.ModifierType,
        n_presses: number
    ): void;
    connect(
        signal: "query-activatable",
        callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean
    ): number;
    connect_after(
        signal: "query-activatable",
        callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean
    ): number;
    emit(signal: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void;
    connect(signal: "query-data", callback: (_source: this, object: GObject.Object, p0: number) => void): number;
    connect_after(signal: "query-data", callback: (_source: this, object: GObject.Object, p0: number) => void): number;
    emit(signal: "query-data", object: GObject.Object, p0: number): void;

    // Implemented Properties

    get accessibleRole(): Gtk.AccessibleRole;
    set accessibleRole(val: Gtk.AccessibleRole);

    // Members

    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void;
    // Conflicted with Gtk.Widget.activate
    activate(...args: never[]): any;
    align_cell(line: number, width: number, height: number): [number, number];
    get_alignment_mode(): GutterRendererAlignmentMode;
    get_buffer(): Buffer | null;
    get_view(): View;
    get_xalign(): number;
    get_xpad(): number;
    get_yalign(): number;
    get_ypad(): number;
    query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;
    set_alignment_mode(mode: GutterRendererAlignmentMode): void;
    set_xalign(xalign: number): void;
    set_xpad(xpad: number): void;
    set_yalign(yalign: number): void;
    set_ypad(ypad: number): void;
    vfunc_activate(
        iter: Gtk.TextIter,
        area: Gdk.Rectangle,
        button: number,
        state: Gdk.ModifierType,
        n_presses: number
    ): void;
    vfunc_begin(lines: GutterLines): void;
    vfunc_change_buffer(old_buffer?: Buffer | null): void;
    vfunc_change_view(old_view?: View | null): void;
    vfunc_end(): void;
    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;
    vfunc_query_data(lines: GutterLines, line: number): void;
    vfunc_snapshot_line(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void;

    // Implemented Members

    get_accessible_role(): Gtk.AccessibleRole;
    reset_property(property: Gtk.AccessibleProperty): void;
    reset_relation(relation: Gtk.AccessibleRelation): void;
    reset_state(state: Gtk.AccessibleState): void;
    update_property(properties: Gtk.AccessibleProperty[], values: GObject.Value[]): void;
    update_relation(relations: Gtk.AccessibleRelation[], values: GObject.Value[]): void;
    update_state(states: Gtk.AccessibleState[], values: GObject.Value[]): void;
    get_buildable_id(): string | null;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, Gtk.BuildableParser, any];
    vfunc_get_id(): string;
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_id(id: string): void;
}
export module GutterRendererPixbuf {
    export interface ConstructorProperties extends GutterRenderer.ConstructorProperties {
        [key: string]: any;
        gicon: Gio.Icon;
        iconName: string;
        paintable: Gdk.Paintable;
        pixbuf: GdkPixbuf.Pixbuf;
    }
}
export class GutterRendererPixbuf
    extends GutterRenderer
    implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget
{
    static $gtype: GObject.GType<GutterRendererPixbuf>;

    constructor(properties?: Partial<GutterRendererPixbuf.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GutterRendererPixbuf.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);
    get iconName(): string;
    set iconName(val: string);
    get paintable(): Gdk.Paintable;
    set paintable(val: Gdk.Paintable);
    get pixbuf(): GdkPixbuf.Pixbuf;
    set pixbuf(val: GdkPixbuf.Pixbuf);

    // Constructors

    static ["new"](): GutterRendererPixbuf;

    // Members

    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_paintable(): Gdk.Paintable | null;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    overlay_paintable(paintable: Gdk.Paintable): void;
    set_gicon(icon?: Gio.Icon | null): void;
    set_icon_name(icon_name?: string | null): void;
    set_paintable(paintable?: Gdk.Paintable | null): void;
    set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;
}
export module GutterRendererText {
    export interface ConstructorProperties extends GutterRenderer.ConstructorProperties {
        [key: string]: any;
        markup: string;
        text: string;
    }
}
export class GutterRendererText extends GutterRenderer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
    static $gtype: GObject.GType<GutterRendererText>;

    constructor(properties?: Partial<GutterRendererText.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GutterRendererText.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get markup(): string;
    set markup(val: string);
    get text(): string;
    set text(val: string);

    // Constructors

    static ["new"](): GutterRendererText;

    // Members

    measure(text: string): [number, number];
    // Conflicted with Gtk.Widget.measure
    measure(...args: never[]): any;
    measure_markup(markup: string): [number, number];
    set_markup(markup: string, length: number): void;
    set_text(text: string, length: number): void;
}
export module Hover {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        hoverDelay: number;
    }
}
export class Hover extends GObject.Object {
    static $gtype: GObject.GType<Hover>;

    constructor(properties?: Partial<Hover.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Hover.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get hoverDelay(): number;
    set hoverDelay(val: number);

    // Members

    add_provider(provider: HoverProvider): void;
    remove_provider(provider: HoverProvider): void;
}
export module HoverContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class HoverContext extends GObject.Object {
    static $gtype: GObject.GType<HoverContext>;

    constructor(properties?: Partial<HoverContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HoverContext.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
    get_buffer(): Buffer;
    get_iter(iter: Gtk.TextIter): boolean;
    get_view(): View;
}
export module HoverDisplay {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class HoverDisplay extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
    static $gtype: GObject.GType<HoverDisplay>;

    constructor(properties?: Partial<HoverDisplay.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HoverDisplay.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get accessibleRole(): Gtk.AccessibleRole;
    set accessibleRole(val: Gtk.AccessibleRole);

    // Members

    append(child: Gtk.Widget): void;
    insert_after(child: Gtk.Widget, sibling: Gtk.Widget): void;
    // Conflicted with Gtk.Widget.insert_after
    insert_after(...args: never[]): any;
    prepend(child: Gtk.Widget): void;
    remove(child: Gtk.Widget): void;

    // Implemented Members

    get_accessible_role(): Gtk.AccessibleRole;
    reset_property(property: Gtk.AccessibleProperty): void;
    reset_relation(relation: Gtk.AccessibleRelation): void;
    reset_state(state: Gtk.AccessibleState): void;
    update_property(properties: Gtk.AccessibleProperty[], values: GObject.Value[]): void;
    update_relation(relations: Gtk.AccessibleRelation[], values: GObject.Value[]): void;
    update_state(states: Gtk.AccessibleState[], values: GObject.Value[]): void;
    get_buildable_id(): string | null;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, Gtk.BuildableParser, any];
    vfunc_get_id(): string;
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_id(id: string): void;
}
export module Language {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        hidden: boolean;
        id: string;
        name: string;
        section: string;
    }
}
export class Language extends GObject.Object {
    static $gtype: GObject.GType<Language>;

    constructor(properties?: Partial<Language.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Language.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get hidden(): boolean;
    get id(): string;
    get name(): string;
    get section(): string;

    // Members

    get_globs(): string[] | null;
    get_hidden(): boolean;
    get_id(): string;
    get_metadata(name: string): string | null;
    get_mime_types(): string[] | null;
    get_name(): string;
    get_section(): string;
    get_style_fallback(style_id: string): string | null;
    get_style_ids(): string[] | null;
    get_style_name(style_id: string): string | null;
}
export module LanguageManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        languageIds: string[];
        searchPath: string[];
    }
}
export class LanguageManager extends GObject.Object {
    static $gtype: GObject.GType<LanguageManager>;

    constructor(properties?: Partial<LanguageManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LanguageManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get languageIds(): string[];
    get searchPath(): string[];
    set searchPath(val: string[]);

    // Constructors

    static ["new"](): LanguageManager;

    // Members

    append_search_path(path: string): void;
    get_language(id: string): Language | null;
    get_language_ids(): string[] | null;
    get_search_path(): string[];
    guess_language(filename?: string | null, content_type?: string | null): Language | null;
    prepend_search_path(path: string): void;
    set_search_path(dirs?: string[] | null): void;
    static get_default(): LanguageManager;
}
export module Map {
    export interface ConstructorProperties extends View.ConstructorProperties {
        [key: string]: any;
        fontDesc: Pango.FontDescription;
        view: View;
    }
}
export class Map extends View implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {
    static $gtype: GObject.GType<Map>;

    constructor(properties?: Partial<Map.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Map.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get fontDesc(): Pango.FontDescription;
    set fontDesc(val: Pango.FontDescription);
    get view(): View;
    set view(val: View);

    // Constructors

    static ["new"](): Map;

    // Members

    get_view(): View | null;
    set_view(view: View): void;
}
export module Mark {
    export interface ConstructorProperties extends Gtk.TextMark.ConstructorProperties {
        [key: string]: any;
        category: string;
    }
}
export class Mark extends Gtk.TextMark {
    static $gtype: GObject.GType<Mark>;

    constructor(properties?: Partial<Mark.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Mark.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get category(): string;

    // Constructors

    static ["new"](name: string | null, category: string): Mark;
    // Conflicted with Gtk.TextMark.new
    static ["new"](...args: never[]): any;

    // Members

    get_category(): string;
    next(category?: string | null): Mark | null;
    prev(category: string): Mark | null;
}
export module MarkAttributes {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        background: Gdk.RGBA;
        gicon: Gio.Icon;
        iconName: string;
        pixbuf: GdkPixbuf.Pixbuf;
    }
}
export class MarkAttributes extends GObject.Object {
    static $gtype: GObject.GType<MarkAttributes>;

    constructor(properties?: Partial<MarkAttributes.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MarkAttributes.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get background(): Gdk.RGBA;
    set background(val: Gdk.RGBA);
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);
    get iconName(): string;
    set iconName(val: string);
    get pixbuf(): GdkPixbuf.Pixbuf;
    set pixbuf(val: GdkPixbuf.Pixbuf);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "query-tooltip-markup", callback: (_source: this, mark: Mark) => string): number;
    connect_after(signal: "query-tooltip-markup", callback: (_source: this, mark: Mark) => string): number;
    emit(signal: "query-tooltip-markup", mark: Mark): void;
    connect(signal: "query-tooltip-text", callback: (_source: this, mark: Mark) => string): number;
    connect_after(signal: "query-tooltip-text", callback: (_source: this, mark: Mark) => string): number;
    emit(signal: "query-tooltip-text", mark: Mark): void;

    // Constructors

    static ["new"](): MarkAttributes;

    // Members

    get_background(): [boolean, Gdk.RGBA];
    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_tooltip_markup(mark: Mark): string;
    get_tooltip_text(mark: Mark): string;
    render_icon(widget: Gtk.Widget, size: number): Gdk.Paintable;
    set_background(background: Gdk.RGBA): void;
    set_gicon(gicon: Gio.Icon): void;
    set_icon_name(icon_name: string): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
}
export module PrintCompositor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bodyFontName: string;
        buffer: Buffer;
        footerFontName: string;
        headerFontName: string;
        highlightSyntax: boolean;
        lineNumbersFontName: string;
        nPages: number;
        printFooter: boolean;
        printHeader: boolean;
        printLineNumbers: number;
        tabWidth: number;
        wrapMode: Gtk.WrapMode;
    }
}
export class PrintCompositor extends GObject.Object {
    static $gtype: GObject.GType<PrintCompositor>;

    constructor(properties?: Partial<PrintCompositor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PrintCompositor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get bodyFontName(): string;
    set bodyFontName(val: string);
    get buffer(): Buffer;
    get footerFontName(): string;
    set footerFontName(val: string);
    get headerFontName(): string;
    set headerFontName(val: string);
    get highlightSyntax(): boolean;
    set highlightSyntax(val: boolean);
    get lineNumbersFontName(): string;
    set lineNumbersFontName(val: string);
    get nPages(): number;
    get printFooter(): boolean;
    set printFooter(val: boolean);
    get printHeader(): boolean;
    set printHeader(val: boolean);
    get printLineNumbers(): number;
    set printLineNumbers(val: number);
    get tabWidth(): number;
    set tabWidth(val: number);
    get wrapMode(): Gtk.WrapMode;
    set wrapMode(val: Gtk.WrapMode);

    // Constructors

    static ["new"](buffer: Buffer): PrintCompositor;
    static new_from_view(view: View): PrintCompositor;

    // Members

    draw_page(context: Gtk.PrintContext, page_nr: number): void;
    get_body_font_name(): string;
    get_bottom_margin(unit: Gtk.Unit): number;
    get_buffer(): Buffer;
    get_footer_font_name(): string;
    get_header_font_name(): string;
    get_highlight_syntax(): boolean;
    get_left_margin(unit: Gtk.Unit): number;
    get_line_numbers_font_name(): string;
    get_n_pages(): number;
    get_pagination_progress(): number;
    get_print_footer(): boolean;
    get_print_header(): boolean;
    get_print_line_numbers(): number;
    get_right_margin(unit: Gtk.Unit): number;
    get_tab_width(): number;
    get_top_margin(unit: Gtk.Unit): number;
    get_wrap_mode(): Gtk.WrapMode;
    ignore_tag(tag: Gtk.TextTag): void;
    paginate(context: Gtk.PrintContext): boolean;
    set_body_font_name(font_name: string): void;
    set_bottom_margin(margin: number, unit: Gtk.Unit): void;
    set_footer_font_name(font_name?: string | null): void;
    set_footer_format(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void;
    set_header_font_name(font_name?: string | null): void;
    set_header_format(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void;
    set_highlight_syntax(highlight: boolean): void;
    set_left_margin(margin: number, unit: Gtk.Unit): void;
    set_line_numbers_font_name(font_name?: string | null): void;
    set_print_footer(print: boolean): void;
    set_print_header(print: boolean): void;
    set_print_line_numbers(interval: number): void;
    set_right_margin(margin: number, unit: Gtk.Unit): void;
    set_tab_width(width: number): void;
    set_top_margin(margin: number, unit: Gtk.Unit): void;
    set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
}
export module Region {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        buffer: Gtk.TextBuffer;
    }
}
export class Region extends GObject.Object {
    static $gtype: GObject.GType<Region>;

    constructor(properties?: Partial<Region.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Region.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffer(): Gtk.TextBuffer;

    // Constructors

    static ["new"](buffer: Gtk.TextBuffer): Region;

    // Members

    add_region(region_to_add?: Region | null): void;
    add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
    get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
    get_buffer(): Gtk.TextBuffer | null;
    get_start_region_iter(): RegionIter;
    intersect_region(region2?: Region | null): Region | null;
    intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
    is_empty(): boolean;
    subtract_region(region_to_subtract?: Region | null): void;
    subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
    to_string(): string | null;
}
export module SearchContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        buffer: Buffer;
        highlight: boolean;
        matchStyle: Style;
        occurrencesCount: number;
        regexError: GLib.Error;
        settings: SearchSettings;
    }
}
export class SearchContext extends GObject.Object {
    static $gtype: GObject.GType<SearchContext>;

    constructor(properties?: Partial<SearchContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SearchContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffer(): Buffer;
    get highlight(): boolean;
    set highlight(val: boolean);
    get matchStyle(): Style;
    set matchStyle(val: Style);
    get occurrencesCount(): number;
    get regexError(): GLib.Error;
    get settings(): SearchSettings;

    // Constructors

    static ["new"](buffer: Buffer, settings?: SearchSettings | null): SearchContext;

    // Members

    backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
    backward_async(
        iter: Gtk.TextIter,
        cancellable?: Gio.Cancellable | null
    ): Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
    backward_async(
        iter: Gtk.TextIter,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    backward_async(
        iter: Gtk.TextIter,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
    backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
    forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
    forward_async(
        iter: Gtk.TextIter,
        cancellable?: Gio.Cancellable | null
    ): Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
    forward_async(
        iter: Gtk.TextIter,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    forward_async(
        iter: Gtk.TextIter,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
    forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
    get_buffer(): Buffer;
    get_highlight(): boolean;
    get_match_style(): Style;
    get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;
    get_occurrences_count(): number;
    get_regex_error(): GLib.Error | null;
    get_settings(): SearchSettings;
    replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;
    replace_all(replace: string, replace_length: number): number;
    set_highlight(highlight: boolean): void;
    set_match_style(match_style?: Style | null): void;
}
export module SearchSettings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        atWordBoundaries: boolean;
        caseSensitive: boolean;
        regexEnabled: boolean;
        searchText: string;
        wrapAround: boolean;
    }
}
export class SearchSettings extends GObject.Object {
    static $gtype: GObject.GType<SearchSettings>;

    constructor(properties?: Partial<SearchSettings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SearchSettings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get atWordBoundaries(): boolean;
    set atWordBoundaries(val: boolean);
    get caseSensitive(): boolean;
    set caseSensitive(val: boolean);
    get regexEnabled(): boolean;
    set regexEnabled(val: boolean);
    get searchText(): string;
    set searchText(val: string);
    get wrapAround(): boolean;
    set wrapAround(val: boolean);

    // Constructors

    static ["new"](): SearchSettings;

    // Members

    get_at_word_boundaries(): boolean;
    get_case_sensitive(): boolean;
    get_regex_enabled(): boolean;
    get_search_text(): string | null;
    get_wrap_around(): boolean;
    set_at_word_boundaries(at_word_boundaries: boolean): void;
    set_case_sensitive(case_sensitive: boolean): void;
    set_regex_enabled(regex_enabled: boolean): void;
    set_search_text(search_text?: string | null): void;
    set_wrap_around(wrap_around: boolean): void;
}
export module Snippet {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        buffer: Gtk.TextBuffer;
        description: string;
        focusPosition: number;
        languageId: string;
        name: string;
        trigger: string;
    }
}
export class Snippet extends GObject.Object {
    static $gtype: GObject.GType<Snippet>;

    constructor(properties?: Partial<Snippet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Snippet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffer(): Gtk.TextBuffer;
    get description(): string;
    set description(val: string);
    get focusPosition(): number;
    get languageId(): string;
    set languageId(val: string);
    get name(): string;
    set name(val: string);
    get trigger(): string;
    set trigger(val: string);

    // Constructors

    static ["new"](trigger?: string | null, language_id?: string | null): Snippet;
    static new_parsed(text: string): Snippet;

    // Members

    add_chunk(chunk: SnippetChunk): void;
    copy(): Snippet;
    get_context(): SnippetContext | null;
    get_description(): string;
    get_focus_position(): number;
    get_language_id(): string;
    get_n_chunks(): number;
    get_name(): string;
    get_nth_chunk(nth: number): SnippetChunk;
    get_trigger(): string | null;
    set_description(description: string): void;
    set_language_id(language_id: string): void;
    set_name(name: string): void;
    set_trigger(trigger: string): void;
}
export module SnippetChunk {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        context: SnippetContext;
        focusPosition: number;
        spec: string;
        text: string;
        textSet: boolean;
        tooltipText: string;
    }
}
export class SnippetChunk extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<SnippetChunk>;

    constructor(properties?: Partial<SnippetChunk.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SnippetChunk.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get context(): SnippetContext;
    set context(val: SnippetContext);
    get focusPosition(): number;
    set focusPosition(val: number);
    get spec(): string;
    set spec(val: string);
    get text(): string;
    set text(val: string);
    get textSet(): boolean;
    set textSet(val: boolean);
    get tooltipText(): string;
    set tooltipText(val: string);

    // Constructors

    static ["new"](): SnippetChunk;

    // Members

    copy(): SnippetChunk;
    get_context(): SnippetContext;
    get_focus_position(): number;
    get_spec(): string | null;
    get_text(): string;
    get_text_set(): boolean;
    get_tooltip_text(): string;
    set_context(context: SnippetContext): void;
    set_focus_position(focus_position: number): void;
    set_spec(spec: string): void;
    set_text(text: string): void;
    set_text_set(text_set: boolean): void;
    set_tooltip_text(tooltip_text: string): void;
}
export module SnippetContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SnippetContext extends GObject.Object {
    static $gtype: GObject.GType<SnippetContext>;

    constructor(properties?: Partial<SnippetContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SnippetContext.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](): SnippetContext;

    // Members

    clear_variables(): void;
    expand(input: string): string;
    get_variable(key: string): string | null;
    set_constant(key: string, value: string): void;
    set_line_prefix(line_prefix: string): void;
    set_tab_width(tab_width: number): void;
    set_use_spaces(use_spaces: boolean): void;
    set_variable(key: string, value: string): void;
}
export module SnippetManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        searchPath: string[];
    }
}
export class SnippetManager extends GObject.Object {
    static $gtype: GObject.GType<SnippetManager>;

    constructor(properties?: Partial<SnippetManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SnippetManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get searchPath(): string[];
    set searchPath(val: string[]);

    // Members

    get_search_path(): string[];
    get_snippet(group: string | null, language_id: string | null, trigger: string): Snippet | null;
    list_all(): Gio.ListModel;
    list_groups(): string[];
    list_matching(group?: string | null, language_id?: string | null, trigger_prefix?: string | null): Gio.ListModel;
    set_search_path(dirs?: string[] | null): void;
    static get_default(): SnippetManager;
}
export module SpaceDrawer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        enableMatrix: boolean;
        matrix: GLib.Variant;
    }
}
export class SpaceDrawer extends GObject.Object {
    static $gtype: GObject.GType<SpaceDrawer>;

    constructor(properties?: Partial<SpaceDrawer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SpaceDrawer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get enableMatrix(): boolean;
    set enableMatrix(val: boolean);
    get matrix(): GLib.Variant;
    set matrix(val: GLib.Variant);

    // Constructors

    static ["new"](): SpaceDrawer;

    // Members

    bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void;
    get_enable_matrix(): boolean;
    get_matrix(): GLib.Variant;
    get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags;
    set_enable_matrix(enable_matrix: boolean): void;
    set_matrix(matrix?: GLib.Variant | null): void;
    set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void;
}
export module Style {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        background: string;
        backgroundSet: boolean;
        bold: boolean;
        boldSet: boolean;
        foreground: string;
        foregroundSet: boolean;
        italic: boolean;
        italicSet: boolean;
        lineBackground: string;
        lineBackgroundSet: boolean;
        pangoUnderline: Pango.Underline;
        scale: string;
        scaleSet: boolean;
        strikethrough: boolean;
        strikethroughSet: boolean;
        underlineColor: string;
        underlineColorSet: boolean;
        underlineSet: boolean;
        weight: Pango.Weight;
        weightSet: boolean;
    }
}
export class Style extends GObject.Object {
    static $gtype: GObject.GType<Style>;

    constructor(properties?: Partial<Style.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Style.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get background(): string;
    get backgroundSet(): boolean;
    get bold(): boolean;
    get boldSet(): boolean;
    get foreground(): string;
    get foregroundSet(): boolean;
    get italic(): boolean;
    get italicSet(): boolean;
    get lineBackground(): string;
    get lineBackgroundSet(): boolean;
    get pangoUnderline(): Pango.Underline;
    get scale(): string;
    get scaleSet(): boolean;
    get strikethrough(): boolean;
    get strikethroughSet(): boolean;
    get underlineColor(): string;
    get underlineColorSet(): boolean;
    get underlineSet(): boolean;
    get weight(): Pango.Weight;
    get weightSet(): boolean;

    // Members

    apply(tag: Gtk.TextTag): void;
    copy(): Style;
}
export module StyleScheme {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        description: string;
        filename: string;
        id: string;
        name: string;
    }
}
export class StyleScheme extends GObject.Object {
    static $gtype: GObject.GType<StyleScheme>;

    constructor(properties?: Partial<StyleScheme.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleScheme.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get description(): string;
    get filename(): string;
    get id(): string;
    get name(): string;

    // Members

    get_authors(): string[] | null;
    get_description(): string | null;
    get_filename(): string | null;
    get_id(): string;
    get_metadata(name: string): string | null;
    get_name(): string;
    get_style(style_id: string): Style | null;
}
export module StyleSchemeChooserButton {
    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;
    }
}
export class StyleSchemeChooserButton
    extends Gtk.Button
    implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget, StyleSchemeChooser
{
    static $gtype: GObject.GType<StyleSchemeChooserButton>;

    constructor(properties?: Partial<StyleSchemeChooserButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleSchemeChooserButton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get styleScheme(): StyleScheme;
    set styleScheme(val: StyleScheme);

    // Constructors

    static ["new"](): StyleSchemeChooserButton;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant | null;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant | null;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    get_style_scheme(): StyleScheme;
    set_style_scheme(scheme: StyleScheme): void;
    vfunc_get_style_scheme(): StyleScheme;
    vfunc_set_style_scheme(scheme: StyleScheme): void;
}
export module StyleSchemeChooserWidget {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class StyleSchemeChooserWidget
    extends Gtk.Widget
    implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, StyleSchemeChooser
{
    static $gtype: GObject.GType<StyleSchemeChooserWidget>;

    constructor(properties?: Partial<StyleSchemeChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleSchemeChooserWidget.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get accessibleRole(): Gtk.AccessibleRole;
    set accessibleRole(val: Gtk.AccessibleRole);
    get styleScheme(): StyleScheme;
    set styleScheme(val: StyleScheme);

    // Constructors

    static ["new"](): StyleSchemeChooserWidget;

    // Implemented Members

    get_accessible_role(): Gtk.AccessibleRole;
    reset_property(property: Gtk.AccessibleProperty): void;
    reset_relation(relation: Gtk.AccessibleRelation): void;
    reset_state(state: Gtk.AccessibleState): void;
    update_property(properties: Gtk.AccessibleProperty[], values: GObject.Value[]): void;
    update_relation(relations: Gtk.AccessibleRelation[], values: GObject.Value[]): void;
    update_state(states: Gtk.AccessibleState[], values: GObject.Value[]): void;
    get_buildable_id(): string | null;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, Gtk.BuildableParser, any];
    vfunc_get_id(): string;
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_id(id: string): void;
    get_style_scheme(): StyleScheme;
    set_style_scheme(scheme: StyleScheme): void;
    vfunc_get_style_scheme(): StyleScheme;
    vfunc_set_style_scheme(scheme: StyleScheme): void;
}
export module StyleSchemeManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        schemeIds: string[];
        searchPath: string[];
    }
}
export class StyleSchemeManager extends GObject.Object {
    static $gtype: GObject.GType<StyleSchemeManager>;

    constructor(properties?: Partial<StyleSchemeManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleSchemeManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get schemeIds(): string[];
    get searchPath(): string[];
    set searchPath(val: string[]);

    // Constructors

    static ["new"](): StyleSchemeManager;

    // Members

    append_search_path(path: string): void;
    force_rescan(): void;
    get_scheme(scheme_id: string): StyleScheme | null;
    get_scheme_ids(): string[] | null;
    get_search_path(): string[];
    prepend_search_path(path: string): void;
    set_search_path(path?: string[] | null): void;
    static get_default(): StyleSchemeManager;
}
export module StyleSchemePreview {
    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
        [key: string]: any;
        scheme: StyleScheme;
        selected: boolean;
    }
}
export class StyleSchemePreview
    extends Gtk.Widget
    implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
{
    static $gtype: GObject.GType<StyleSchemePreview>;

    constructor(properties?: Partial<StyleSchemePreview.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleSchemePreview.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get scheme(): StyleScheme;
    get selected(): boolean;
    set selected(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;

    // Implemented Properties

    get accessibleRole(): Gtk.AccessibleRole;
    set accessibleRole(val: Gtk.AccessibleRole);
    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);

    // Constructors

    static ["new"](scheme: StyleScheme): StyleSchemePreview;

    // Members

    get_scheme(): StyleScheme;
    get_selected(): boolean;
    set_selected(selected: boolean): void;

    // Implemented Members

    get_accessible_role(): Gtk.AccessibleRole;
    reset_property(property: Gtk.AccessibleProperty): void;
    reset_relation(relation: Gtk.AccessibleRelation): void;
    reset_state(state: Gtk.AccessibleState): void;
    update_property(properties: Gtk.AccessibleProperty[], values: GObject.Value[]): void;
    update_relation(relations: Gtk.AccessibleRelation[], values: GObject.Value[]): void;
    update_state(states: Gtk.AccessibleState[], values: GObject.Value[]): void;
    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant | null;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant | null;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    get_buildable_id(): string | null;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, Gtk.BuildableParser, any];
    vfunc_get_id(): string;
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_id(id: string): void;
}
export module Tag {
    export interface ConstructorProperties extends Gtk.TextTag.ConstructorProperties {
        [key: string]: any;
        drawSpaces: boolean;
        drawSpacesSet: boolean;
    }
}
export class Tag extends Gtk.TextTag {
    static $gtype: GObject.GType<Tag>;

    constructor(properties?: Partial<Tag.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Tag.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get drawSpaces(): boolean;
    set drawSpaces(val: boolean);
    get drawSpacesSet(): boolean;
    set drawSpacesSet(val: boolean);

    // Constructors

    static ["new"](name?: string | null): Tag;
}
export module View {
    export interface ConstructorProperties extends Gtk.TextView.ConstructorProperties {
        [key: string]: any;
        autoIndent: boolean;
        backgroundPattern: BackgroundPatternType;
        completion: Completion;
        enableSnippets: boolean;
        highlightCurrentLine: boolean;
        indentOnTab: boolean;
        indentWidth: number;
        indenter: Indenter;
        insertSpacesInsteadOfTabs: boolean;
        rightMarginPosition: number;
        showLineMarks: boolean;
        showLineNumbers: boolean;
        showRightMargin: boolean;
        smartBackspace: boolean;
        smartHomeEnd: SmartHomeEndType;
        spaceDrawer: SpaceDrawer;
        tabWidth: number;
    }
}
export class View extends Gtk.TextView implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {
    static $gtype: GObject.GType<View>;

    constructor(properties?: Partial<View.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<View.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get autoIndent(): boolean;
    set autoIndent(val: boolean);
    get backgroundPattern(): BackgroundPatternType;
    set backgroundPattern(val: BackgroundPatternType);
    get completion(): Completion;
    get enableSnippets(): boolean;
    set enableSnippets(val: boolean);
    get highlightCurrentLine(): boolean;
    set highlightCurrentLine(val: boolean);
    get indentOnTab(): boolean;
    set indentOnTab(val: boolean);
    get indentWidth(): number;
    set indentWidth(val: number);
    get indenter(): Indenter;
    set indenter(val: Indenter);
    get insertSpacesInsteadOfTabs(): boolean;
    set insertSpacesInsteadOfTabs(val: boolean);
    get rightMarginPosition(): number;
    set rightMarginPosition(val: number);
    get showLineMarks(): boolean;
    set showLineMarks(val: boolean);
    get showLineNumbers(): boolean;
    set showLineNumbers(val: boolean);
    get showRightMargin(): boolean;
    set showRightMargin(val: boolean);
    get smartBackspace(): boolean;
    set smartBackspace(val: boolean);
    get smartHomeEnd(): SmartHomeEndType;
    set smartHomeEnd(val: SmartHomeEndType);
    get spaceDrawer(): SpaceDrawer;
    get tabWidth(): number;
    set tabWidth(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "change-case", callback: (_source: this, case_type: ChangeCaseType) => void): number;
    connect_after(signal: "change-case", callback: (_source: this, case_type: ChangeCaseType) => void): number;
    emit(signal: "change-case", case_type: ChangeCaseType): void;
    connect(signal: "change-number", callback: (_source: this, count: number) => void): number;
    connect_after(signal: "change-number", callback: (_source: this, count: number) => void): number;
    emit(signal: "change-number", count: number): void;
    connect(signal: "join-lines", callback: (_source: this) => void): number;
    connect_after(signal: "join-lines", callback: (_source: this) => void): number;
    emit(signal: "join-lines"): void;
    connect(
        signal: "line-mark-activated",
        callback: (
            _source: this,
            iter: Gtk.TextIter,
            button: number,
            state: Gdk.ModifierType,
            n_presses: number
        ) => void
    ): number;
    connect_after(
        signal: "line-mark-activated",
        callback: (
            _source: this,
            iter: Gtk.TextIter,
            button: number,
            state: Gdk.ModifierType,
            n_presses: number
        ) => void
    ): number;
    emit(
        signal: "line-mark-activated",
        iter: Gtk.TextIter,
        button: number,
        state: Gdk.ModifierType,
        n_presses: number
    ): void;
    connect(signal: "move-lines", callback: (_source: this, down: boolean) => void): number;
    connect_after(signal: "move-lines", callback: (_source: this, down: boolean) => void): number;
    emit(signal: "move-lines", down: boolean): void;
    connect(signal: "move-to-matching-bracket", callback: (_source: this, extend_selection: boolean) => void): number;
    connect_after(
        signal: "move-to-matching-bracket",
        callback: (_source: this, extend_selection: boolean) => void
    ): number;
    emit(signal: "move-to-matching-bracket", extend_selection: boolean): void;
    connect(signal: "move-words", callback: (_source: this, count: number) => void): number;
    connect_after(signal: "move-words", callback: (_source: this, count: number) => void): number;
    emit(signal: "move-words", count: number): void;
    connect(
        signal: "push-snippet",
        callback: (_source: this, snippet: Snippet, location: Gtk.TextIter) => void
    ): number;
    connect_after(
        signal: "push-snippet",
        callback: (_source: this, snippet: Snippet, location: Gtk.TextIter) => void
    ): number;
    emit(signal: "push-snippet", snippet: Snippet, location: Gtk.TextIter): void;
    connect(signal: "show-completion", callback: (_source: this) => void): number;
    connect_after(signal: "show-completion", callback: (_source: this) => void): number;
    emit(signal: "show-completion"): void;
    connect(signal: "smart-home-end", callback: (_source: this, iter: Gtk.TextIter, count: number) => void): number;
    connect_after(
        signal: "smart-home-end",
        callback: (_source: this, iter: Gtk.TextIter, count: number) => void
    ): number;
    emit(signal: "smart-home-end", iter: Gtk.TextIter, count: number): void;

    // Implemented Properties

    get hadjustment(): Gtk.Adjustment;
    set hadjustment(val: Gtk.Adjustment);
    get hscrollPolicy(): Gtk.ScrollablePolicy;
    set hscrollPolicy(val: Gtk.ScrollablePolicy);
    get vadjustment(): Gtk.Adjustment;
    set vadjustment(val: Gtk.Adjustment);
    get vscrollPolicy(): Gtk.ScrollablePolicy;
    set vscrollPolicy(val: Gtk.ScrollablePolicy);

    // Constructors

    static ["new"](): View;
    static new_with_buffer(buffer: Buffer): View;

    // Members

    get_auto_indent(): boolean;
    get_background_pattern(): BackgroundPatternType;
    get_completion(): Completion;
    get_enable_snippets(): boolean;
    get_gutter(window_type: Gtk.TextWindowType): Gutter;
    // Conflicted with Gtk.TextView.get_gutter
    get_gutter(...args: never[]): any;
    get_highlight_current_line(): boolean;
    get_hover(): Hover;
    get_indent_on_tab(): boolean;
    get_indent_width(): number;
    get_indenter(): Indenter | null;
    get_insert_spaces_instead_of_tabs(): boolean;
    get_mark_attributes(category: string, priority: number): MarkAttributes;
    get_right_margin_position(): number;
    get_show_line_marks(): boolean;
    get_show_line_numbers(): boolean;
    get_show_right_margin(): boolean;
    get_smart_backspace(): boolean;
    get_smart_home_end(): SmartHomeEndType;
    get_space_drawer(): SpaceDrawer;
    get_tab_width(): number;
    get_visual_column(iter: Gtk.TextIter): number;
    indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
    push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void;
    set_auto_indent(enable: boolean): void;
    set_background_pattern(background_pattern: BackgroundPatternType): void;
    set_enable_snippets(enable_snippets: boolean): void;
    set_highlight_current_line(highlight: boolean): void;
    set_indent_on_tab(enable: boolean): void;
    set_indent_width(width: number): void;
    set_indenter(indenter?: Indenter | null): void;
    set_insert_spaces_instead_of_tabs(enable: boolean): void;
    set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void;
    set_right_margin_position(pos: number): void;
    set_show_line_marks(show: boolean): void;
    set_show_line_numbers(show: boolean): void;
    set_show_right_margin(show: boolean): void;
    set_smart_backspace(smart_backspace: boolean): void;
    set_smart_home_end(smart_home_end: SmartHomeEndType): void;
    set_tab_width(width: number): void;
    unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
    vfunc_line_mark_activated(iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number): void;
    vfunc_move_lines(down: boolean): void;
    vfunc_move_words(step: number): void;
    vfunc_push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void;
    vfunc_show_completion(): void;

    // Implemented Members

    get_border(): [boolean, Gtk.Border];
    get_hadjustment(): Gtk.Adjustment | null;
    get_hscroll_policy(): Gtk.ScrollablePolicy;
    get_vadjustment(): Gtk.Adjustment | null;
    get_vscroll_policy(): Gtk.ScrollablePolicy;
    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;
    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Gtk.Border];
}
export module VimIMContext {
    export interface ConstructorProperties extends Gtk.IMContext.ConstructorProperties {
        [key: string]: any;
        commandBarText: string;
        commandText: string;
    }
}
export class VimIMContext extends Gtk.IMContext {
    static $gtype: GObject.GType<VimIMContext>;

    constructor(properties?: Partial<VimIMContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VimIMContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get commandBarText(): string;
    get commandText(): string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "edit", callback: (_source: this, view: View, path: string | null) => void): number;
    connect_after(signal: "edit", callback: (_source: this, view: View, path: string | null) => void): number;
    emit(signal: "edit", view: View, path: string | null): void;
    connect(signal: "execute-command", callback: (_source: this, command: string) => boolean): number;
    connect_after(signal: "execute-command", callback: (_source: this, command: string) => boolean): number;
    emit(signal: "execute-command", command: string): void;
    connect(signal: "format-text", callback: (_source: this, begin: Gtk.TextIter, end: Gtk.TextIter) => void): number;
    connect_after(
        signal: "format-text",
        callback: (_source: this, begin: Gtk.TextIter, end: Gtk.TextIter) => void
    ): number;
    emit(signal: "format-text", begin: Gtk.TextIter, end: Gtk.TextIter): void;
    connect(signal: "write", callback: (_source: this, view: View, path: string | null) => void): number;
    connect_after(signal: "write", callback: (_source: this, view: View, path: string | null) => void): number;
    emit(signal: "write", view: View, path: string | null): void;

    // Constructors

    static ["new"](): VimIMContext;

    // Members

    execute_command(command: string): void;
    get_command_bar_text(): string;
    get_command_text(): string;
}

export class Encoding {
    static $gtype: GObject.GType<Encoding>;

    constructor(copy: Encoding);

    // Members
    copy(): Encoding;
    free(): void;
    get_charset(): string;
    get_name(): string;
    to_string(): string;
    static get_all(): Encoding[];
    static get_current(): Encoding;
    static get_default_candidates(): Encoding[];
    static get_from_charset(charset: string): Encoding | null;
    static get_utf8(): Encoding;
}

export class RegionIter {
    static $gtype: GObject.GType<RegionIter>;

    constructor(copy: RegionIter);

    // Members
    get_subregion(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
    is_end(): boolean;
    next(): boolean;
}

export interface CompletionProposalNamespace {
    $gtype: GObject.GType<CompletionProposal>;
    prototype: CompletionProposalPrototype;
}
export type CompletionProposal = CompletionProposalPrototype;
export interface CompletionProposalPrototype extends GObject.Object {
    // Members

    get_typed_text(): string | null;
    vfunc_get_typed_text(): string | null;
}

export const CompletionProposal: CompletionProposalNamespace;

export interface CompletionProviderNamespace {
    $gtype: GObject.GType<CompletionProvider>;
    prototype: CompletionProviderPrototype;
}
export type CompletionProvider = CompletionProviderPrototype;
export interface CompletionProviderPrototype extends GObject.Object {
    // Members

    activate(context: CompletionContext, proposal: CompletionProposal): void;
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
    get_priority(context: CompletionContext): number;
    get_title(): string | null;
    is_trigger(iter: Gtk.TextIter, ch: number): boolean;
    key_activates(
        context: CompletionContext,
        proposal: CompletionProposal,
        keyval: number,
        state: Gdk.ModifierType
    ): boolean;
    list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
    populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null): Promise<Gio.ListModel>;
    populate_async(
        context: CompletionContext,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    populate_async(
        context: CompletionContext,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.ListModel> | void;
    populate_finish(result: Gio.AsyncResult): Gio.ListModel;
    refilter(context: CompletionContext, model: Gio.ListModel): void;
    vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;
    vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
    vfunc_get_priority(context: CompletionContext): number;
    vfunc_get_title(): string | null;
    vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean;
    vfunc_key_activates(
        context: CompletionContext,
        proposal: CompletionProposal,
        keyval: number,
        state: Gdk.ModifierType
    ): boolean;
    vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
    vfunc_populate_async(context: CompletionContext, cancellable?: Gio.Cancellable | null): Promise<Gio.ListModel>;
    vfunc_populate_async(
        context: CompletionContext,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_populate_async(
        context: CompletionContext,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.ListModel> | void;
    vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;
    vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
}

export const CompletionProvider: CompletionProviderNamespace;

export interface HoverProviderNamespace {
    $gtype: GObject.GType<HoverProvider>;
    prototype: HoverProviderPrototype;
}
export type HoverProvider = HoverProviderPrototype;
export interface HoverProviderPrototype extends GObject.Object {
    // Members

    populate_async(
        context: HoverContext,
        display: HoverDisplay,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    populate_async(
        context: HoverContext,
        display: HoverDisplay,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    populate_async(
        context: HoverContext,
        display: HoverDisplay,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    populate_finish(result: Gio.AsyncResult): boolean;
    vfunc_populate(context: HoverContext, display: HoverDisplay): boolean;
    vfunc_populate_async(
        context: HoverContext,
        display: HoverDisplay,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    vfunc_populate_async(
        context: HoverContext,
        display: HoverDisplay,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_populate_async(
        context: HoverContext,
        display: HoverDisplay,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_populate_finish(result: Gio.AsyncResult): boolean;
}

export const HoverProvider: HoverProviderNamespace;

export interface IndenterNamespace {
    $gtype: GObject.GType<Indenter>;
    prototype: IndenterPrototype;
}
export type Indenter = IndenterPrototype;
export interface IndenterPrototype extends GObject.Object {
    // Members

    indent(view: View, iter: Gtk.TextIter): Gtk.TextIter;
    is_trigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean;
    vfunc_indent(view: View, iter: Gtk.TextIter): Gtk.TextIter;
    vfunc_is_trigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean;
}

export const Indenter: IndenterNamespace;

export interface StyleSchemeChooserNamespace {
    $gtype: GObject.GType<StyleSchemeChooser>;
    prototype: StyleSchemeChooserPrototype;
}
export type StyleSchemeChooser = StyleSchemeChooserPrototype;
export interface StyleSchemeChooserPrototype extends GObject.Object {
    // Properties
    styleScheme: StyleScheme;

    // Members

    get_style_scheme(): StyleScheme;
    set_style_scheme(scheme: StyleScheme): void;
    vfunc_get_style_scheme(): StyleScheme;
    vfunc_set_style_scheme(scheme: StyleScheme): void;
}

export const StyleSchemeChooser: StyleSchemeChooserNamespace;
