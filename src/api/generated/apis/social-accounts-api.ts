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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { SocialAccount } from '../../generated/models';
import { SocialAccountCreate } from '../../generated/models';
import { SocialAccountStatus } from '../../generated/models';

/**
 * SocialAccountsApiService - Auto-generated
 */
export class SocialAccountsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new social account linked to the current user\'s profile
     * @param {SocialAccountCreate} socialAccountCreate A JSON object containing social provider callback data
     */
    public async addSocialAccount(socialAccountCreate: SocialAccountCreate): Promise<ApiResponse<SocialAccount>> {
        if (socialAccountCreate === null || socialAccountCreate === undefined) {
            throw new ArgumentNullException('socialAccountCreate', 'addSocialAccount');
        }
        const response = await this.post <SocialAccount, SocialAccountCreate>(`/social-accounts`, socialAccountCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Delete a given social account
     * @param {number} socialAccountId The Id of the social account to be deleted
     */
    public async deleteSocialAccount(socialAccountId: number): Promise<ApiResponse<void>> {
        if (socialAccountId === null || socialAccountId === undefined) {
            throw new ArgumentNullException('socialAccountId', 'deleteSocialAccount');
        }
        const response = await this.delete <void>(`/social-accounts/{social_account_id}`.replace(`{${"social_account_id"}}`, encodeURIComponent(String(socialAccountId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get details of a single Social authentication provider
     * @param {number} socialAccountId Unique ID of the provider to be retrieved
     */
    public async getSocialAccount(socialAccountId: number): Promise<ApiResponse<SocialAccount>> {
        if (socialAccountId === null || socialAccountId === undefined) {
            throw new ArgumentNullException('socialAccountId', 'getSocialAccount');
        }
        const response = await this.get <SocialAccount>(`/social-accounts/{social_account_id}`.replace(`{${"social_account_id"}}`, encodeURIComponent(String(socialAccountId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get the connect status of a Social authentication provider, by its name
     * @param {string} socialAccountProviderName Unique name of the provider to be retrieved
     */
    public async getSocialAccountStatusByName(socialAccountProviderName: string): Promise<ApiResponse<SocialAccountStatus>> {
        if (socialAccountProviderName === null || socialAccountProviderName === undefined) {
            throw new ArgumentNullException('socialAccountProviderName', 'getSocialAccountStatusByName');
        }
        const response = await this.get <SocialAccountStatus>(`/social-accounts/{social_account_provider_name}/status`.replace(`{${"social_account_provider_name"}}`, encodeURIComponent(String(socialAccountProviderName))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all social accounts belonging to current user
     */
    public async listSocialAccounts(): Promise<ApiResponse<Array<SocialAccount>>> {
        const response = await this.get <Array<SocialAccount>>(`/social-accounts`);
        return new ApiResponse(response);
    }
}
