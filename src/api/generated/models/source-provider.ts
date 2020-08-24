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
 * @interface SourceProvider
 */
export interface SourceProvider {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof SourceProvider
     */
    id: number;
    /**
     * A formatted version of the `provider` field value, aligned with the provider\'s name branding
     * @type {string}
     * @memberof SourceProvider
     */
    displayable_name?: SourceProviderDisplayableNameEnum;
    /**
     * The name of the Source Authentication provider
     * @type {string}
     * @memberof SourceProvider
     */
    provider: SourceProviderProviderEnum;
    /**
     * The nickname of the user on the Source Authentication provider
     * @type {string}
     * @memberof SourceProvider
     */
    provider_user_nickname: string;
    /**
     * The current user\'s id
     * @type {number}
     * @memberof SourceProvider
     */
    user_id?: number;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof SourceProvider
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof SourceProvider
     */
    updated_at?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SourceProviderDisplayableNameEnum {
    Bitbucket = 'Bitbucket',
    GitHub = 'GitHub',
    GitLab = 'GitLab'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceProviderProviderEnum {
    Bitbucket = 'bitbucket',
    Github = 'github',
    Gitlab = 'gitlab'
}

