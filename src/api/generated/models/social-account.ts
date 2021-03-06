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
 * @interface SocialAccount
 */
export interface SocialAccount {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof SocialAccount
     */
    id: number;
    /**
     * A formatted version of the `provider` field value, aligned with the provider\'s name branding
     * @type {string}
     * @memberof SocialAccount
     */
    displayable_name?: SocialAccountDisplayableNameEnum;
    /**
     * The name of the Social Authentication provider
     * @type {string}
     * @memberof SocialAccount
     */
    provider: SocialAccountProviderEnum;
    /**
     * The nickname of the user on the Social Authentication provider
     * @type {string}
     * @memberof SocialAccount
     */
    provider_user_nickname: string;
    /**
     * Tells if the social account provider is a Source Code Provider/Version Control System. e.g. false for Facebook, true for Github
     * @type {boolean}
     * @memberof SocialAccount
     */
    is_vcs?: boolean;
    /**
     * The current user\'s id
     * @type {number}
     * @memberof SocialAccount
     */
    user_id?: number;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof SocialAccount
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof SocialAccount
     */
    updated_at?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SocialAccountDisplayableNameEnum {
    Bitbucket = 'Bitbucket',
    Facebook = 'Facebook',
    GitHub = 'GitHub',
    GitLab = 'GitLab',
    Google = 'Google',
    LinkedIn = 'LinkedIn'
}
/**
    * @export
    * @enum {string}
    */
export enum SocialAccountProviderEnum {
    Bitbucket = 'bitbucket',
    Facebook = 'facebook',
    Github = 'github',
    Gitlab = 'gitlab',
    Google = 'google',
    Linkedin = 'linkedin'
}


