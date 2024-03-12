
/**
 * Logging levels used across the Filefly server.
 */
declare type LogLevel = 'critical' | 'error' | 'warn' | 'notice' | 'info' | 'http' | 'debug'

/**
 * Type guard used to make sure filefly libraries comply with the established logging
 * scheme used in the project and that they can safely emit log events.
 * 
 * Any library that has the necessity or is of the high enough importance to the
 * security of the server implements this interface.
 */
declare interface LogEventCapable<LogType = any> extends $EventEmitter<Record<LogLevel, LogType[]>> {
    /** Module scope used for indicating the source of the emitted log events. */
    scope: string
}