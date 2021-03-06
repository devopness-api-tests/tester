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
import { SourceProvider } from '../../generated/models';
import { SourceProviderCreate } from '../../generated/models';

/**
 * SourceProvidersApiService - Auto-generated
 */
export class SourceProvidersApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new source provider linked to the current user\'s profile
     * @param {SourceProviderCreate} sourceProviderCreate A JSON object containing source provider callback data
     */
    public async addSourceProvider(sourceProviderCreate: SourceProviderCreate): Promise<ApiResponse<SourceProvider>> {
        if (sourceProviderCreate === null || sourceProviderCreate === undefined) {
            throw new ArgumentNullException('sourceProviderCreate', 'addSourceProvider');
        }
        const response = await this.post <SourceProvider, SourceProviderCreate>(`/source-providers`, sourceProviderCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Delete a given source provider from current user\'s account
     * @param {number} sourceProviderId Unique Id of the source provider to be deleted
     */
    public async deleteSourceProvider(sourceProviderId: number): Promise<ApiResponse<void>> {
        if (sourceProviderId === null || sourceProviderId === undefined) {
            throw new ArgumentNullException('sourceProviderId', 'deleteSourceProvider');
        }
        const response = await this.delete <void>(`/source-providers/{source_provider_id}`.replace(`{${"source_provider_id"}}`, encodeURIComponent(String(sourceProviderId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get details of a single Source Code provider
     * @param {number} sourceProviderId Unique ID of the provider to be retrieved
     */
    public async getSourceProvider(sourceProviderId: number): Promise<ApiResponse<SourceProvider>> {
        if (sourceProviderId === null || sourceProviderId === undefined) {
            throw new ArgumentNullException('sourceProviderId', 'getSourceProvider');
        }
        const response = await this.get <SourceProvider>(`/source-providers/{source_provider_id}`.replace(`{${"source_provider_id"}}`, encodeURIComponent(String(sourceProviderId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all source code providers linked to current user
     */
    public async listSourceProviders(): Promise<ApiResponse<SourceProvider>> {
        const response = await this.get <SourceProvider>(`/source-providers`);
        return new ApiResponse(response);
    }
}
