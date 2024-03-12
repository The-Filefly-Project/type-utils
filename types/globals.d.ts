import EventEmitter from 'events'

declare global {
    type $EventEmitter = EventEmitter
}
