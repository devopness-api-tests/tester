/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Service
 */
export interface Service {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof Service
     */
    id: number;
    /**
     * The service name
     * @type {string}
     * @memberof Service
     */
    name: string;
    /**
     * Formatted/human readable version of the service name
     * @type {string}
     * @memberof Service
     */
    displayable_name?: string;
    /**
     * The service current installed version
     * @type {string}
     * @memberof Service
     */
    version?: string | null;
    /**
     * Indicates if the service was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof Service
     */
    auto_generated: boolean;
    /**
     * Indicates if the service is marked for start automatically on operating system boot
     * @type {boolean}
     * @memberof Service
     */
    auto_start: boolean;
    /**
     * The expected initial state of the service after installed
     * @type {string}
     * @memberof Service
     */
    initial_state: ServiceInitialStateEnum;
    /**
     * A text describing the service, provided by the service author
     * @type {string}
     * @memberof Service
     */
    description?: string | null;
    /**
     * Current status of deploying to remote servers the current service
     * @type {string}
     * @memberof Service
     */
    status?: ServiceStatusEnum;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Service
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Service
     */
    updated_at: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ServiceInitialStateEnum {
    Started = 'started',
    Stopped = 'stopped'
}
/**
    * @export
    * @enum {string}
    */
export enum ServiceStatusEnum {
    Pending = 'pending',
    InProgress = 'in-progress',
    Cancelled = 'cancelled',
    Completed = 'completed',
    Failed = 'failed'
}


