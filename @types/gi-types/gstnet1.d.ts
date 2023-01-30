/**
 * GstNet 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as Gio from "gio2";
import * as GObject from "gobject2";

export const NET_TIME_PACKET_SIZE: number;
export const PTP_CLOCK_ID_NONE: number;
export const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string;
export const PTP_STATISTICS_NEW_DOMAIN_FOUND: string;
export const PTP_STATISTICS_PATH_DELAY_MEASURED: string;
export const PTP_STATISTICS_TIME_UPDATED: string;
export function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta;
export function buffer_add_net_control_message_meta(
    buffer: Gst.Buffer,
    message: Gio.SocketControlMessage
): NetControlMessageMeta;
export function buffer_get_net_address_meta(buffer: Gst.Buffer): NetAddressMeta;
export function net_address_meta_api_get_type(): GObject.GType;
export function net_address_meta_get_info(): Gst.MetaInfo;
export function net_control_message_meta_api_get_type(): GObject.GType;
export function net_control_message_meta_get_info(): Gst.MetaInfo;
export function net_time_packet_receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress];
export function net_utils_set_socket_tos(socket: Gio.Socket, qos_dscp: number): boolean;
export function ptp_deinit(): void;
export function ptp_init(clock_id: number, interfaces?: string[] | null): boolean;
export function ptp_is_initialized(): boolean;
export function ptp_is_supported(): boolean;
export function ptp_statistics_callback_add(callback: PtpStatisticsCallback): number;
export function ptp_statistics_callback_remove(id: number): void;
export type PtpStatisticsCallback = (domain: number, stats: Gst.Structure) => boolean;
export module NetClientClock {
    export interface ConstructorProperties extends Gst.SystemClock.ConstructorProperties {
        [key: string]: any;
        address: string;
        baseTime: number;
        bus: Gst.Bus;
        internalClock: Gst.Clock;
        minimumUpdateInterval: number;
        port: number;
        qosDscp: number;
        roundTripLimit: number;
    }
}
export class NetClientClock extends Gst.SystemClock {
    static $gtype: GObject.GType<NetClientClock>;

    constructor(properties?: Partial<NetClientClock.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NetClientClock.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get address(): string;
    set address(val: string);
    get baseTime(): number;
    get bus(): Gst.Bus;
    set bus(val: Gst.Bus);
    get internalClock(): Gst.Clock;
    get minimumUpdateInterval(): number;
    set minimumUpdateInterval(val: number);
    get port(): number;
    set port(val: number);
    get qosDscp(): number;
    set qosDscp(val: number);
    get roundTripLimit(): number;
    set roundTripLimit(val: number);

    // Fields
    clock: Gst.SystemClock;

    // Constructors

    static ["new"](name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NetClientClock;
}
export module NetTimeProvider {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        address: string;
        clock: Gst.Clock;
        port: number;
        qosDscp: number;
    }
}
export class NetTimeProvider extends Gst.Object implements Gio.Initable {
    static $gtype: GObject.GType<NetTimeProvider>;

    constructor(properties?: Partial<NetTimeProvider.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NetTimeProvider.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);
    get address(): string;
    get clock(): Gst.Clock;
    get port(): number;
    get qosDscp(): number;
    set qosDscp(val: number);

    // Constructors

    static ["new"](clock: Gst.Clock, address: string | null, port: number): NetTimeProvider;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module NtpClock {
    export interface ConstructorProperties extends NetClientClock.ConstructorProperties {
        [key: string]: any;
    }
}
export class NtpClock extends NetClientClock {
    static $gtype: GObject.GType<NtpClock>;

    constructor(properties?: Partial<NtpClock.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NtpClock.ConstructorProperties>, ...args: any[]): void;

    // Fields
    clock: Gst.SystemClock;

    // Constructors

    static ["new"](name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NtpClock;
}
export module PtpClock {
    export interface ConstructorProperties extends Gst.SystemClock.ConstructorProperties {
        [key: string]: any;
        domain: number;
        grandmasterClockId: number;
        internalClock: Gst.Clock;
        masterClockId: number;
    }
}
export class PtpClock extends Gst.SystemClock {
    static $gtype: GObject.GType<PtpClock>;

    constructor(properties?: Partial<PtpClock.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PtpClock.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get domain(): number;
    get grandmasterClockId(): number;
    get internalClock(): Gst.Clock;
    get masterClockId(): number;

    // Fields
    clock: Gst.SystemClock;

    // Constructors

    static ["new"](name: string, domain: number): PtpClock;
}

export class NetAddressMeta {
    static $gtype: GObject.GType<NetAddressMeta>;

    constructor(copy: NetAddressMeta);

    // Fields
    meta: Gst.Meta;
    addr: Gio.SocketAddress;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class NetClientClockPrivate {
    static $gtype: GObject.GType<NetClientClockPrivate>;

    constructor(copy: NetClientClockPrivate);
}

export class NetControlMessageMeta {
    static $gtype: GObject.GType<NetControlMessageMeta>;

    constructor(copy: NetControlMessageMeta);

    // Fields
    meta: Gst.Meta;
    message: Gio.SocketControlMessage;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class NetTimePacket {
    static $gtype: GObject.GType<NetTimePacket>;

    constructor(buffer: Uint8Array | string);
    constructor(copy: NetTimePacket);

    // Fields
    local_time: Gst.ClockTime;
    remote_time: Gst.ClockTime;

    // Constructors
    static ["new"](buffer: Uint8Array | string): NetTimePacket;

    // Members
    copy(): NetTimePacket;
    free(): void;
    send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean;
    serialize(): number;
    static receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress];
}

export class NetTimeProviderPrivate {
    static $gtype: GObject.GType<NetTimeProviderPrivate>;

    constructor(copy: NetTimeProviderPrivate);
}

export class PtpClockPrivate {
    static $gtype: GObject.GType<PtpClockPrivate>;

    constructor(copy: PtpClockPrivate);
}
